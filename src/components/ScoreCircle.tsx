interface ScoreCircleProps {
  score: number;
  maxScore: number;
}

export function ScoreCircle({ score, maxScore }: ScoreCircleProps) {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 54; // radius = 54
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="#e4e4e7"
          strokeWidth="6"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="#18181b"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-semibold text-zinc-900 tabular-nums">{score}</span>
        <span className="text-xs text-zinc-500">of {maxScore}</span>
      </div>
    </div>
  );
}
