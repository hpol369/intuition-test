import { Question } from '@/lib/types';

interface FeedbackCardProps {
  question: Question;
  isCorrect: boolean;
  onContinue: () => void;
}

export function FeedbackCard({ question, isCorrect, onContinue }: FeedbackCardProps) {
  return (
    <div className={`mt-6 p-6 rounded-2xl ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{isCorrect ? '✓' : '✗'}</span>
        <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-amber-800'}`}>
          {isCorrect ? 'Correct!' : 'Not quite'}
        </span>
      </div>

      <p className="text-gray-700 mb-4">
        {isCorrect ? question.explanation.correct : question.explanation.incorrect}
      </p>

      <div className="bg-white/60 rounded-lg p-4 mb-4">
        <p className="text-sm text-gray-600 italic">
          💡 {question.insight}
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-4">
        Source: {question.source}
      </p>

      <button
        onClick={onContinue}
        className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
      >
        Continue
      </button>
    </div>
  );
}
