import Link from 'next/link';
import { ToolCard } from '@/components/home/ToolCard';

export default function Home() {
  return (
    <main className="bg-[#fafafa]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
            Think Clearly. Decide Better.
          </h1>
          <p className="text-lg text-zinc-500 mb-4 max-w-xl mx-auto">
            Two free tools to help you make decisions when certainty isn&apos;t possible.
          </p>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <ToolCard
              title="Intuition Test"
              description="Discover where your gut feeling is accurate — and where it systematically misleads you."
              href="/intuition-test"
              cta="Take the Test"
              duration="2 min"
              icon="brain"
            />
            <ToolCard
              title="Scenario Planner"
              description="Structure your decision with best, likely, and worst case thinking. Get AI-powered insights."
              href="/scenario-planner"
              cta="Start Planning"
              duration="3 min"
              icon="map"
            />
          </div>
        </div>
      </section>

      {/* Tool Selector */}
      <section className="py-16 px-6 bg-white border-y border-zinc-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-zinc-900 text-center mb-8">
            Which tool is right for you?
          </h2>
          <div className="space-y-4">
            <Link
              href="/intuition-test"
              className="flex items-center gap-4 p-4 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-zinc-400 group-hover:text-zinc-600">?</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-zinc-600">
                  &ldquo;I want to understand my thinking patterns&rdquo;
                </p>
              </div>
              <div className="text-sm font-medium text-zinc-900">
                Intuition Test →
              </div>
            </Link>
            <Link
              href="/scenario-planner"
              className="flex items-center gap-4 p-4 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-zinc-400 group-hover:text-zinc-600">!</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-zinc-600">
                  &ldquo;I have a specific decision to work through&rdquo;
                </p>
              </div>
              <div className="text-sm font-medium text-zinc-900">
                Scenario Planner →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-zinc-900 text-center mb-8">
            From the Learn section
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/learn/why-intuition-fails"
              className="p-5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors"
            >
              <h3 className="text-sm font-medium text-zinc-900 mb-1">
                Why Intuition Fails
              </h3>
              <p className="text-xs text-zinc-500">
                The science behind gut feeling errors
              </p>
            </Link>
            <Link
              href="/learn/when-to-trust-your-gut"
              className="p-5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors"
            >
              <h3 className="text-sm font-medium text-zinc-900 mb-1">
                When to Trust Your Gut
              </h3>
              <p className="text-xs text-zinc-500">
                A practical guide to intuition
              </p>
            </Link>
            <Link
              href="/learn/best-case-worst-case-analysis"
              className="p-5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors"
            >
              <h3 className="text-sm font-medium text-zinc-900 mb-1">
                Scenario Analysis
              </h3>
              <p className="text-xs text-zinc-500">
                A simple decision framework
              </p>
            </Link>
            <Link
              href="/learn/decision-making-under-uncertainty"
              className="p-5 bg-white border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors"
            >
              <h3 className="text-sm font-medium text-zinc-900 mb-1">
                Decisions Under Uncertainty
              </h3>
              <p className="text-xs text-zinc-500">
                How to choose when you can&apos;t know
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
