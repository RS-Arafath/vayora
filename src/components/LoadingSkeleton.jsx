
export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-white animate-pulse">

      {/* Navbar Skeleton */}
      <header className="h-20 border-b border-gray-100 flex items-center justify-between px-6 md:px-16">
        <div className="h-8 w-32 rounded bg-gray-200" />
        <div className="hidden md:flex gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-3 w-16 rounded bg-gray-200" />
          ))}
        </div>
        <div className="h-10 w-28 rounded-lg bg-gray-200" />
      </header>

      {/* Hero Skeleton */}
      <section className="px-5 md:px-16 pt-8">
        <div className="h-[400px] md:h-[550px] rounded-2xl bg-gray-200 relative overflow-hidden">
          <div className="absolute bottom-12 left-8 md:left-16 space-y-5">
            <div className="h-4 w-36 bg-gray-300 rounded" />
            <div className="h-10 md:h-14 w-64 md:w-[450px] bg-gray-300 rounded" />
            <div className="h-4 w-52 md:w-80 bg-gray-300 rounded" />
            <div className="h-11 w-36 bg-gray-300 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Search Box */}
      <section className="px-5 md:px-16 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl border border-gray-100">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="space-y-3">
              <div className="h-3 w-20 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-100 rounded-lg" />
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="px-5 md:px-16 py-14">
        <div className="h-7 w-64 bg-gray-200 rounded mb-3" />
        <div className="h-4 w-80 max-w-full bg-gray-100 rounded mb-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              <div className="h-48 md:h-64 rounded-xl bg-gray-200" />
              <div className="h-4 w-28 bg-gray-200 rounded mt-4" />
              <div className="h-3 w-20 bg-gray-100 rounded mt-2" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
