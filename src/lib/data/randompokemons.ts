// Random pokemon with id 1-1025!)
export function getRandomPokemonIds(count: number): number[] {
    const ids: number[] = [];
    const usedIds = new Set<number>();
    
    while (ids.length < count) {
        const randomId = Math.floor(Math.random() * 1025) + 1;
        if (!usedIds.has(randomId)) {
            ids.push(randomId);
            usedIds.add(randomId);
        }
    }
    
    return ids;
}
