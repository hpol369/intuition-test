import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLayout } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'Decision-Making Under Uncertainty',
  description: 'Most important decisions involve uncertainty. Learn frameworks and tools to make better choices when outcomes are unpredictable.',
};

export default function DecisionMakingUnderUncertainty() {
  return (
    <ArticleLayout
      title="Decision-Making Under Uncertainty"
      description="How to choose wisely when outcomes are unpredictable and certainty is impossible."
      ctaText="Start with the Intuition Test"
      ctaHref="/intuition-test"
      slug="decision-making-under-uncertainty"
      relatedLinks={[
        { title: 'Why Intuition Fails', href: '/learn/why-intuition-fails' },
        { title: 'Scenario Analysis', href: '/learn/best-case-worst-case-analysis' },
      ]}
    >
      <p className="text-zinc-600 leading-relaxed">
        The most important decisions in life share one characteristic: uncertainty. Should you take
        that job? Move to that city? Start that relationship? End it? The outcomes of these choices
        are fundamentally unknowable. Yet we must choose anyway.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">Why Certainty Is Impossible</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        We crave certainty. We want to know that our decisions will work out. We seek guarantees,
        predictions, assurances. But for any decision that matters, certainty doesn&apos;t exist.
      </p>
      <p className="text-zinc-600 leading-relaxed">
        This isn&apos;t a failure of information or analysis. It&apos;s the nature of complex systems. The future
        depends on countless variables, many of which haven&apos;t happened yet. No amount of research can
        eliminate this fundamental uncertainty.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">The Problem with Prediction</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Our instinct is to try harder to predict. Gather more information. Analyze more thoroughly.
        But research consistently shows that beyond a certain point, more information doesn&apos;t improve
        predictions—it just increases confidence (often unwarranted confidence).
      </p>
      <p className="text-zinc-600 leading-relaxed">
        Experts in prediction (economists, political analysts, sports forecasters) perform barely
        better than chance on long-term predictions. If they can&apos;t predict reliably, we certainly
        can&apos;t either.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">Two Approaches to Uncertainty</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Since we can&apos;t eliminate uncertainty, we need to work with it. Two complementary approaches help:
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">1. Understand Your Biases</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Your intuition about uncertain situations is systematically biased. You overweight dramatic risks,
        underweight mundane ones. You see patterns in randomness. You anchor on the first information you
        receive.
      </p>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Knowing <em>where</em> your intuition fails is the first step to compensating for it. When you know
        you&apos;re in a domain where intuition is unreliable, you can slow down and think more carefully.
      </p>
      <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 mb-4">
        <p className="text-sm text-zinc-600">
          <strong>Try it:</strong>{' '}
          <Link href="/intuition-test" className="text-zinc-900 hover:underline">
            The Intuition Test
          </Link>{' '}
          reveals where your gut feeling is calibrated and where it misleads you.
        </p>
      </div>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">2. Prepare for Multiple Outcomes</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Instead of trying to predict the one future that will happen, acknowledge multiple possible
        futures. Think through best case, most likely case, and worst case scenarios. Prepare for each.
      </p>
      <p className="text-zinc-600 leading-relaxed mb-4">
        This shifts the question from &ldquo;What will happen?&rdquo; (unknowable) to &ldquo;What could happen and can
        I handle it?&rdquo; (answerable).
      </p>
      <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 mb-4">
        <p className="text-sm text-zinc-600">
          <strong>Try it:</strong>{' '}
          <Link href="/scenario-planner" className="text-zinc-900 hover:underline">
            The Scenario Planner
          </Link>{' '}
          guides you through structured scenario analysis with AI-powered insights.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">The Uncertainty Checklist</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        When facing an uncertain decision, work through these questions:
      </p>
      <ol className="list-decimal pl-6 text-zinc-600 space-y-3 mb-4">
        <li>
          <strong>Is this a domain where my intuition is reliable?</strong>
          <br />
          <span className="text-sm">If not, don&apos;t trust your gut feeling.</span>
        </li>
        <li>
          <strong>What&apos;s the realistic best case?</strong>
          <br />
          <span className="text-sm">Is the upside worth the risk?</span>
        </li>
        <li>
          <strong>What&apos;s the realistic worst case?</strong>
          <br />
          <span className="text-sm">Can I live with this? Can I recover?</span>
        </li>
        <li>
          <strong>What&apos;s most likely to happen?</strong>
          <br />
          <span className="text-sm">Am I okay with this outcome?</span>
        </li>
        <li>
          <strong>What can I prepare now?</strong>
          <br />
          <span className="text-sm">How can I make each scenario more manageable?</span>
        </li>
        <li>
          <strong>Is this decision reversible?</strong>
          <br />
          <span className="text-sm">If so, bias toward action. If not, take more time.</span>
        </li>
      </ol>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">When to Decide vs. When to Wait</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Uncertainty creates a temptation to delay decisions indefinitely. But waiting has costs too.
        Opportunities pass. Situations change. Inaction is itself a choice.
      </p>
      <p className="text-zinc-600 leading-relaxed mb-4">
        <strong>Decide now if:</strong>
      </p>
      <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-4">
        <li>The decision is reversible</li>
        <li>Waiting won&apos;t provide meaningful new information</li>
        <li>The cost of delay exceeds the benefit of more analysis</li>
        <li>You&apos;ve thought through the scenarios and can accept worst case</li>
      </ul>
      <p className="text-zinc-600 leading-relaxed mb-4">
        <strong>Wait if:</strong>
      </p>
      <ul className="list-disc pl-6 text-zinc-600 space-y-2">
        <li>Specific information is coming that will change your analysis</li>
        <li>The decision is irreversible and you haven&apos;t processed worst case</li>
        <li>You&apos;re emotionally activated and not thinking clearly</li>
        <li>You haven&apos;t done basic scenario analysis</li>
      </ul>

      <div className="bg-zinc-100 rounded-xl p-6 mt-10">
        <h3 className="text-lg font-semibold text-zinc-900 mb-3">Key Takeaways</h3>
        <ul className="list-disc pl-6 text-zinc-600 space-y-2">
          <li>Certainty is impossible for important decisions—accept this</li>
          <li>More information often increases confidence without improving accuracy</li>
          <li>Know where your intuition is biased so you can compensate</li>
          <li>Prepare for multiple scenarios rather than predicting one</li>
          <li>The key question is &ldquo;Can I handle the worst case?&rdquo; not &ldquo;What will happen?&rdquo;</li>
        </ul>
      </div>

      <p className="text-zinc-600 leading-relaxed mt-8">
        Start by understanding your decision-making patterns with{' '}
        <Link href="/intuition-test" className="text-zinc-900 font-medium hover:underline">
          the Intuition Test
        </Link>
        . Then, when you have a specific decision to work through, use{' '}
        <Link href="/scenario-planner" className="text-zinc-900 font-medium hover:underline">
          the Scenario Planner
        </Link>{' '}
        to structure your thinking.
      </p>
    </ArticleLayout>
  );
}
