import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">D</span>
              </div>
              <span className="font-semibold text-zinc-900">DecisionLab</span>
            </Link>
            <p className="text-sm text-zinc-500">
              Built for clarity, not clicks.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-3">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/intuition-test" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Intuition Test
                </Link>
              </li>
              <li>
                <Link href="/scenario-planner" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Scenario Planner
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-3">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learn/why-intuition-fails" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Why Intuition Fails
                </Link>
              </li>
              <li>
                <Link href="/learn/when-to-trust-your-gut" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  When to Trust Your Gut
                </Link>
              </li>
              <li>
                <Link href="/learn/best-case-worst-case-analysis" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Scenario Analysis
                </Link>
              </li>
              <li>
                <Link href="/learn/decision-making-under-uncertainty" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  Decisions Under Uncertainty
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                  About DecisionLab
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200">
          <p className="text-xs text-zinc-400 text-center">
            Free tools for better decisions. No accounts, no tracking, no BS.
          </p>
        </div>
      </div>
    </footer>
  );
}
