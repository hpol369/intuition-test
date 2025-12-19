interface ScoreCircleProps {
  score: number;
  maxScore: number;
}

export function ScoreCircle({ score, maxScore }: ScoreCircleProps) {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getColor = () => {
    if (percentage <= 28) return '#EF4444'; // red
    if (percentage <= 57) return '#F59E0B'; // amber
    if (percentage <= 85) return '#10B981'; // green
    return '#6366F1'; // indigo
  };

  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
        <circle
          cx="80"
          cy="80"
          r="45"
          stroke="#E5E7EB"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="80"
          cy="80"
          r="45"
          stroke={getColor()}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-gray-800">{score}</span>
        <span className="text-gray-500">out of {maxScore}</span>
      </div>
    </div>
  );
}
