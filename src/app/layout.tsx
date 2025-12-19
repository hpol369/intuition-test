import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://intuition-test.vercel.app'),
  title: {
    default: 'Intuition Test - How Accurate Is Your Gut Feeling?',
    template: '%s | Intuition Test'
  },
  description: 'Take this free intuition test and discover how accurate your gut feeling really is. See where intuition works - and where it systematically fails.',
  keywords: ['intuition test', 'test your intuition', 'gut feeling accuracy', 'cognitive bias test', 'decision making test'],
  authors: [{ name: 'Intuition Test' }],
  creator: 'Intuition Test',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://intuition-test.vercel.app',
    siteName: 'Intuition Test',
    title: 'Intuition Test - How Accurate Is Your Gut Feeling?',
    description: 'Take this free intuition test and discover how accurate your gut feeling really is. 7 questions, instant results.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Intuition Test'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intuition Test - How Accurate Is Your Gut Feeling?',
    description: 'Take this free intuition test and discover how accurate your gut feeling really is.',
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
