import type { Pokemon } from "@/lib/interfaces/pokemon";

// Generate random Pokemon data
function generateRandomPokemon(): Pokemon {
    const pokemonNames = ["Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Jigglypuff", "Meowth", "Psyduck", "Growlithe"];
    const pokemonTypes = ["fire", "water", "grass", "electric", "normal", "flying", "poison", "bug"];
    
    const randomName = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
    const randomType = pokemonTypes[Math.floor(Math.random() * pokemonTypes.length)];
    const randomId = Math.floor(Math.random() * 1025) + 1;
    
    return {
        id: randomId,
        name: randomName,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomId}.png`,
        types: [randomType],
        height: Math.floor(Math.random() * 100) + 50,
        weight: Math.floor(Math.random() * 100) + 50,
        stats: [
            { name: "hp", value: Math.floor(Math.random() * 100) + 50 },
            { name: "attack", value: Math.floor(Math.random() * 100) + 50 },
            { name: "defense", value: Math.floor(Math.random() * 100) + 50 }
        ]
    };
}

export default function getRandomPokemons(count: number): Pokemon[] {
    const pokemons: Pokemon[] = [];
    for (let i = 0; i < count; i++) {
        pokemons.push(generateRandomPokemon());
    }
    return pokemons;
}