import { Question } from '@/lib/types';

export const questions: Question[] = [
  {
    id: 1,
    type: 'availability',
    question: 'Which animal kills more people worldwide each year?',
    options: ['Sharks', 'Hippos'],
    correctIndex: 1,
    explanation: {
      correct: "Correct! Hippos kill approximately 500 people per year, while sharks kill only about 5-10. Your intuition resisted the media bias around shark attacks.",
      incorrect: "Surprising, right? Hippos kill approximately 500 people per year, while sharks kill only about 5-10. Sharks get more media coverage, which distorts our perception of risk."
    },
    insight: "Media coverage doesn't reflect actual danger. The more dramatic something is, the more we overestimate its frequency.",
    source: "World Health Organization; Florida Museum of Natural History",
    percentWrong: 72
  },
  {
    id: 2,
    type: 'probability-intuition',
    question: "In a room of 23 random people, what's the probability that at least two share a birthday?",
    options: ['About 10%', 'About 50%', 'About 90%'],
    correctIndex: 1,
    explanation: {
      correct: "Exactly right! It's 50.7% to be precise. Most people drastically underestimate this because they think about the chance of someone sharing THEIR birthday, not any pair matching.",
      incorrect: "It's actually about 50%! This is called the Birthday Paradox. We underestimate because we think about someone matching OUR birthday, not any two people matching each other."
    },
    insight: "Our brains struggle with combinatorial probability. There are 253 possible pairs in a group of 23 - far more than our intuition expects.",
    source: "Mathematical probability theory; first published by Richard von Mises, 1939",
    percentWrong: 83
  },
  {
    id: 3,
    type: 'gamblers-fallacy',
    question: "A fair coin has landed on heads 5 times in a row. What's the probability of heads on the next flip?",
    options: ['Less than 50% (tails is "due")', 'Exactly 50%', 'More than 50% (heads is "hot")'],
    correctIndex: 1,
    explanation: {
      correct: "Perfect! The coin has no memory. Each flip is independent. Past results don't influence future outcomes.",
      incorrect: "It's exactly 50%. The coin has no memory - this is the Gambler's Fallacy. Whether heads came up 5 or 500 times, the next flip is always 50/50."
    },
    insight: "Random events have no memory. Casinos profit billions from people believing otherwise.",
    source: "Basic probability theory; Tversky & Kahneman, 1971",
    percentWrong: 58
  },
  {
    id: 4,
    type: 'availability',
    question: "In the United States, what causes more deaths per year?",
    options: ['Commercial airplane crashes', 'Falling out of bed'],
    correctIndex: 1,
    explanation: {
      correct: "Right! About 450-600 people die annually from falling out of bed, while commercial aviation deaths average near zero in most years. Your intuition correctly filtered out the dramatic news coverage.",
      incorrect: "Falling out of bed kills about 450-600 Americans per year, while commercial aviation deaths average near zero. Plane crashes make headlines; bedroom accidents don't."
    },
    insight: "We overestimate risks that are vivid and newsworthy, while ignoring mundane dangers we face daily.",
    source: "CDC Mortality Data; National Transportation Safety Board",
    percentWrong: 68
  },
  {
    id: 5,
    type: 'base-rate-neglect',
    question: "Which is more common in the general population?",
    options: ['Left-handed people', 'People with naturally red hair'],
    correctIndex: 0,
    explanation: {
      correct: "Correct! About 10% of people are left-handed, while only 1-2% have natural red hair. Good calibration on base rates.",
      incorrect: "Left-handed people are more common: about 10% vs only 1-2% for natural redheads. Both feel rare because they stand out, but the base rates differ significantly."
    },
    insight: "Things that 'stand out' feel equally rare, but actual frequencies can differ by 5-10x.",
    source: "Papadatou-Pastou et al., 2020 (handedness); Various genetic studies (red hair)",
    percentWrong: 45
  },
  {
    id: 6,
    type: 'pattern-recognition',
    question: "When flipping a fair coin 6 times, which sequence is more likely?",
    options: ['H T H T T H', 'H H H H H H', 'Both are equally likely'],
    correctIndex: 2,
    explanation: {
      correct: "Both sequences are equally likely! Each specific sequence of 6 flips has the same probability: 1 in 64 (1.56%).",
      incorrect: "Both sequences are equally likely! Each specific sequence of 6 flips has the same probability: 1 in 64. HTHTHT just 'looks' more random to us."
    },
    insight: "We see patterns where none exist and expect randomness to 'look random.' True randomness often appears more clustered than we expect.",
    source: "Kahneman & Tversky, 'Belief in the Law of Small Numbers', 1971",
    percentWrong: 91
  },
  {
    id: 7,
    type: 'base-rate-neglect',
    question: "A disease affects 1 in 1,000 people. A test is 99% accurate. If you test positive, what's the approximate chance you actually have the disease?",
    options: ['About 99%', 'About 50%', 'About 9%'],
    correctIndex: 2,
    explanation: {
      correct: "Impressive! Most people get this wrong. With a 1/1000 base rate and 1% false positive rate, about 10 out of every 11 positive results are false positives.",
      incorrect: "It's only about 9%! This is base rate neglect. In 1,000 people, 1 truly has the disease (and tests positive), but ~10 healthy people also test positive (1% false positive rate). So only 1 in 11 positives is real."
    },
    insight: "This is why doctors order follow-up tests. The rarer a condition, the more false positives dominate - even with accurate tests.",
    source: "Bayes' Theorem; Gigerenzer & Hoffrage, 1995",
    percentWrong: 86
  }
];
