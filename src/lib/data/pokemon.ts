import { PokeType } from "../types/poketypes";

// ISR: Uppdatera data varje timme
export const revalidate = 3600;

async function getPokemonById(id: number) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            next: { revalidate: 3600 } // Uppdatera varje timme
        });
        const data = await response.json();
        
        return {
            id: data.id,
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            types: data.types.map((t: PokeType) => t.type.name),
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
        };
}

export async function pokeProps(id: number) {
    const pokemon = await getPokemonById(id);
    return {props: {pokemon} };
}

export default getPokemonById;