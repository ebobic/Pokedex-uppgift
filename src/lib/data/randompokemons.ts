export function getRandomPokemonIds(count: number): number[] {
    const pokemonIds: number[] = [];
    while (pokemonIds.length < count) {
        const randomId = Math.floor(Math.random() * 1025) + 1; // visa pokemons med ID 1-1025!
        if (!pokemonIds.includes(randomId)) {
            pokemonIds.push(randomId);
        }
    }
    return pokemonIds;
}

export function getRandomPokemonId(): number {
    return Math.floor(Math.random() * 1025) + 1;
}
