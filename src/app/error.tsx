'use client';
 
import Link from 'next/link';
 
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-lg text-gray-800 mb-6">
          Something went wrong. Please try again later.
        </p>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
        <Link href="/">
          <button className="ml-4 bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
