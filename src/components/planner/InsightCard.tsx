interface InsightCardProps {
  title: string;
  explanation: string;
}

export function InsightCard({ title, explanation }: InsightCardProps) {
  return (
    <div className="bg-red-50 border border-red-100 rounded-xl p-5">
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-red-600">!</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-red-900 mb-1">Key Risk: {title}</h3>
          <p className="text-sm text-red-800">{explanation}</p>
        </div>
      </div>
    </div>
  );
}
