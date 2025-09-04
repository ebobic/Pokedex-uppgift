import PokeCard from './pokemon/pokecard';
import type { Pokemon } from '@/lib/interfaces/pokemon';

interface SearchResultsProps {
    query: string;
}
async function searchPokemon(query: string): Promise<Pokemon | null> {
  try {
    const searchQuery = query.toLowerCase().trim();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery}`);
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      types: data.types.map((t: any) => t.type.name),
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
    };
  } catch (error) {
    console.error('Error searching for Pokemon:', error);
    return null;
  }
}

  export default async function SearchResults({ query }: SearchResultsProps) {
  const pokemon = await searchPokemon(query);

  if (!pokemon) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          No Pokémon found
        </h2>
        <p className="text-gray-500 mb-4">
          We couldn't find a Pokémon named "{query}"
        </p>
        <p className="text-sm text-gray-400">
          Try checking the spelling or search for a different Pokémon
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Search Results for "{query}"
      </h2>
      <div className="flex justify-center">
        <PokeCard pokemon={pokemon} />
      </div>
    </div>
  );
}