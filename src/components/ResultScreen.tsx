'use client';

import { TestResult } from '@/lib/types';
import { ScoreCircle } from './ScoreCircle';
import { BiasBreakdown } from './BiasBreakdown';

interface ResultScreenProps {
  result: TestResult;
  onRetake: () => void;
}

export function ResultScreen({ result, onRetake }: ResultScreenProps) {
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
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${shareText} ${url}`);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-lg mx-auto text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Your Results
      </h1>
      <p className="text-gray-500 mb-8">Here&apos;s what we learned about your intuition</p>

      <ScoreCircle score={result.score} maxScore={result.maxScore} />

      <div className="mt-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {result.label}
        </h2>
        <p className="text-gray-600">
          {result.description}
        </p>
      </div>

      <BiasBreakdown
        strongAreas={result.strongAreas}
        weakAreas={result.weakAreas}
      />

      <div className="mt-8 space-y-3">
        <button
          onClick={handleShare}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Share Your Result
        </button>

        <button
          onClick={onRetake}
          className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
        >
          Take the Test Again
        </button>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Want to improve your intuition?</h3>
        <div className="text-left space-y-3 text-sm text-gray-600">
          <p>
            <strong>When to trust your gut:</strong> In areas where you have deep experience,
            pattern recognition serves you well. Experts can make accurate snap judgments
            in their domain.
          </p>
          <p>
            <strong>When to slow down:</strong> For statistics, probabilities, and risks -
            especially rare events - your intuition will systematically mislead you.
            Take time to check the numbers.
          </p>
        </div>
      </div>
    </div>
  );
}
