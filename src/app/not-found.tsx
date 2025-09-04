import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* 404 heading */}
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-6">Page Not Found</h2>
        
        {/* Error message */}
        <p className="text-lg text-gray-300 mb-8">
          The page you're looking for doesn't exist.
        </p>
        
        {/* Home button */}
        <Link 
          href="/" 
          className="bg-[hsl(360,100%,41%)] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
