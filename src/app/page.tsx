import Image from "next/image";
import Searchbar from "@/components/searchbar";
import PokeCard from "@/components/pokemon/pokecard";
import RandomButton from "@/components/randombutton";
import getPokemonById from "@/lib/data/pokemon";
import { getRandomPokemonIds } from "@/lib/data/randompokemons";

export default async function Home() {
  const randomIds = getRandomPokemonIds(4);
  const pokemons = await Promise.all(
    randomIds.map(id => getPokemonById(id))
  );

  return (
    <main>
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <RandomButton />
      </section>

      {/* Search for a pokemon! */}
      <section className="flex justify-center p-10">
        <Searchbar/>
      </section>

      {/* Featured pokemons */}
      <section className="flex flex-col items-center bg-indigo-50">
        <h2 className="text-3xl p-10">Featured Pokémon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {pokemons.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </section>
      
    </main>
  );
}