'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TestResult } from '@/lib/types';
import { ScoreCircle } from './ScoreCircle';
import { BiasBreakdown } from './BiasBreakdown';

interface ResultScreenProps {
  result: TestResult;
  onRetake: () => void;
}

export function ResultScreen({ result, onRetake }: ResultScreenProps) {
  const [copied, setCopied] = useState(false);
  const shareText = `I scored ${result.score}/${result.maxScore} on the Intuition Test! My gut feeling is: ${result.label}. Take the test:`;

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Intuition Test Result',
          text: shareText,
          url: url
        });
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(`${shareText} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-zinc-600 bg-white border border-zinc-200 rounded-full mb-6">
          Test Complete
        </span>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
          Your Results
        </h1>
      </div>

      {/* Score */}
      <div className="bg-white border border-zinc-200 rounded-2xl p-8 mb-6 shadow-sm">
        <ScoreCircle score={result.score} maxScore={result.maxScore} />

        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold text-zinc-900 mb-2">
            {result.label}
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            {result.description}
          </p>
        </div>
      </div>

      {/* Bias breakdown */}
      <BiasBreakdown
        strongAreas={result.strongAreas}
        weakAreas={result.weakAreas}
      />

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <button
          onClick={handleShare}
          className="w-full h-12 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 active:scale-[0.98] transition-all"
        >
          {copied ? 'Copied to clipboard!' : 'Share your result'}
        </button>

        <button
          onClick={onRetake}
          className="w-full h-12 bg-white text-zinc-700 text-sm font-medium rounded-lg border border-zinc-200 hover:bg-zinc-50 active:scale-[0.98] transition-all"
        >
          Take the test again
        </button>
      </div>

      {/* Tips */}
      <div className="mt-10 pt-8 border-t border-zinc-200">
        <h3 className="text-sm font-medium text-zinc-900 mb-4">Improve your intuition</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs text-zinc-600">1</span>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-700">Trust your gut in familiar areas</p>
              <p className="text-xs text-zinc-500 mt-0.5">Experts make accurate snap judgments in their domain.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs text-zinc-600">2</span>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-700">Slow down for statistics</p>
              <p className="text-xs text-zinc-500 mt-0.5">For probabilities and rare events, check the numbers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario Planner CTA */}
      <div className="mt-8 bg-zinc-900 rounded-xl p-6 text-center">
        <p className="text-sm text-zinc-300 mb-4">
          When intuition isn&apos;t enough, use structured thinking.
        </p>
        <Link
          href="/scenario-planner"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-100 active:scale-[0.98] transition-all"
        >
          Try Scenario Planner
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
