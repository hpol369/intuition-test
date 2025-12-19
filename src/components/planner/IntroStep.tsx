'use client';

import { useState } from 'react';

interface IntroStepProps {
  onContinue: (decision: string) => void;
}

export function IntroStep({ onContinue }: IntroStepProps) {
  const [decision, setDecision] = useState('');

  const handleContinue = () => {
    if (decision.trim().length > 0) {
      onContinue(decision.trim());
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-zinc-600 bg-white border border-zinc-200 rounded-full shadow-sm">
          4 steps · 3 min
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-3">
          Scenario Planner
        </h1>
        <p className="text-zinc-500">
          Think through your decision by exploring what could happen
        </p>
      </div>

      {/* Input card */}
      <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
        <label className="block text-sm font-medium text-zinc-900 mb-2">
          What decision is on your mind?
        </label>
        <p className="text-xs text-zinc-500 mb-4">
          Describe it in a sentence or two. Be specific.
        </p>
        <textarea
          value={decision}
          onChange={(e) => setDecision(e.target.value.slice(0, 200))}
          placeholder="e.g., Should I leave my job to start freelancing?"
          className="w-full p-4 border border-zinc-200 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
          rows={3}
        />
        <div className="flex justify-end mt-2">
          <span className="text-xs text-zinc-400">{decision.length}/200</span>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={handleContinue}
        disabled={decision.trim().length === 0}
        className="w-full mt-6 h-12 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 active:scale-[0.98] transition-all disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed disabled:active:scale-100"
      >
        Continue
      </button>

      <p className="text-xs text-zinc-400 text-center mt-4">
        Your input stays private and is not stored
      </p>
    </div>
  );
}
