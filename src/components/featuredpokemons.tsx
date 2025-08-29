import PokeCard from "./pokecard";
import { getRandomPokemonIds } from "@/lib/data/randompokemons";
import getPokemonById from "@/lib/data/pokemon";

export default async function FeaturedPokemons() {
    const randomIds = getRandomPokemonIds(4);
    const pokemons = await Promise.all(
        randomIds.map(id => getPokemonById(id))
    );

    return (
        <section className="flex flex-col items-center bg-indigo-100">
            <h2 className="text-3xl p-10">Featured Pokémon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pokemons.map((pokemon) => (
                    <PokeCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </section>
    );
}