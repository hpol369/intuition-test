'use client';

import { useState } from 'react';
import { AnalysisResult } from '@/lib/types';
import { ScenarioCard } from './ScenarioCard';
import { InsightCard } from './InsightCard';
import { ChecklistCard } from './ChecklistCard';
import { RegretCheck } from './RegretCheck';
import Link from 'next/link';

interface ResultsViewProps {
  result: AnalysisResult;
  onStartOver: () => void;
}

export function ResultsView({ result, onStartOver }: ResultsViewProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const text = `I used the Scenario Planner to think through: "${result.summary.decision}"`;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: 'Scenario Planner', text, url });
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-zinc-600 bg-white border border-zinc-200 rounded-full mb-6">
          Analysis Complete
        </span>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
          Your Scenario Analysis
        </h1>
        <p className="text-sm text-zinc-500">{result.summary.decision}</p>
      </div>

      {/* Scenario Overview */}
      <div className="space-y-3 mb-6">
        <ScenarioCard type="best" summary={result.summary.scenarios.best} />
        <ScenarioCard type="likely" summary={result.summary.scenarios.likely} />
        <ScenarioCard type="worst" summary={result.summary.scenarios.worst} />
      </div>

      {/* Key Risk */}
      <div className="mb-6">
        <InsightCard
          title={result.keyRisk.title}
          explanation={result.keyRisk.explanation}
        />
      </div>

      {/* Preparation Checklist */}
      <div className="mb-6">
        <ChecklistCard items={result.preparationSteps} />
      </div>

      {/* Regret Check */}
      <div className="mb-6">
        <RegretCheck
          question={result.regretCheck.question}
          insight={result.regretCheck.insight}
        />
      </div>

      {/* Decision Frame */}
      <div className="bg-zinc-900 text-white rounded-xl p-5 mb-8">
        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xs">→</span>
          </div>
          Bottom Line
        </h3>
        <p className="text-sm text-zinc-300">{result.decisionFrame}</p>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={handleShare}
          className="w-full h-12 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 active:scale-[0.98] transition-all"
        >
          {copied ? 'Copied to clipboard!' : 'Share this analysis'}
        </button>
        <button
          onClick={onStartOver}
          className="w-full h-12 bg-white text-zinc-700 text-sm font-medium rounded-lg border border-zinc-200 hover:bg-zinc-50 active:scale-[0.98] transition-all"
        >
          Plan another decision
        </button>
      </div>

      {/* Cross-sell */}
      <div className="mt-10 pt-8 border-t border-zinc-200 text-center">
        <p className="text-sm text-zinc-500 mb-3">
          Want to understand your decision-making patterns?
        </p>
        <Link
          href="/intuition-test"
          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          Take the Intuition Test
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
