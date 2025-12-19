interface RegretCheckProps {
  question: string;
  insight: string;
}

export function RegretCheck({ question, insight }: RegretCheckProps) {
  return (
    <div className="bg-violet-50 border border-violet-100 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-violet-900 mb-3 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center">
          <span className="text-xs">?</span>
        </div>
        The Regret Check
      </h3>
      <p className="text-sm font-medium text-violet-900 mb-3">
        {question}
      </p>
      <p className="text-xs text-violet-700">
        {insight}
      </p>
    </div>
  );
}
