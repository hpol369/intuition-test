import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLayout } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'Best Case Worst Case Analysis - A Simple Decision Framework',
  description: 'Learn how to use best case, most likely, and worst case scenarios to make better decisions. Free tool included.',
};

export default function BestCaseWorstCaseAnalysis() {
  return (
    <ArticleLayout
      title="Best Case Worst Case Analysis"
      description="A simple framework for thinking through decisions using scenario planning."
      ctaText="Try the Scenario Planner"
      ctaHref="/scenario-planner"
      relatedLinks={[
        { title: 'Decision-Making Under Uncertainty', href: '/learn/decision-making-under-uncertainty' },
        { title: 'When to Trust Your Gut', href: '/learn/when-to-trust-your-gut' },
      ]}
    >
      <p className="text-zinc-600 leading-relaxed">
        When facing an important decision, the natural instinct is to try to predict what will happen.
        Will this job work out? Will this investment pay off? Will this relationship succeed? But
        prediction is notoriously unreliable. A better approach is to prepare for multiple possibilities.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">What Is Scenario Analysis?</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Scenario analysis is a structured way to think about decisions under uncertainty. Instead of
        asking &ldquo;What will happen?&rdquo; you ask &ldquo;What could happen?&rdquo; and prepare for each possibility.
      </p>
      <p className="text-zinc-600 leading-relaxed">
        The method originated in military strategy and corporate planning, but it&apos;s equally valuable
        for personal decisions like career changes, major purchases, or life transitions.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">The Three-Scenario Framework</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        The simplest and most practical version uses three scenarios:
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">1. Best Case</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        What happens if things go well? Not fantasy-level well, but realistically well. What does
        success look like? This scenario helps you identify what you&apos;re hoping for and whether the
        potential upside justifies the risk.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">2. Most Likely Case</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        What will probably happen? Strip away both optimism and pessimism. Based on everything you know,
        what&apos;s the realistic outcome? This is your planning baseline.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">3. Worst Case</h3>
      <p className="text-zinc-600 leading-relaxed">
        What happens if things don&apos;t work out? Again, not catastrophe-level, but realistic worst case.
        Can you recover from this? Can you live with it? This is the crucial question that determines
        whether the decision is worth the risk.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">How to Identify Each Scenario</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        For each scenario, ask yourself:
      </p>
      <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-4">
        <li><strong>What would have to happen</strong> for this scenario to occur?</li>
        <li><strong>What would you do</strong> if this scenario unfolded?</li>
        <li><strong>How would you feel</strong> in this scenario?</li>
        <li><strong>What could you prepare now</strong> to handle this scenario better?</li>
      </ul>
      <p className="text-zinc-600 leading-relaxed">
        Be specific. Vague scenarios aren&apos;t useful. &ldquo;It could go badly&rdquo; isn&apos;t helpful.
        &ldquo;I could run out of savings in 8 months and need to find a new job&rdquo; is actionable.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">Common Mistakes to Avoid</h2>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Being Too Extreme</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Best case isn&apos;t winning the lottery. Worst case isn&apos;t death. Keep scenarios within the realm
        of probability. Extreme scenarios lead to either reckless optimism or paralyzing fear.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Ignoring the Most Likely Case</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        We tend to focus on extremes. But the most likely outcome is what you should plan around.
        If you&apos;re not okay with the most likely case, the decision probably isn&apos;t right for you.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Not Preparing for Worst Case</h3>
      <p className="text-zinc-600 leading-relaxed">
        Acknowledging worst case isn&apos;t pessimism, it&apos;s prudence. If you can&apos;t live with the worst case,
        don&apos;t take the risk. If you can prepare to make worst case more survivable, do so.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">When This Method Works Best</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Scenario analysis is most valuable for:
      </p>
      <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-4">
        <li><strong>Career decisions:</strong> Job changes, starting a business, going freelance</li>
        <li><strong>Life transitions:</strong> Moving cities, major relationships, life changes</li>
        <li><strong>Major purchases:</strong> Houses, cars, significant investments of time or money</li>
        <li><strong>Any decision with uncertain outcomes</strong> where the stakes matter</li>
      </ul>

      <p className="text-zinc-600 leading-relaxed">
        It&apos;s <em>not</em> designed for financial investment advice, medical decisions, or anything
        requiring professional expertise.
      </p>

      <div className="bg-zinc-100 rounded-xl p-6 mt-10">
        <h3 className="text-lg font-semibold text-zinc-900 mb-3">Key Takeaways</h3>
        <ul className="list-disc pl-6 text-zinc-600 space-y-2">
          <li>Don&apos;t try to predict—prepare for multiple possibilities</li>
          <li>Use three scenarios: best case, most likely, and worst case</li>
          <li>Keep scenarios realistic, not extreme</li>
          <li>The crucial question: Can you live with the worst case?</li>
          <li>Prepare now to make each scenario more manageable</li>
        </ul>
      </div>

      <p className="text-zinc-600 leading-relaxed mt-8">
        Ready to think through a decision?{' '}
        <Link href="/scenario-planner" className="text-zinc-900 font-medium hover:underline">
          Try our Scenario Planner
        </Link>{' '}
        to map out your best, likely, and worst case scenarios with AI-powered insights. Or first{' '}
        <Link href="/intuition-test" className="text-zinc-900 font-medium hover:underline">
          take the Intuition Test
        </Link>{' '}
        to understand your decision-making patterns.
      </p>
    </ArticleLayout>
  );
}
