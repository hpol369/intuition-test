import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] px-6">
      <div className="max-w-md w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-zinc-600 bg-white border border-zinc-200 rounded-full">
            7 questions · 2 min · Free
          </span>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
            Intuition Test
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Discover where your gut feeling is accurate — and where it systematically misleads you.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/intuition-test"
          className="flex items-center justify-center w-full h-12 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 active:scale-[0.98]"
        >
          Start the test
        </Link>

        {/* Trust signals */}
        <p className="text-center text-xs text-zinc-400 mt-6">
          No signup required · Based on behavioral science research
        </p>
      </div>
    </main>
  );
}
