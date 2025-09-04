'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Something went wrong!</h1>
        <p className="text-lg text-gray-500 mb-8">
          An error occurred while loading the page.
        </p>
        
        {/* Dev error details */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-red-700 text-sm font-mono break-all">
              {error.message}
            </p>
          </div>
        )}
        
        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[hsl(360,100%,41%)] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Try Again
          </button>
          <Link 
            href="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
