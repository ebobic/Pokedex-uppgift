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

export default function PokeCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <div className="flex flex-col items-center bg-blue-50 border-indigo-500 border-4 rounded-lg w-50 pt-6 pb-2 mb-16">
            <Image 
                src={pokemon.image}
                alt={`Picture of ${pokemon.name}`}
                width={80}
                height={80}
                className="border-3 border-black rounded-full m-1"
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
            <ul className="w-50 px-4 font-semibold">
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