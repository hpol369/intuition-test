interface ScenarioCardProps {
  type: 'best' | 'likely' | 'worst';
  summary: string;
}

const config = {
  best: {
    label: 'Best Case',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    icon: '↑'
  },
  likely: {
    label: 'Most Likely',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    icon: '→'
  },
  worst: {
    label: 'Worst Case',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    icon: '!'
  }
};

export function ScenarioCard({ type, summary }: ScenarioCardProps) {
  const c = config[type];

  return (
    <div className={`p-4 rounded-xl border ${c.bgColor} ${c.borderColor}`}>
      <div className="flex items-start gap-3">
        <div className={`w-6 h-6 rounded-full ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
          <span className={`text-xs font-bold ${c.iconColor}`}>{c.icon}</span>
        </div>
        <div>
          <p className="text-xs font-medium text-zinc-500 mb-1">{c.label}</p>
          <p className="text-sm text-zinc-800">{summary}</p>
        </div>
      </div>
    </div>
  );
}
