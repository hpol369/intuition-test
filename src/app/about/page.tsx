import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About DecisionLab',
  description: 'DecisionLab builds free tools to help people make better decisions under uncertainty. No accounts, no tracking, just clarity.',
};

export default function AboutPage() {
  return (
    <main className="bg-[#fafafa] py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
            About DecisionLab
          </h1>
          <p className="text-lg text-zinc-500">
            A calm place to think clearly.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-zinc-600">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">What we do</h2>
            <p className="leading-relaxed">
              We build free tools that help people make better decisions under uncertainty.
              Our goal is simple: help you think clearly when certainty isn&apos;t possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">Our tools</h2>
            <div className="space-y-4">
              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <h3 className="font-medium text-zinc-900 mb-1">Intuition Test</h3>
                <p className="text-sm">
                  Discover where your gut feeling is accurate and where it systematically misleads you.
                  Based on decades of research in behavioral psychology.
                </p>
                <Link
                  href="/intuition-test"
                  className="inline-block mt-3 text-sm font-medium text-zinc-900 hover:text-zinc-600"
                >
                  Take the test →
                </Link>
              </div>
              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <h3 className="font-medium text-zinc-900 mb-1">Scenario Planner</h3>
                <p className="text-sm">
                  Structure any important decision using best, likely, and worst case scenarios.
                  Get AI-powered analysis and a practical preparation checklist.
                </p>
                <Link
                  href="/scenario-planner"
                  className="inline-block mt-3 text-sm font-medium text-zinc-900 hover:text-zinc-600"
                >
                  Start planning →
                </Link>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">Our principles</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-zinc-400">→</span>
                <div>
                  <strong className="text-zinc-900">Free forever.</strong> No premium plans, no paywalls.
                  These tools should be accessible to everyone.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400">→</span>
                <div>
                  <strong className="text-zinc-900">No accounts required.</strong> Use the tools without
                  signing up. Your data stays in your browser.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400">→</span>
                <div>
                  <strong className="text-zinc-900">Privacy by design.</strong> We don&apos;t track you,
                  sell your data, or show ads. The tools work for you, not us.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400">→</span>
                <div>
                  <strong className="text-zinc-900">Research-backed.</strong> Our content is based on
                  established research in behavioral psychology and decision science.
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">What we&apos;re not</h2>
            <p className="leading-relaxed">
              We&apos;re not financial advisors, therapists, or life coaches. Our tools help you think
              more clearly, but they don&apos;t replace professional advice. For medical, legal, or
              financial decisions, consult qualified professionals.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">Start thinking clearly</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/intuition-test"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Take the Intuition Test
            </Link>
            <Link
              href="/scenario-planner"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors"
            >
              Try Scenario Planner
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
