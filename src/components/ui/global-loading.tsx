export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-[hsl(360,100%,41%)] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        
        {/* Text */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Pokédex</h1>
        <p className="text-lg text-gray-500">
          Loading...
        </p>
      </div>
    </div>
  );
}
