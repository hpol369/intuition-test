import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://decisionlab.vercel.app'),
  title: {
    default: 'DecisionLab - Think Clearly Under Uncertainty',
    template: '%s | DecisionLab'
  },
  description: 'Free tools to help you make better decisions. Test your intuition, plan scenarios, and learn to think clearly when outcomes are uncertain.',
  keywords: ['decision making', 'intuition test', 'scenario planning', 'cognitive biases', 'decision tools'],
  authors: [{ name: 'DecisionLab' }],
  creator: 'DecisionLab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://decisionlab.vercel.app',
    siteName: 'DecisionLab',
    title: 'DecisionLab - Think Clearly Under Uncertainty',
    description: 'Free tools to help you make better decisions when certainty is not possible.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DecisionLab'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DecisionLab - Think Clearly Under Uncertainty',
    description: 'Free tools for better decision-making.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
