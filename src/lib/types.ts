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
