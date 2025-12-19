import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Intuition Test
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover how accurate your gut feeling really is
        </p>
        <Link
          href="/intuition-test"
          className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg"
        >
          Take the Free Test
        </Link>
      </div>
    </main>
  );
}
