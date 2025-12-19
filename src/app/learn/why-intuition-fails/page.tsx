import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLayout } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'Why Intuition Fails - The Science of Gut Feeling Errors',
  description: 'Learn why your gut feeling is often wrong about probability, risk, and rare events. Understand the cognitive biases that mislead your intuition.',
};

export default function WhyIntuitionFails() {
  return (
    <ArticleLayout
      title="Why Intuition Fails"
      description="The science behind gut feeling errors and when your instincts mislead you."
      ctaText="Test Your Intuition"
      ctaHref="/intuition-test"
      relatedLinks={[
        { title: 'When to Trust Your Gut', href: '/learn/when-to-trust-your-gut' },
        { title: 'Decision-Making Under Uncertainty', href: '/learn/decision-making-under-uncertainty' },
      ]}
    >
      <p className="text-zinc-600 leading-relaxed">
        Your gut feeling seems instant, effortless, and often correct. But decades of research in behavioral
        psychology reveal a troubling pattern: in specific, predictable situations, human intuition
        systematically fails. Understanding when and why can help you make better decisions.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">The Dual Process Theory</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Psychologists Daniel Kahneman and Amos Tversky identified two systems of thinking. <strong>System 1</strong> is
        fast, automatic, and intuitive. It&apos;s what we call &ldquo;gut feeling.&rdquo; <strong>System 2</strong> is slow,
        deliberate, and analytical. It&apos;s what we use for complex calculations.
      </p>
      <p className="text-zinc-600 leading-relaxed">
        Most of the time, System 1 serves us well. It lets us navigate the world without consciously
        processing every detail. But System 1 evolved for a different environment than the one we live in
        today, and it carries biases that can lead us astray.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">Where Intuition Works Well</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Intuition excels in domains where you have genuine expertise built through repeated feedback:
      </p>
      <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-4">
        <li>A chess master recognizing a winning position</li>
        <li>An experienced nurse sensing something is wrong with a patient</li>
        <li>A seasoned driver reacting to road conditions</li>
      </ul>
      <p className="text-zinc-600 leading-relaxed">
        In these cases, intuition is essentially pattern recognition. The brain has processed thousands of
        examples and learned to identify subtle cues that predict outcomes.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">Where Intuition Systematically Fails</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Intuition reliably fails in situations involving:
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Probability and Statistics</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        The human brain didn&apos;t evolve to process probabilities. We consistently overestimate the likelihood
        of dramatic, memorable events (plane crashes) and underestimate mundane risks (falling out of bed).
        This is called <strong>availability bias</strong>.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Base Rates</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        When we hear that a medical test is &ldquo;99% accurate,&rdquo; intuition tells us a positive result means
        we probably have the disease. But if the disease affects only 1 in 1,000 people, most positive
        results are actually false positives. We ignore the base rate and focus on the vivid information.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Random Sequences</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        After five coin flips land on heads, intuition screams that tails is &ldquo;due.&rdquo; This is the
        <strong> gambler&apos;s fallacy</strong>. Random events have no memory. The coin doesn&apos;t know what happened
        before. Yet casinos profit billions from this intuitive error.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Pattern Recognition in Noise</h3>
      <p className="text-zinc-600 leading-relaxed">
        We see patterns where none exist. A sequence like HTHTTH &ldquo;looks&rdquo; more random than HHHHHH,
        but both are equally likely. We&apos;re so primed to find patterns that we find them even in pure
        randomness.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">How to Know When to Override Your Gut</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Ask yourself these questions:
      </p>
      <ul className="list-disc pl-6 text-zinc-600 space-y-2 mb-4">
        <li>Does this situation involve probabilities or statistics?</li>
        <li>Am I reacting to something dramatic or emotionally charged?</li>
        <li>Do I have genuine expertise in this specific domain?</li>
        <li>Am I looking for patterns in what might be random data?</li>
      </ul>
      <p className="text-zinc-600 leading-relaxed">
        If the answer to the first two questions is &ldquo;yes&rdquo; and the answer to the third is &ldquo;no,&rdquo;
        slow down. Engage System 2. Check the numbers. Your intuition is likely misleading you.
      </p>

      <div className="bg-zinc-100 rounded-xl p-6 mt-10">
        <h3 className="text-lg font-semibold text-zinc-900 mb-3">Key Takeaways</h3>
        <ul className="list-disc pl-6 text-zinc-600 space-y-2">
          <li>Intuition is fast pattern recognition, not mystical insight</li>
          <li>It works well in domains where you have genuine, feedback-rich expertise</li>
          <li>It fails systematically with probability, statistics, and rare events</li>
          <li>Awareness of these biases is the first step to better decisions</li>
        </ul>
      </div>

      <p className="text-zinc-600 leading-relaxed mt-8">
        Want to see where your intuition is accurate and where it misleads you?{' '}
        <Link href="/intuition-test" className="text-zinc-900 font-medium hover:underline">
          Take our free Intuition Test
        </Link>{' '}
        to find out.
      </p>
    </ArticleLayout>
  );
}
