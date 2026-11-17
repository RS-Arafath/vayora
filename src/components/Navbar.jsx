"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PersonFill, ArrowRightToSquare, Bars, Xmark } from "@gravity-ui/icons";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/my-booking", label: "My Booking" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      pathname === href
        ? "bg-black text-white dark:bg-white dark:text-black"
        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
      <nav className="mx-auto font-ui flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/vayora.png"
            alt="Vayora logo"
            height={50}
            width={120}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Center links (desktop) */}
        <ul className="hidden items-center gap-1 md:flex">
          {mainLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClass(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions (desktop) */}
        <ul className="hidden items-center gap-2 md:flex">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
            >
              <PersonFill />
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Sign up
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
            >
              <ArrowRightToSquare />
              Log in
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-full p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10 md:hidden"
        >
          {open ? (
            <Xmark width={22} height={22} />
          ) : (
            <Bars width={22} height={22} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200/70 bg-white px-4 pb-4 pt-2 dark:border-white/10 dark:bg-black md:hidden">
          <ul className="flex flex-col gap-1">
            {[
              ...mainLinks,
              { href: "/profile", label: "Profile" },
              { href: "/signup", label: "Sign up" },
              { href: "/login", label: "Log in" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(href)}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
