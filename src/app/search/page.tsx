import { Suspense } from 'react';
import Link from 'next/link';
import SearchResults from '@/components/searchresults';
import Searchbar from '@/components/searchbar';

interface SearchPageProps {
  searchParams: { query?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.query || '';

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Search Pokémon</h1>
          <p className="text-lg mb-6">Find your favorite Pokémon by name</p>
          <Searchbar />
        </div>
      </section>

      {/* Search Results */}
      <section className="max-w-4xl mx-auto p-8">
        <div className="mb-6">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800">
            ← Back to Home
          </Link>
        </div>
        
        {query ? (
          <Suspense fallback={<div className="text-center py-8">Searching...</div>}>
            <SearchResults query={query} />
          </Suspense>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Enter a Pokémon name to search
            </h2>
            <p className="text-gray-500">
              Try searching for names like "pikachu", "charizard", or "bulbasaur"
            </p>
          </div>
        )}
      </section>
    </main>
  );
}