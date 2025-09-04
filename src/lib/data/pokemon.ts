// ISR: Uppdatera data varje timme
export const revalidate = 3600;

export default async function getPokemonById(id: number) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { 
      next: { revalidate: 3600 } 
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon ${id}`);
    }

    const data = await response.json();
    
    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map((t: { type: { name: string } }) => t.type.name),
      stats: data.stats.map((s: { stat: { name: string }, base_stat: number }) => ({
        name: s.stat.name,
        value: s.base_stat
      })),
      image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default
    };
  } catch (error) {
    console.error(`Error fetching pokemon ${id}:`, error);
    throw error;
  }
}
