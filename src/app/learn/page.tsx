import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learn - Decision Making Resources',
  description: 'Articles about intuition, cognitive biases, and structured decision-making. Research-backed insights for better choices.',
};

const articles = [
  {
    title: 'Why Intuition Fails',
    description: 'The science behind gut feeling errors and when your instincts mislead you.',
    href: '/learn/why-intuition-fails',
    category: 'Intuition'
  },
  {
    title: 'When to Trust Your Gut',
    description: 'A practical guide to knowing when intuition is reliable and when to override it.',
    href: '/learn/when-to-trust-your-gut',
    category: 'Intuition'
  },
  {
    title: 'Best Case Worst Case Analysis',
    description: 'A simple framework for thinking through decisions using scenario planning.',
    href: '/learn/best-case-worst-case-analysis',
    category: 'Frameworks'
  },
  {
    title: 'Decision-Making Under Uncertainty',
    description: 'How to choose wisely when outcomes are unpredictable and certainty is impossible.',
    href: '/learn/decision-making-under-uncertainty',
    category: 'Frameworks'
  }
];

export default function LearnPage() {
  return (
    <main className="bg-[#fafafa] py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
            Learn
          </h1>
          <p className="text-lg text-zinc-500">
            Research-backed insights on intuition, cognitive biases, and better decision-making.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-4">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="bg-white border border-zinc-200 rounded-xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h2 className="text-lg font-semibold text-zinc-900 mt-1 mb-2 group-hover:text-zinc-700">
                    {article.title}
                  </h2>
                  <p className="text-sm text-zinc-500">
                    {article.description}
                  </p>
                </div>
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Tools CTA */}
        <div className="mt-12 bg-zinc-900 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Ready to apply what you&apos;ve learned?
          </h2>
          <p className="text-sm text-zinc-400 mb-6">
            Our free tools help you put these concepts into practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/intuition-test"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Take the Intuition Test
            </Link>
            <Link
              href="/scenario-planner"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-zinc-800 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Try Scenario Planner
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
