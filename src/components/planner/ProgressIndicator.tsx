import { PlannerStep } from '@/lib/types';

interface ProgressIndicatorProps {
  currentStep: PlannerStep;
}

const steps: PlannerStep[] = ['intro', 'best', 'likely', 'worst', 'results'];

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  if (currentStep === 'loading' || currentStep === 'results') return null;

  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className="flex justify-center gap-2 mb-10">
      {steps.slice(0, 4).map((step, index) => (
        <div
          key={step}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index <= currentIndex ? 'bg-zinc-900' : 'bg-zinc-200'
          }`}
        />
      ))}
    </div>
  );
}
