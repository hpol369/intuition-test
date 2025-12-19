'use client';

import { useState } from 'react';
import { Likelihood, Feeling, Recoverability, Scenario } from '@/lib/types';

interface ScenarioStepProps {
  type: 'best' | 'likely' | 'worst';
  decision: string;
  onContinue: (scenario: Scenario) => void;
  onBack: () => void;
}

const config = {
  best: {
    title: 'Best Case',
    subtitle: 'If everything goes well...',
    question: 'What does the best realistic outcome look like?',
    placeholder: 'e.g., I get clients quickly, income grows steadily, I have more freedom...',
    optionLabel: 'How likely does this feel?',
    options: ['low', 'medium', 'high'] as Likelihood[]
  },
  likely: {
    title: 'Most Likely',
    subtitle: 'Being realistic...',
    question: 'What will probably happen?',
    placeholder: 'e.g., It takes 6 months to get stable, some stress, but manageable...',
    optionLabel: 'How would this feel?',
    options: ['okay', 'mixed', 'disappointing'] as Feeling[]
  },
  worst: {
    title: 'Worst Case',
    subtitle: "If things don't work out...",
    question: "What's the realistic worst case?",
    placeholder: 'e.g., I run out of savings after 8 months and need to find a job again...',
    optionLabel: 'Could you recover from this?',
    options: ['yes', 'maybe', 'hard'] as Recoverability[]
  }
};

export function ScenarioStep({ type, decision, onContinue, onBack }: ScenarioStepProps) {
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const c = config[type];

  const handleContinue = () => {
    if (description.trim().length === 0) return;

    const scenario: Scenario = {
      type,
      description: description.trim(),
    };

    if (type === 'best' && selectedOption) {
      scenario.likelihood = selectedOption as Likelihood;
    } else if (type === 'likely' && selectedOption) {
      scenario.feeling = selectedOption as Feeling;
    } else if (type === 'worst' && selectedOption) {
      scenario.recoverability = selectedOption as Recoverability;
    }

    onContinue(scenario);
  };

  const getOptionLabel = (option: string): string => {
    const labels: Record<string, string> = {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      okay: 'Okay',
      mixed: 'Mixed',
      disappointing: 'Disappointing',
      yes: 'Yes',
      maybe: 'Maybe',
      hard: 'Would be hard'
    };
    return labels[option] || option;
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="text-zinc-500 hover:text-zinc-900 mb-6 flex items-center gap-1.5 text-sm transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Decision reminder */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 mb-8">
        <p className="text-xs text-zinc-500 mb-1">Your decision</p>
        <p className="text-sm text-zinc-900">{decision}</p>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-zinc-900 mb-1">{c.title}</h2>
        <p className="text-zinc-500 text-sm">{c.subtitle}</p>
      </div>

      {/* Input card */}
      <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
        <label className="block text-sm font-medium text-zinc-900 mb-3">
          {c.question}
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value.slice(0, 300))}
          placeholder={c.placeholder}
          className="w-full p-4 border border-zinc-200 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
          rows={4}
        />
        <div className="flex justify-end mt-2 mb-6">
          <span className="text-xs text-zinc-400">{description.length}/300</span>
        </div>

        {/* Optional selector */}
        <div className="border-t border-zinc-100 pt-5">
          <p className="text-sm text-zinc-600 mb-3">
            {c.optionLabel} <span className="text-zinc-400">(optional)</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {c.options.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedOption(selectedOption === option ? undefined : option)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedOption === option
                    ? 'bg-zinc-900 text-white'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {getOptionLabel(option)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={handleContinue}
        disabled={description.trim().length === 0}
        className="w-full mt-6 h-12 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 active:scale-[0.98] transition-all disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed disabled:active:scale-100"
      >
        Continue
      </button>
    </div>
  );
}
