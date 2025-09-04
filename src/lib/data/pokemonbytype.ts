// ISR: Uppdatera data varje timme
export const revalidate = 3600;

// Hämtar lista över Pokémon av en specifik typ!
export async function getPokemonByType(type: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`, {
      next: { revalidate: 3600 } // Uppdatera varje timme
    });
    const data = await response.json();
    
    const pokemonList = data.pokemon.slice(0, 50); // Begränsa till 50 Pokémon
    
    return pokemonList.map((pokemon: { pokemon: { name: string; url: string } }) => ({
      name: pokemon.pokemon.name,
      url: pokemon.pokemon.url
    }));
  } catch (error) {
    console.error(`Error fetching Pokémon for type ${type}:`, error);
    return [];
  }
}

// Hämtar detaljerad information om en Pokémon!
export async function getPokemonDetails(name: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: { revalidate: 3600 } // Uppdatera varje timme
    });
    const data = await response.json();
    
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((type: { type: { name: string } }) => type.type.name),
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat
    };
  } catch (error) {
    console.error(`Error fetching Pokémon details for ${name}:`, error);
    return null;
  }
}

// Hämtar Pokémon för alla valda typer och tar bort duplicerade
export async function getPokemonByTypes(types: string[]) {
  if (types.length === 0) return [];
  
  try {
    const allPokemon = new Map(); // Undviker duplicerade Pokémon
    
    for (const type of types) {
      const pokemonList = await getPokemonByType(type);
      
      for (const pokemon of pokemonList) {
        if (!allPokemon.has(pokemon.name)) {
          const details = await getPokemonDetails(pokemon.name);
          if (details) {
            allPokemon.set(pokemon.name, details);
          }
        }
      }
    }
    
    return Array.from(allPokemon.values());
  } catch (error) {
    console.error('Error fetching Pokémon by types:', error);
    return [];
  }
}

