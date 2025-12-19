import Link from 'next/link';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  cta: string;
  duration: string;
  icon: 'brain' | 'map';
}

export function ToolCard({ title, description, href, cta, duration, icon }: ToolCardProps) {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Icon */}
      <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-5">
        {icon === 'brain' ? (
          <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        )}
      </div>

      {/* Content */}
      <h2 className="text-xl font-semibold text-zinc-900 mb-2">{title}</h2>
      <p className="text-sm text-zinc-500 mb-5 leading-relaxed">{description}</p>

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center justify-center w-full h-11 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 active:scale-[0.98] transition-all"
      >
        {cta}
      </Link>

      {/* Meta */}
      <p className="text-xs text-zinc-400 text-center mt-3">
        {duration} · Free
      </p>
    </div>
  );
}
