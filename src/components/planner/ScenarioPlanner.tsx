'use client';

import { useState } from 'react';
import { PlannerStep, Scenario, DecisionInput, AnalysisResult } from '@/lib/types';
import { ProgressIndicator } from './ProgressIndicator';
import { IntroStep } from './IntroStep';
import { ScenarioStep } from './ScenarioStep';
import { LoadingStep } from './LoadingStep';
import { ResultsView } from './ResultsView';

export default function ScenarioPlanner() {
  const [step, setStep] = useState<PlannerStep>('intro');
  const [decision, setDecision] = useState('');
  const [bestCase, setBestCase] = useState<Scenario | null>(null);
  const [likelyCase, setLikelyCase] = useState<Scenario | null>(null);
  const [, setWorstCase] = useState<Scenario | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleIntroComplete = (dec: string) => {
    setDecision(dec);
    setStep('best');
  };

  const handleBestComplete = (scenario: Scenario) => {
    setBestCase(scenario);
    setStep('likely');
  };

  const handleLikelyComplete = (scenario: Scenario) => {
    setLikelyCase(scenario);
    setStep('worst');
  };

  const handleWorstComplete = async (scenario: Scenario) => {
    setWorstCase(scenario);
    setStep('loading');
    setError(null);

    const input: DecisionInput = {
      decision,
      bestCase: bestCase!,
      likelyCase: likelyCase!,
      worstCase: scenario
    };

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const analysisResult = await response.json();
      setResult(analysisResult);
      setStep('results');
    } catch {
      setError('Something went wrong. Please try again.');
      setStep('worst');
    }
  };

  const handleStartOver = () => {
    setStep('intro');
    setDecision('');
    setBestCase(null);
    setLikelyCase(null);
    setWorstCase(null);
    setResult(null);
    setError(null);
  };

  const handleBack = () => {
    if (step === 'best') setStep('intro');
    else if (step === 'likely') setStep('best');
    else if (step === 'worst') setStep('likely');
  };

  return (
    <main className="min-h-screen bg-[#fafafa] py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <ProgressIndicator currentStep={step} />

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center">
            {error}
          </div>
        )}

        {step === 'intro' && (
          <IntroStep onContinue={handleIntroComplete} />
        )}

        {step === 'best' && (
          <ScenarioStep
            type="best"
            decision={decision}
            onContinue={handleBestComplete}
            onBack={handleBack}
          />
        )}

        {step === 'likely' && (
          <ScenarioStep
            type="likely"
            decision={decision}
            onContinue={handleLikelyComplete}
            onBack={handleBack}
          />
        )}

        {step === 'worst' && (
          <ScenarioStep
            type="worst"
            decision={decision}
            onContinue={handleWorstComplete}
            onBack={handleBack}
          />
        )}

        {step === 'loading' && (
          <LoadingStep />
        )}

        {step === 'results' && result && (
          <ResultsView result={result} onStartOver={handleStartOver} />
        )}
      </div>
    </main>
  );
}
