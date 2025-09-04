import { Suspense } from "react";
import Searchbar from "@/components/searchbar";
import PokeCard from "@/components/pokemon/pokecard";
import RandomButton from "@/components/randombutton";
import getPokemonById from "@/lib/data/pokemon";
import { getRandomPokemonIds } from "@/lib/data/randompokemons";

// ISR: Uppdatera sidan varje timme
export const revalidate = 3600;

export default async function Home() {
  const randomIds = getRandomPokemonIds(4);
  const pokemons = await Promise.all(
    randomIds.map(id => getPokemonById(id))
  );

  return (
    <main>
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br from-gray-800 to-gray-900 p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-white">Gotta catch &apos;em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <Suspense fallback={
          <div className="animate-pulse">
            <div className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg">
              Loading...
            </div>
          </div>
        }>
          <RandomButton />
        </Suspense>
      </section>

      {/* Search for a pokemon! */}
      <section className="flex justify-center p-10">
        <Searchbar/>
      </section>

      {/* Featured pokemons */}
      <section className="flex flex-col items-center bg-gray-50">
        <h2 className="text-3xl p-10">Featured Pokémon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {pokemons.map((pokemon) => (
            <div key={pokemon.id} className="w-64 h-80">
              <PokeCard pokemon={pokemon} />
            </div>
          ))}
        </div>
      </section>
      
    </main>
  );
}