import type { Metadata } from 'next';
import Link from 'next/link';
import IntuitionTest from '@/components/IntuitionTest';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Intuition Test - How Accurate Is Your Gut Feeling?',
  description: 'Take this free 2-minute test to discover where your intuition is accurate and where it systematically misleads you. 7 questions, instant results.',
  keywords: ['intuition test', 'gut feeling test', 'intuition accuracy', 'cognitive bias test'],
  alternates: {
    canonical: '/intuition-test'
  },
  openGraph: {
    title: 'Intuition Test - How Accurate Is Your Gut Feeling?',
    description: 'Free 2-minute test to discover where your gut feeling helps and where it misleads you.',
    url: 'https://decisionlab.app/intuition-test',
    type: 'website'
  }
};

export default function IntuitionTestPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Intuition Test",
          "description": "Free interactive test to discover how accurate your gut feeling really is",
          "url": "https://decisionlab.app/intuition-test",
          "applicationCategory": "Self-Assessment Tool",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
      <IntuitionTest />

      {/* SEO Content Below Tool */}
      <section className="bg-white border-t border-zinc-200 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            How This Test Works
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            This test measures your intuition accuracy across different types of uncertainty:
            probability estimation, risk assessment, and pattern recognition. Each question
            presents a real-world scenario where most people&apos;s gut feelings conflict with reality.
            After each answer, you&apos;ll see an explanation of why intuition typically fails (or succeeds)
            in that situation.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            What Your Score Means
          </h2>
          <div className="space-y-3 text-sm text-zinc-600 mb-6">
            <p><strong className="text-zinc-800">0-2 correct:</strong> Your intuition frequently conflicts with reality in these domains. This awareness is valuable—you know when to slow down and check the numbers.</p>
            <p><strong className="text-zinc-800">3-4 correct:</strong> Mixed results. Your gut is calibrated in some areas but has blind spots in others.</p>
            <p><strong className="text-zinc-800">5-6 correct:</strong> Strong intuition. You resist many common thinking traps, though some biases may still affect you.</p>
            <p><strong className="text-zinc-800">7 correct:</strong> Exceptionally calibrated. You avoid nearly every cognitive trap tested here.</p>
          </div>

          <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            The Science Behind Intuition
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed mb-4">
            Behavioral psychologists Daniel Kahneman and Amos Tversky discovered that human decision-making
            operates on two systems: fast, automatic intuition (System 1) and slow, deliberate analysis
            (System 2). While intuition serves us well in familiar situations, it systematically fails
            when dealing with probability, statistics, and rare events.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            This test is based on their research and subsequent work in behavioral economics. The questions
            are designed to reveal specific cognitive biases including availability bias, base rate neglect,
            the gambler&apos;s fallacy, and pattern recognition errors.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mb-4">
            Related Resources
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/scenario-planner" className="text-zinc-900 font-medium hover:underline">
                → Scenario Planner
              </Link>
              <span className="text-zinc-500"> — Structure a specific decision you&apos;re facing</span>
            </li>
            <li>
              <Link href="/learn/why-intuition-fails" className="text-zinc-900 font-medium hover:underline">
                → Why Intuition Fails
              </Link>
              <span className="text-zinc-500"> — Deep dive into the research</span>
            </li>
            <li>
              <Link href="/learn/when-to-trust-your-gut" className="text-zinc-900 font-medium hover:underline">
                → When to Trust Your Gut
              </Link>
              <span className="text-zinc-500"> — A practical guide</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
