'use client';

import { useState } from 'react';
import { questions } from '@/data/questions';
import { UserAnswer, TestResult } from '@/lib/types';
import { calculateResult } from '@/lib/scoring';
import { IntroScreen } from '@/components/IntroScreen';
import { QuestionScreen } from '@/components/QuestionScreen';
import { ResultScreen } from '@/components/ResultScreen';

type TestPhase = 'intro' | 'questions' | 'results';

export default function IntuitionTest() {
  const [phase, setPhase] = useState<TestPhase>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [result, setResult] = useState<TestResult | null>(null);

  const handleStart = () => {
    setPhase('questions');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (selectedIndex: number, isCorrect: boolean) => {
    const question = questions[currentQuestionIndex];

    const newAnswer: UserAnswer = {
      questionId: question.id,
      selectedIndex,
      isCorrect,
      biasType: question.type
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Test complete
      const testResult = calculateResult(newAnswers);
      setResult(testResult);
      setPhase('results');
    }
  };

  const handleRetake = () => {
    setPhase('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {phase === 'intro' && (
          <IntroScreen onStart={handleStart} />
        )}

        {phase === 'questions' && (
          <QuestionScreen
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {phase === 'results' && result && (
          <ResultScreen result={result} onRetake={handleRetake} />
        )}
      </div>
    </main>
  );
}
