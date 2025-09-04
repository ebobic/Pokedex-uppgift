import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex justify-between items-center p-3">
                <div className="flex gap-3 items-center">
                    <Image
                    src="/pokeball-simple.svg"
                    alt="Pokeball Logo"    
                    width={40}
                    height={40}
                    />
                    <li className="font-jersey text-2xl text-white">Pokédex</li>
                </div>
                <div className="flex gap-6 text-white">
                    <li><Link href="/" className="text-white hover:text-gray-200 transition-colors font-semibold">Home</Link></li>
                    <li><Link href="/search" className="text-white hover:text-gray-200 transition-colors font-semibold">Pokedex</Link></li>
                    <li><Link href="/types" className="text-white hover:text-gray-200 transition-colors font-semibold">Types</Link></li>
                    <li><Link href="/favourites" className="text-white hover:text-gray-200 transition-colors font-semibold">Favourites</Link></li>
                </div>
            </ul>
        </nav>
    );
}


