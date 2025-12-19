interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="max-w-md mx-auto">
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-zinc-600 bg-white border border-zinc-200 rounded-full shadow-sm">
          7 questions · 2 min
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
          Intuition Test
        </h1>
        <p className="text-zinc-500">
          How accurate is your gut feeling?
        </p>
      </div>

      {/* Info card */}
      <div className="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="text-sm font-medium text-zinc-900 mb-4">What you&apos;ll discover</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs text-zinc-600">1</span>
            </div>
            <p className="text-sm text-zinc-600">Where your intuition is surprisingly accurate</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs text-zinc-600">2</span>
            </div>
            <p className="text-sm text-zinc-600">Where your gut systematically misleads you</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs text-zinc-600">3</span>
            </div>
            <p className="text-sm text-zinc-600">Which cognitive biases affect you most</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onStart}
        className="w-full h-12 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 active:scale-[0.98] transition-all"
      >
        Start the test
      </button>

      <p className="text-center text-xs text-zinc-400 mt-4">
        No signup required
      </p>
    </div>
  );
}
