'use client';

import { useState } from 'react';
import { Question } from '@/lib/types';
import { ProgressBar } from './ProgressBar';
import { OptionButton } from './OptionButton';
import { FeedbackCard } from './FeedbackCard';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (selectedIndex: number, isCorrect: boolean) => void;
}

export function QuestionScreen({
  question,
  questionNumber,
  totalQuestions,
  onAnswer
}: QuestionScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;

    setSelectedIndex(index);
    setShowFeedback(true);
  };

  const handleContinue = () => {
    if (selectedIndex === null) return;

    const isCorrect = selectedIndex === question.correctIndex;

    onAnswer(selectedIndex, isCorrect);
    setSelectedIndex(null);
    setShowFeedback(false);
  };

  const isCorrect = selectedIndex !== null && selectedIndex === question.correctIndex;

  return (
    <div className="max-w-md mx-auto">
      <ProgressBar current={questionNumber} total={totalQuestions} />

      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            text={option}
            onClick={() => handleSelect(index)}
            selected={selectedIndex === index}
            disabled={selectedIndex !== null && selectedIndex !== index}
            showResult={showFeedback}
            isCorrect={index === question.correctIndex}
          />
        ))}
      </div>

      {showFeedback && (
        <FeedbackCard
          question={question}
          isCorrect={isCorrect}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
