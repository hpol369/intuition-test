interface ChecklistItem {
  scenario: 'best' | 'likely' | 'worst';
  ifThis: string;
  thenConsider: string;
}

interface ChecklistCardProps {
  items: ChecklistItem[];
}

export function ChecklistCard({ items }: ChecklistCardProps) {
  if (items.length === 0) return null;

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-zinc-900 mb-4 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
          <span className="text-xs">✓</span>
        </div>
        Preparation Checklist
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-l-2 border-zinc-200 pl-4">
            <p className="text-xs text-zinc-500 mb-1">{item.ifThis}</p>
            <p className="text-sm text-zinc-800">{item.thenConsider}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
