import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { DecisionInput, AnalysisResult } from '@/lib/types';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const input: DecisionInput = await request.json();

    const prompt = buildAnalysisPrompt(input);

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    // Extract text from response
    const responseText = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map(block => block.text)
      .join('');

    // Parse JSON from response
    const analysis = parseAnalysisResponse(responseText);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze scenarios' },
      { status: 500 }
    );
  }
}

function buildAnalysisPrompt(input: DecisionInput): string {
  return `You are helping someone think through an important life decision. Your role is supportive, clear, and practical. You help create clarity, not anxiety.

DECISION: "${input.decision}"

BEST CASE SCENARIO:
${input.bestCase.description}
${input.bestCase.likelihood ? `(User rates likelihood: ${input.bestCase.likelihood})` : ''}

MOST LIKELY SCENARIO:
${input.likelyCase.description}
${input.likelyCase.feeling ? `(User anticipates feeling: ${input.likelyCase.feeling})` : ''}

WORST CASE SCENARIO:
${input.worstCase.description}
${input.worstCase.recoverability ? `(User rates recovery: ${input.worstCase.recoverability})` : ''}

Analyze these scenarios and respond with ONLY a JSON object (no markdown, no explanation) in this exact format:

{
  "summary": {
    "decision": "One sentence summary of the decision",
    "scenarios": {
      "best": "One sentence summary of best case",
      "likely": "One sentence summary of likely case",
      "worst": "One sentence summary of worst case"
    }
  },
  "keyRisk": {
    "title": "The main risk in 3-5 words",
    "explanation": "2-3 sentences explaining why this is the key thing to watch out for. Be specific to their situation."
  },
  "preparationSteps": [
    {
      "scenario": "worst",
      "ifThis": "If [specific thing from worst case]...",
      "thenConsider": "Practical preparation step (1 sentence)"
    },
    {
      "scenario": "likely",
      "ifThis": "If [specific thing from likely case]...",
      "thenConsider": "Practical preparation step (1 sentence)"
    },
    {
      "scenario": "best",
      "ifThis": "If [specific thing from best case]...",
      "thenConsider": "How to maximize this opportunity (1 sentence)"
    }
  ],
  "regretCheck": {
    "question": "A personalized yes/no question about whether they can live with the worst case",
    "insight": "1-2 sentences of perspective on what their answer might mean",
    "acceptable": null
  },
  "decisionFrame": "One sentence framing the decision: 'This decision makes sense if you [specific condition based on their scenarios].'"
}

IMPORTANT RULES:
- Be warm and supportive, not clinical
- Be specific to THEIR situation, not generic
- Never predict outcomes or give percentages
- Never give medical, legal, or financial advice
- Focus on preparation, not prediction
- Keep language simple and human
- The preparation steps should be actionable and specific`;
}

function parseAnalysisResponse(text: string): AnalysisResult {
  try {
    // Remove any markdown code blocks if present
    const cleaned = text.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(cleaned);
  } catch {
    // Fallback structure if parsing fails
    return {
      summary: {
        decision: "Your decision",
        scenarios: {
          best: "Best outcome",
          likely: "Expected outcome",
          worst: "Challenging outcome"
        }
      },
      keyRisk: {
        title: "Uncertainty",
        explanation: "We couldn't fully analyze your scenarios. Consider reviewing your inputs and trying again."
      },
      preparationSteps: [],
      regretCheck: {
        question: "Can you accept the worst case if it happens?",
        insight: "This is the fundamental question for any big decision.",
        acceptable: null
      },
      decisionFrame: "Consider whether you can live with both the best and worst outcomes."
    };
  }
}
