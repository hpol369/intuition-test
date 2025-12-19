import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  slug: string;
  relatedLinks?: { title: string; href: string }[];
}

export function ArticleLayout({
  children,
  title,
  description,
  ctaText,
  ctaHref,
  slug,
  relatedLinks = []
}: ArticleLayoutProps) {
  return (
    <main className="bg-[#fafafa] py-12 px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "author": {
            "@type": "Organization",
            "name": "DecisionLab"
          },
          "publisher": {
            "@type": "Organization",
            "name": "DecisionLab",
            "url": "https://decisionlab.app"
          },
          "datePublished": "2024-12-19",
          "dateModified": "2024-12-19",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://decisionlab.app/learn/${slug}`
          }
        }}
      />
      <article className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <Link
            href="/learn"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Learn
          </Link>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-zinc-500">
            {description}
          </p>
        </header>

        {/* Primary CTA */}
        <div className="bg-zinc-900 rounded-xl p-6 mb-10">
          <p className="text-sm text-zinc-300 mb-3">Try it yourself</p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
          >
            {ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Content */}
        <div className="prose prose-zinc prose-sm max-w-none">
          {children}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <h3 className="text-lg font-semibold text-zinc-900 mb-4">
            Ready to put this into practice?
          </h3>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors"
          >
            {ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Related Links */}
        {relatedLinks.length > 0 && (
          <div className="mt-10 pt-8 border-t border-zinc-200">
            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Related articles</h3>
            <ul className="space-y-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    → {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </main>
  );
}
