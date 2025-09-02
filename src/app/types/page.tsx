import { Suspense } from "react";
import Link from "next/link";
import TypesSidebar from "@/components/typessidebar";
import PokemonByType from "@/components/pokemonbytype";

interface TypesPageProps {
    searchParams: { type?: string };
}

export default function TypesPage({ searchParams}: TypesPageProps) {
    const selectedType = searchParams.type || '';

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {/* Header section! */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Pokémon Types</h1>
              <p className="text-lg mb-6">Filter Pokémon by their types</p>
              <div className="mb-6">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-indigo-200 hover:text-white transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </section>

         {/* Sidebar med content! */}
         <div className="max-w-7xl mx-auto p-8">
        <div className="flex gap-12">
          {/* Sidebar */}
          <div className="w-72 flex-shrink-0">
            <TypesSidebar />
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <PokemonByType selectedTypes={[]} />
          </div>
        </div>
      </div>
    </main>
  );
}