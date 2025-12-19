import { Question } from '@/lib/types';

interface FeedbackCardProps {
  question: Question;
  isCorrect: boolean;
  onContinue: () => void;
}

export function FeedbackCard({ question, isCorrect, onContinue }: FeedbackCardProps) {
  return (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Result indicator */}
      <div className={`rounded-xl border p-5 mb-4 ${
        isCorrect
          ? 'bg-emerald-50 border-emerald-200'
          : 'bg-amber-50 border-amber-200'
      }`}>
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
            isCorrect ? 'bg-emerald-500' : 'bg-amber-500'
          }`}>
            <span className="text-white text-xs font-bold">
              {isCorrect ? '✓' : '!'}
            </span>
          </div>
          <span className={`text-sm font-semibold ${
            isCorrect ? 'text-emerald-900' : 'text-amber-900'
          }`}>
            {isCorrect ? 'Correct' : 'Not quite'}
          </span>
        </div>

        <p className="text-sm text-zinc-700 leading-relaxed">
          {isCorrect ? question.explanation.correct : question.explanation.incorrect}
        </p>
      </div>

      {/* Insight */}
      <div className="bg-white border border-zinc-200 rounded-xl p-5 mb-4">
        <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">
          Key Insight
        </p>
        <p className="text-sm text-zinc-600 leading-relaxed">
          {question.insight}
        </p>
      </div>

      {/* Source */}
      <p className="text-xs text-zinc-400 mb-6">
        Source: {question.source}
      </p>

      {/* Continue button */}
      <button
        onClick={onContinue}
        className="w-full h-12 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 active:scale-[0.98] transition-all"
      >
        Continue
      </button>
    </div>
  );
}
