interface PokemonByTypeProps {
  selectedTypes: string[];
}

export default function PokemonByType({ selectedTypes }: PokemonByTypeProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pokémon by Type</h2>
      <div className="min-h-96">
        {selectedTypes.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-2">No types selected</p>
            <p className="text-gray-400">Check the boxes in the sidebar to filter Pokémon</p>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-6">Showing Pokémon of type(s): <span className="font-semibold">{selectedTypes.join(', ')}</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Pokémonkort kommer att visas här! */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}