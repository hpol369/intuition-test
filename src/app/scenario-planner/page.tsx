import type { Metadata } from 'next';
import ScenarioPlanner from '@/components/planner/ScenarioPlanner';

export const metadata: Metadata = {
  title: 'Scenario Planner - Think Through Your Decision',
  description: "Explore best, likely, and worst case scenarios for any important decision. Free tool to find clarity when intuition alone isn't enough.",
  alternates: {
    canonical: '/scenario-planner'
  },
  openGraph: {
    title: 'Scenario Planner - Think Through Your Decision',
    description: 'Explore best, likely, and worst case scenarios for any important decision.',
    type: 'website'
  }
};

export default function ScenarioPlannerPage() {
  return <ScenarioPlanner />;
}
