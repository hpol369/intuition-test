interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-medium text-zinc-500">
          Question {current} of {total}
        </span>
        <span className="text-xs text-zinc-400">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full h-1 bg-zinc-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-zinc-900 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
