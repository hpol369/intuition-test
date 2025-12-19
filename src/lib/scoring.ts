import { Question, UserAnswer, TestResult, BiasType } from './types';
import { questions } from '@/data/questions';

export function calculateResult(answers: UserAnswer[]): TestResult {
  const score = answers.filter(a => a.isCorrect).length;
  const maxScore = questions.length;

  // Determine strong and weak areas
  const biasPerformance = new Map<BiasType, { correct: number; total: number }>();

  answers.forEach(answer => {
    const current = biasPerformance.get(answer.biasType) || { correct: 0, total: 0 };
    biasPerformance.set(answer.biasType, {
      correct: current.correct + (answer.isCorrect ? 1 : 0),
      total: current.total + 1
    });
  });

  const strongAreas: BiasType[] = [];
  const weakAreas: BiasType[] = [];

  biasPerformance.forEach((perf, bias) => {
    const accuracy = perf.correct / perf.total;
    if (accuracy >= 0.5) {
      strongAreas.push(bias);
    } else {
      weakAreas.push(bias);
    }
  });

  // Determine label and description
  const { label, description } = getScoreLabel(score, maxScore);

  return {
    score,
    maxScore,
    answers,
    strongAreas,
    weakAreas,
    label,
    description
  };
}

function getScoreLabel(score: number, maxScore: number): { label: string; description: string } {
  const percentage = score / maxScore;

  if (percentage <= 0.28) { // 0-2
    return {
      label: "Intuition Often Misleading",
      description: "Your gut reactions frequently conflict with reality. This isn't bad - awareness is the first step. You'll benefit most from pausing before quick judgments."
    };
  } else if (percentage <= 0.57) { // 3-4
    return {
      label: "Mixed Intuition",
      description: "Your intuition is right about as often as it's wrong. You have good instincts in some areas but blind spots in others. Knowing which is which is valuable."
    };
  } else if (percentage <= 0.85) { // 5-6
    return {
      label: "Strong Intuition",
      description: "You resist many common thinking traps. Your gut feelings are well-calibrated to reality in most situations. Trust it - but verify on high-stakes decisions."
    };
  } else { // 7
    return {
      label: "Exceptionally Calibrated",
      description: "Remarkable. You avoided nearly every cognitive trap. You either have unusual natural calibration or have trained yourself well. Either way, your instincts are trustworthy."
    };
  }
}

export function getBiasDisplayName(bias: BiasType): string {
  const names: Record<BiasType, string> = {
    'availability': 'Availability Bias',
    'gamblers-fallacy': "Gambler's Fallacy",
    'base-rate-neglect': 'Base Rate Neglect',
    'conjunction-fallacy': 'Conjunction Fallacy',
    'pattern-recognition': 'Pattern Recognition',
    'probability-intuition': 'Probability Intuition'
  };
  return names[bias];
}
