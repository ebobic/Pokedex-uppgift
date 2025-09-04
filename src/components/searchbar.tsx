import Form from 'next/form';
import Image from 'next/image';

export default function Searchbar() {
    return (
        <Form action="/search" className="flex items-center justify-between w-full max-w-lg shadow-lg rounded-lg p-3 bg-white">
            {/* On submission, the input value will be appended to
                the URL, e.g. /search?query=abc */}
            <label htmlFor="pokemon-search" className="sr-only">
                Search for a Pokémon
            </label>
            <input 
                id="pokemon-search"
                name="query" 
                placeholder="Search for a Pokémon..." 
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                required
            />
            <button type="submit" className="bg-[hsl(360,100%,41%)] hover:bg-red-700 rounded-md p-1 sm:p-2 transition-colors">
                <Image
                    src="/Search.svg"
                    alt="Search"
                    width={16}
                    height={16}
                    className="p-0.5 sm:p-1"
                />
            </button>
        </Form>
    )
}