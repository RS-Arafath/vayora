import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@gravity-ui/icons";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/my-booking", label: "My Bookings" },
  { href: "/profile", label: "My Profile" },
];

const supportLinks = [
  { href: "/help", label: "Help Center" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

const socials = [
  { href: "#", label: "Facebook", Icon: FaFacebookF },
  { href: "#", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://github.com/RS-Arafath", label: "GitHub", Icon: FaGithub },
];

const linkClass = "transition-colors hover:text-white";
const headingClass = "mb-4 text-sm font-semibold text-white";

const Footer = () => {
  return (
    <footer className="border-t font-body border-white/10 bg-black text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="mb-12">
          <Image
            src="/assets/vayora-1.png"
            alt="Vayora logo"
            height={100}
            width={300}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-md font-heading text-sm sm:text-xl leading-relaxed text-gray-300">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div>
            <h3 className={headingClass}>Newsletter</h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1 pl-4 focus-within:border-white/40">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="rounded-full bg-white px-3 py-2 text-sm font-medium text-black cursor-pointer transition-opacity hover:opacity-80"
              >
                <ArrowUpRight />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className={headingClass}>Quick links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className={headingClass}>Support</h3>
            <ul className="space-y-3 text-sm  ">
              {supportLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={headingClass}>Contact us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+8801893176269" className={linkClass}>
                  +880 1893 1762 69
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact.arafath.bd@gmail.com"
                  className={linkClass}
                >
                  contact.arafath.bd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Vayora. All rights reserved.
          </p>

          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white hover:text-black"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
