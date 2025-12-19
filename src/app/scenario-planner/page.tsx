import type { Metadata } from 'next';
import Link from 'next/link';
import ScenarioPlanner from '@/components/planner/ScenarioPlanner';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Scenario Planner - Think Through Your Decision',
  description: "Free tool to structure any decision using best, likely, and worst case scenarios. Get AI-powered insights in 3 minutes.",
  keywords: ['scenario planning', 'decision tool', 'best case worst case', 'decision making'],
  alternates: {
    canonical: '/scenario-planner'
  },
  openGraph: {
    title: 'Scenario Planner - Think Through Your Decision',
    description: 'Structure any decision with best, likely, and worst case scenarios.',
    url: 'https://decisionlab.app/scenario-planner',
    type: 'website'
  }
};

export default function ScenarioPlannerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Scenario Planner",
          "description": "Free tool to structure decisions using best, likely, and worst case scenarios",
          "url": "https://decisionlab.app/scenario-planner",
          "applicationCategory": "Decision Support Tool",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
      <ScenarioPlanner />

      {/* SEO Content Below Tool */}
      <section className="bg-white border-t border-zinc-200 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            What Is Scenario Planning?
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            Scenario planning is a strategic method for making decisions under uncertainty.
            Instead of trying to predict the one future that will happen (impossible for
            complex decisions), you explore multiple plausible futures and prepare for each.
            This approach was developed at Royal Dutch Shell in the 1970s and has since been
            adopted by organizations and individuals worldwide.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            How This Tool Helps
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-4">
            This tool guides you through structured scenario analysis in three steps:
          </p>
          <div className="space-y-3 text-sm text-zinc-600 mb-6">
            <p><strong className="text-zinc-800">1. Define your scenarios:</strong> Describe what best, likely, and worst case outcomes look like for your specific decision.</p>
            <p><strong className="text-zinc-800">2. Assess each scenario:</strong> Rate the likelihood, how you&apos;d feel, and whether you could recover from each outcome.</p>
            <p><strong className="text-zinc-800">3. Get AI-powered analysis:</strong> Receive personalized insights, a preparation checklist, and a regret-minimization framework to guide your decision.</p>
          </div>

          <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            When to Use Scenario Planning
          </h2>
          <div className="space-y-3 text-sm text-zinc-600 mb-6">
            <p><strong className="text-zinc-800">Career decisions:</strong> Job offers, promotions, career changes, starting a business</p>
            <p><strong className="text-zinc-800">Financial decisions:</strong> Major purchases, investments, moving to a new city</p>
            <p><strong className="text-zinc-800">Relationship decisions:</strong> Commitment, relocation for a partner, difficult conversations</p>
            <p><strong className="text-zinc-800">Life transitions:</strong> Education choices, retirement timing, major lifestyle changes</p>
          </div>

          <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            The Science of Decision-Making
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-4">
            Research in decision science shows that humans are poor at predicting single outcomes
            but can effectively prepare for ranges of possibilities. Jeff Bezos popularized the
            &ldquo;regret minimization framework&rdquo;—asking which choice you&apos;d regret least at age 80.
            This tool combines scenario planning with regret minimization to help you think clearly.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            The preparation checklist is based on implementation intentions research, which shows
            that specific &ldquo;if-then&rdquo; plans dramatically increase follow-through compared to vague
            goals or wishes.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            Related Tools
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/intuition-test" className="text-zinc-900 font-medium hover:underline">
                → Intuition Test
              </Link>
              <span className="text-zinc-500"> — Discover where your gut feeling is reliable</span>
            </li>
            <li>
              <Link href="/learn/best-case-worst-case-analysis" className="text-zinc-900 font-medium hover:underline">
                → Scenario Analysis Guide
              </Link>
              <span className="text-zinc-500"> — Learn the methodology in depth</span>
            </li>
            <li>
              <Link href="/learn/decision-making-under-uncertainty" className="text-zinc-900 font-medium hover:underline">
                → Decision-Making Under Uncertainty
              </Link>
              <span className="text-zinc-500"> — A framework for unclear situations</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
