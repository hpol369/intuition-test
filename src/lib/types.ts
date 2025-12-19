export type BiasType =
  | 'availability'
  | 'gamblers-fallacy'
  | 'base-rate-neglect'
  | 'conjunction-fallacy'
  | 'pattern-recognition'
  | 'probability-intuition';

export interface Question {
  id: number;
  type: BiasType;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: {
    correct: string;
    incorrect: string;
  };
  insight: string;
  source: string;
  percentWrong: number;
}

export interface UserAnswer {
  questionId: number;
  selectedIndex: number;
  isCorrect: boolean;
  biasType: BiasType;
}

export interface TestResult {
  score: number;
  maxScore: number;
  answers: UserAnswer[];
  strongAreas: BiasType[];
  weakAreas: BiasType[];
  label: string;
  description: string;
}

// Scenario Planner Types
export type Likelihood = 'low' | 'medium' | 'high';
export type Feeling = 'okay' | 'mixed' | 'disappointing';
export type Recoverability = 'yes' | 'maybe' | 'hard';

export interface Scenario {
  type: 'best' | 'likely' | 'worst';
  description: string;
  likelihood?: Likelihood;
  feeling?: Feeling;
  recoverability?: Recoverability;
}

export interface DecisionInput {
  decision: string;
  bestCase: Scenario;
  likelyCase: Scenario;
  worstCase: Scenario;
}

export interface AnalysisResult {
  summary: {
    decision: string;
    scenarios: {
      best: string;
      likely: string;
      worst: string;
    };
  };
  keyRisk: {
    title: string;
    explanation: string;
  };
  preparationSteps: {
    scenario: 'best' | 'likely' | 'worst';
    ifThis: string;
    thenConsider: string;
  }[];
  regretCheck: {
    question: string;
    insight: string;
    acceptable: boolean | null;
  };
  decisionFrame: string;
}

export type PlannerStep = 'intro' | 'best' | 'likely' | 'worst' | 'loading' | 'results';
