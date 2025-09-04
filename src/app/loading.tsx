export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[hsl(360,100%,41%)] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        
        {/* Text */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Loading...</h1>
        <p className="text-gray-500">
          Please wait while we fetch the data.
        </p>
      </div>
    </div>
  );
}
