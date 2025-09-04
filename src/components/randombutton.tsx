"use client"  // tells Next.js that this is a "client component" and means this code runs in the browser (and can use hooks like useState).

import Image from "next/image";
import getPokemonById from "@/lib/data/pokemon";
import PokeCard from "./pokemon/pokecard";
import { useState } from "react";
import type { Pokemon } from "@/lib/interfaces/pokemon";


export default function RandomButton() {
    // State variable to store the current random Pokémon.
    // - "randomPokemon" holds the current Pokémon (or null if none yet).
    // - "setRandomPokemon" is the function to update it.
    const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);

    // Function that fetches one random Pokémon and saves it to state
    async function showRandomPokemon() {
        const randomId = Math.floor(Math.random() * 1025) + 1;  // Generate random ID from 1-1025!
        const pokemon = await getPokemonById(randomId);  // Fetch Pokemon data from API
        setRandomPokemon(pokemon);  // Store the Pokemon in state
    }

    return (
        <>
            {/* Button that fetches a random Pokémon when clicked */}
            <button onClick={showRandomPokemon} className="btn-primary">
            <Image
                src="/Dice.svg"
                width={25}
                height={25}
                alt="Roll the dice!"
            />
            Random Pokémon</button>

            {/* If "randomPokemon" exists (not null), show the Pokémon card */}
            {randomPokemon && (
                <section className="flex justify-center">
                <PokeCard pokemon={randomPokemon} />
                </section>
            )}
        </>
    );
}