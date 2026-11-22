
"use client";

export default function PageLoader() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6">

      {/* Animated Airplane */}
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[#001339]/10" />

        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#D9B56D]" />

        <svg
          className="h-7 w-7 text-[#001339] animate-[fly_2s_ease-in-out_infinite]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16Z" />
        </svg>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <p className="text-sm font-semibold tracking-[0.25em] text-[#001339]">
          VAYORA
        </p>

        <p className="text-xs tracking-wide text-[#001339]/50 animate-pulse">
          Preparing your journey...
        </p>
      </div>

      <style jsx>{`
        @keyframes fly {
          0%, 100% {
            transform: translate(0, 0) rotate(-8deg);
          }
          50% {
            transform: translate(4px, -4px) rotate(8deg);
          }
        }
      `}</style>

    </div>
  );
}
