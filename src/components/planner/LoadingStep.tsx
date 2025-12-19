export function LoadingStep() {
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <div className="inline-block mb-6">
        <div className="w-10 h-10 border-2 border-zinc-200 border-t-zinc-900 rounded-full animate-spin" />
      </div>
      <h2 className="text-lg font-semibold text-zinc-900 mb-2">
        Analyzing your scenarios...
      </h2>
      <p className="text-sm text-zinc-500">
        Finding patterns and preparation strategies
      </p>
    </div>
  );
}
