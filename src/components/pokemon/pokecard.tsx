import Image from "next/image";
import type { Pokemon } from "@/lib/interfaces/pokemon";

// Helper function to get type styling
function getTypeStyle(type: string): string {
    const typeStyles: { [key: string]: string } = {
        grass: "bg-green-500",
        fire: "bg-orange-600",
        water: "bg-blue-500",
        electric: "bg-yellow-400",
        bug: "bg-lime-600",
        poison: "bg-fuchsia-800",
        flying: "bg-indigo-400",
        normal: "bg-gray-400",
        psychic: "bg-pink-500",
        ground: "bg-yellow-600",
        rock: "bg-yellow-800",
        ice: "bg-cyan-400",
        ghost: "bg-purple-600",
        dragon: "bg-indigo-600",
        dark: "bg-gray-800",
        steel: "bg-gray-500",
        fairy: "bg-pink-300"
    };
    
    return typeStyles[type] || "bg-gray-400"; // fallback to normal if type not found
}

// Helper function to get border color for Pokemon image
function getBorderColor(type: string): string {
    const borderColors: { [key: string]: string } = {
        grass: "#22c55e",      // green-500
        fire: "#ea580c",       // orange-600
        water: "#3b82f6",      // blue-500
        electric: "#eab308",   // yellow-400
        bug: "#84cc16",        // lime-600
        poison: "#a21caf",     // fuchsia-800
        flying: "#6366f1",     // indigo-400
        normal: "#9ca3af",     // gray-400
        psychic: "#ec4899",    // pink-500
        ground: "#ca8a04",     // yellow-600
        rock: "#a16207",       // yellow-800
        ice: "#22d3ee",        // cyan-400
        ghost: "#9333ea",      // purple-600
        dragon: "#4f46e5",     // indigo-600
        dark: "#1f2937",       // gray-800
        steel: "#6b7280",      // gray-500
        fairy: "#f9a8d4"       // pink-300
    };
    
    return borderColors[type] || "#9ca3af"; // fallback to normal
}

export default function PokeCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <div className="flex flex-col items-center bg-blue-50 border-indigo-500 border-4 rounded-lg pt-6 pb-2 mb-16">
            <Image 
                src={pokemon.image}
                alt={`Picture of ${pokemon.name}`}
                width={80}
                height={80}
                className="border-3 rounded-full m-1"
                style={{ borderColor: getBorderColor(pokemon.types[0]) }}
            />
            <p>#{pokemon.id}</p>
            <h3 className="text-2xl capitalize">{pokemon.name}</h3>

            {/* Pokemon types */}
            <div className="flex gap-2">
                {pokemon.types.map((type: string, idx: number) => (
                <span
                    key={idx}
                    className={`px-2 rounded-full text-white text-sm capitalize ${getTypeStyle(type)}`}
                >
                    {type}
                </span>
                ))}
            </div>

            {/* Pokemon stats */}
            <ul className="w-32 px-4 font-semibold">
                <li className="flex justify-between">
                    <span>HP</span>
                    <span>{pokemon.hp}</span>
                </li>
                <li className="flex justify-between">
                    <span>Attack</span>
                    <span>{pokemon.attack}</span>
                </li>
                <li className="flex justify-between">
                    <span>Defense</span>
                    <span>{pokemon.defense}</span>
                </li>
            </ul>
        </div>
    );
}