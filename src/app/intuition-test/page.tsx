import type { Metadata } from 'next';
import IntuitionTest from '@/components/IntuitionTest';

export const metadata: Metadata = {
  title: 'Intuition Test - How Accurate Is Your Gut Feeling?',
  description: 'Take this free intuition test and discover how accurate your gut feeling really is. See where intuition works - and where it fails.',
  alternates: {
    canonical: '/intuition-test'
  }
};

export default function IntuitionTestPage() {
  return <IntuitionTest />;
}
