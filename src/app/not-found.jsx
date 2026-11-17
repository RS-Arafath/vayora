import Link from "next/link";
import { ArrowLeft } from "@gravity-ui/icons";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <p
          aria-hidden="true"
          className="select-none text-8xl font-bold leading-none tracking-tight text-gray-200 dark:text-white/10 sm:text-9xl md:text-[10rem]"
        >
          404
        </p>

        <h1 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
          This destination doesn&apos;t exist
        </h1>

        <p className="mt-3 max-w-md text-sm text-gray-600 dark:text-gray-400 sm:text-base">
          The page you&apos;re looking for may have moved, or the link is
          incorrect. Head back home and plan your next trip from there.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black sm:w-auto"
          >
            <ArrowLeft />
            Back to home
          </Link>
          <Link
            href="/destinations"
            className="flex w-full items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10 sm:w-auto"
          >
            Browse destinations
          </Link>
        </div>
      </div>
    </section>
  );
}