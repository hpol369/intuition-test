import { BiasType } from '@/lib/types';
import { getBiasDisplayName } from '@/lib/scoring';

interface BiasBreakdownProps {
  strongAreas: BiasType[];
  weakAreas: BiasType[];
}

export function BiasBreakdown({ strongAreas, weakAreas }: BiasBreakdownProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {strongAreas.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
            <span>✓</span> Strong Areas
          </h3>
          <ul className="space-y-1">
            {strongAreas.map(bias => (
              <li key={bias} className="text-green-700 text-sm">
                {getBiasDisplayName(bias)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {weakAreas.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
            <span>⚠</span> Watch Out For
          </h3>
          <ul className="space-y-1">
            {weakAreas.map(bias => (
              <li key={bias} className="text-amber-700 text-sm">
                {getBiasDisplayName(bias)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
