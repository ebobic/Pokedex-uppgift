"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import TypesSidebar from "@/components/types/typessidebar";
import PokemonByType from "@/components/types/pokemonbytype";

interface TypesPageProps {
    searchParams: { type?: string };
}

export default function TypesPage({ searchParams}: TypesPageProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {/* Header section! */}
          <section className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8">
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
         <div className="max-w-[95rem] mx-auto p-8">
        <div className="flex gap-12">
          {/* Sidebar */}
                    {/* Sidebar */}
                    <div className="w-72 flex-shrink-0">
            <TypesSidebar 
              selectedTypes={selectedTypes} 
              setSelectedTypes={setSelectedTypes} 
            />
          </div>
          
                    {/* Main content */}
          <div className="flex-1">
            <Suspense fallback={
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pokémon by Type</h2>
                <div className="text-center py-16">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                  <p className="text-gray-500">Loading...</p>
                </div>
              </div>
            }>
              <PokemonByType selectedTypes={selectedTypes} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
