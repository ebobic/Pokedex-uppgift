import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex justify-between items-center p-3">
                <div className="flex gap-3 items-center">
                    <Image
                    src="/Logo.png"
                    alt=""    
                    width={40}
                    height={40}
                    />
                    <li className="font-jersey text-2xl text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Pokédex</li>
                </div>
                <div className="flex gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/search">Pokedex</Link></li>
                    <li><Link href="/types">Types</Link></li>
                    <li><Link href="/favourites">Favourites</Link></li>
                </div>
            </ul>
        </nav>
    );
}


