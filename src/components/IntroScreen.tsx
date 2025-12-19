interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="text-center max-w-lg mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Intuition Test
      </h1>
      <p className="text-xl text-gray-600 mb-2">
        How Accurate Is Your Gut Feeling?
      </p>
      <p className="text-gray-500 mb-8">
        7 questions • 2 minutes • Instant results
      </p>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-8 text-left">
        <h2 className="font-semibold text-indigo-900 mb-2">What you&apos;ll discover:</h2>
        <ul className="space-y-2 text-indigo-800">
          <li className="flex items-start gap-2">
            <span className="mt-1">→</span>
            <span>Where your intuition is surprisingly accurate</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">→</span>
            <span>Where your gut systematically misleads you</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">→</span>
            <span>Which cognitive biases affect you most</span>
          </li>
        </ul>
      </div>

      <button
        onClick={onStart}
        className="w-full py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Start the Test
      </button>

      <p className="text-sm text-gray-400 mt-4">
        No signup required • Free forever
      </p>
    </div>
  );
}
