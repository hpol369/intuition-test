'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">D</span>
          </div>
          <span className="font-semibold text-zinc-900">DecisionLab</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/intuition-test"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Intuition Test
          </Link>
          <Link
            href="/scenario-planner"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Scenario Planner
          </Link>
          <Link
            href="/learn"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Learn
          </Link>
          <Link
            href="/about"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2 text-zinc-600"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/intuition-test"
              className="block text-sm text-zinc-600 hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Intuition Test
            </Link>
            <Link
              href="/scenario-planner"
              className="block text-sm text-zinc-600 hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Scenario Planner
            </Link>
            <Link
              href="/learn"
              className="block text-sm text-zinc-600 hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/about"
              className="block text-sm text-zinc-600 hover:text-zinc-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
