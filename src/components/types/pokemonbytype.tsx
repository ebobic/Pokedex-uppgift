"use client";

import { useEffect, useState } from 'react';
import { getPokemonByTypes } from '@/lib/data/pokemonbytype';
import PokeCard from '../pokemon/pokecard';
import type { Pokemon } from '@/lib/interfaces/pokemon';

interface PokemonByTypeProps {
  selectedTypes: string[];
}

export default function PokemonByType({ selectedTypes }: PokemonByTypeProps) {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (selectedTypes.length === 0) {
        setPokemon([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        const pokemonData = await getPokemonByTypes(selectedTypes);
        setPokemon(pokemonData);
      } catch (err) {
        setError('Failed to fetch Pokémon data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [selectedTypes]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pokémon by Type</h2>
        <div className="text-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading Pokémon...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pokémon by Type</h2>
        <div className="text-center py-16">
          <p className="text-red-500 text-lg mb-2">Error loading Pokémon</p>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pokémon by Type</h2>
      <div className="min-h-96">
        <div>
          <p className="text-gray-600 mb-6">
            Showing {pokemon.length} Pokémon of type(s): <span className="font-semibold">{selectedTypes.join(', ')}</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {pokemon.map((pokemonItem) => (
              <PokeCard key={pokemonItem.id} pokemon={pokemonItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}