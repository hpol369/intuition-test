import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLayout } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'When to Trust Your Gut - A Practical Guide',
  description: "Your intuition isn't always wrong. Learn when gut feelings are reliable and when you should slow down and analyze instead.",
};

export default function WhenToTrustYourGut() {
  return (
    <ArticleLayout
      title="When to Trust Your Gut"
      description="A practical guide to knowing when intuition is reliable and when to override it."
      ctaText="Test Your Intuition"
      ctaHref="/intuition-test"
      slug="when-to-trust-your-gut"
      relatedLinks={[
        { title: 'Why Intuition Fails', href: '/learn/why-intuition-fails' },
        { title: 'Scenario Analysis', href: '/learn/best-case-worst-case-analysis' },
      ]}
    >
      <p className="text-zinc-600 leading-relaxed">
        After hearing about all the ways intuition can mislead us, you might conclude that gut feelings
        are useless. That&apos;s not true. Intuition is a powerful tool when used correctly. The key is knowing
        when to trust it and when to override it.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">Intuition Is Pattern Recognition</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        What we call &ldquo;gut feeling&rdquo; is actually your brain&apos;s pattern recognition system at work. When
        you&apos;ve encountered thousands of similar situations, your brain learns to identify subtle cues
        that predict outcomes. This happens below conscious awareness, which is why it feels like instinct.
      </p>
      <p className="text-zinc-600 leading-relaxed">
        This means intuition can be incredibly accurate, but only in domains where you&apos;ve built up
        genuine expertise through repeated exposure and feedback.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">When Gut Feelings Are Reliable</h2>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Areas of Deep Expertise</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        If you&apos;ve spent years in a field and received clear feedback on your judgments, your intuition
        in that domain is probably well-calibrated. A veteran firefighter&apos;s sense that a building is
        about to collapse, or an experienced teacher&apos;s feeling that a student is struggling, these
        intuitions are based on real patterns.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Familiar Situations</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        In situations you&apos;ve encountered many times before, your intuition has learned what works. Your
        sense of how to navigate a difficult conversation with a family member, or your feel for how
        to handle a common work situation, these are often reliable.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Social and Emotional Reads</h3>
      <p className="text-zinc-600 leading-relaxed">
        Humans evolved to read other humans. Your sense that someone is lying, uncomfortable, or
        genuinely interested is often accurate. We process thousands of micro-expressions and body
        language cues without conscious awareness.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">When to Override Your Gut</h2>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Statistics and Probability</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        Any situation involving percentages, risk assessment, or probability should trigger skepticism
        of your intuition. The brain simply wasn&apos;t built for this. Check the numbers.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">Rare Events</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        How often does your flight actually get delayed? How likely is that disease, really? For events
        outside your daily experience, intuition relies on media coverage and memorable anecdotes rather
        than actual frequencies.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">High-Stakes Novel Situations</h3>
      <p className="text-zinc-600 leading-relaxed mb-4">
        If you&apos;re facing a decision you&apos;ve never made before and the stakes are high, take time to analyze.
        Starting a business, making a major career change, buying a house—these aren&apos;t situations where
        intuition has been trained.
      </p>

      <h3 className="text-lg font-medium text-zinc-800 mt-6 mb-3">When You&apos;re Emotional</h3>
      <p className="text-zinc-600 leading-relaxed">
        Strong emotions hijack System 1. If you&apos;re angry, fearful, or excited, your intuition is
        compromised. Wait until the emotion passes before trusting your gut.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">A Simple Decision Framework</h2>
      <p className="text-zinc-600 leading-relaxed mb-4">
        When facing a decision, ask:
      </p>
      <ol className="list-decimal pl-6 text-zinc-600 space-y-2 mb-4">
        <li><strong>Is this a domain where I have genuine expertise?</strong> If yes, lean on intuition.</li>
        <li><strong>Does this involve numbers, probabilities, or rare events?</strong> If yes, analyze.</li>
        <li><strong>Am I emotionally activated right now?</strong> If yes, wait.</li>
        <li><strong>What&apos;s the cost of being wrong?</strong> If high, verify with analysis.</li>
      </ol>

      <div className="bg-zinc-100 rounded-xl p-6 mt-10">
        <h3 className="text-lg font-semibold text-zinc-900 mb-3">Key Takeaways</h3>
        <ul className="list-disc pl-6 text-zinc-600 space-y-2">
          <li>Trust intuition in areas of deep expertise with clear feedback</li>
          <li>Trust intuition for social and emotional reads</li>
          <li>Override intuition for statistics, probability, and rare events</li>
          <li>When stakes are high and situations novel, analyze rather than intuit</li>
          <li>Never trust gut feelings when you&apos;re emotionally activated</li>
        </ul>
      </div>

      <p className="text-zinc-600 leading-relaxed mt-8">
        Curious about your own intuition patterns?{' '}
        <Link href="/intuition-test" className="text-zinc-900 font-medium hover:underline">
          Take our Intuition Test
        </Link>{' '}
        to discover where your gut feeling is calibrated and where it leads you astray. Or if you have
        a specific decision to work through,{' '}
        <Link href="/scenario-planner" className="text-zinc-900 font-medium hover:underline">
          try the Scenario Planner
        </Link>.
      </p>
    </ArticleLayout>
  );
}
