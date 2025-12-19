import { BiasType } from '@/lib/types';
import { getBiasDisplayName } from '@/lib/scoring';

interface BiasBreakdownProps {
  strongAreas: BiasType[];
  weakAreas: BiasType[];
}

export function BiasBreakdown({ strongAreas, weakAreas }: BiasBreakdownProps) {
  if (strongAreas.length === 0 && weakAreas.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-3 mt-8">
      {strongAreas.length > 0 && (
        <div className="bg-white border border-zinc-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-emerald-600 text-xs">✓</span>
            </div>
            <h3 className="text-sm font-medium text-zinc-900">Strong Areas</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {strongAreas.map(bias => (
              <span
                key={bias}
                className="inline-flex px-2.5 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-md"
              >
                {getBiasDisplayName(bias)}
              </span>
            ))}
          </div>
        </div>
      )}

      {weakAreas.length > 0 && (
        <div className="bg-white border border-zinc-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="text-amber-600 text-xs">!</span>
            </div>
            <h3 className="text-sm font-medium text-zinc-900">Watch Out For</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {weakAreas.map(bias => (
              <span
                key={bias}
                className="inline-flex px-2.5 py-1 text-xs font-medium text-amber-700 bg-amber-50 rounded-md"
              >
                {getBiasDisplayName(bias)}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
