
import { Separator } from "@heroui/react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiCalendar,
  FiDollarSign,
  FiUsers,
} from "react-icons/fi";

const Banner = () => {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[url('/assets/banner.png')] bg-cover bg-center text-white">

      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#001339]/40 via-black/30 to-[#001339]/80" /> */}

      <div className="relative z-10 flex min-h-[650px] flex-col justify-between">

        {/* Hero Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">

          <span className="mb-6 font-body rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] backdrop-blur-md">
            Discover the Extraordinary
          </span>

          <h1 className="max-w-5xl font-heading text-5xl font-semibold leading-[1.12] tracking-tight md:text-7xl lg:text-8xl">
            Discover Your
            <br />
            Next{" "}
            <span className="font-serif italic text-cyan-300">
              Adventure
            </span>
          </h1>

          <p className="mt-7 font-body max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Explore breathtaking destinations and create unforgettable
            memories with our curated luxury travel experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 font-ui flex flex-wrap justify-center gap-4">

            <button className="group cursor-pointer flex items-center gap-3 bg-cyan-500 px-7 py-4 text-sm font-semibold uppercase tracking-wider transition duration-300 hover:bg-cyan-400">
              Explore Now
              <FiArrowUpRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <button className="border cursor-pointer border-white/60 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#001339]">
              View Destinations
            </button>

          </div>
        </div>

        {/* Luxury Search Bar */}
        <div className="w-full font-ui px-5 pb-8 md:px-10 lg:px-16">

          <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 rounded-2xl border border-white/20 bg-white/15 p-5 shadow-2xl backdrop-blur-xl md:flex-row md:gap-0 md:p-6">

            {/* Location */}
            <div className="flex w-full flex-1 items-center gap-4 md:px-5">
              <FiMapPin
                size={23}
                className="shrink-0 text-cyan-300"
              />
              <div>
                <h3 className="text-sm font-semibold">Location</h3>
                <p className="mt-1 text-xs text-white/65">
                  Where do you want to go?
                </p>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="hidden h-10 bg-white/30 md:block"
            />

            {/* Date */}
            <div className="flex w-full flex-1 items-center gap-4 md:px-5">
              <FiCalendar
                size={23}
                className="shrink-0 text-cyan-300"
              />
              <div>
                <h3 className="text-sm font-semibold">Date & Duration</h3>
                <p className="mt-1 text-xs text-white/65">
                  Choose your travel dates
                </p>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="hidden h-10 bg-white/30 md:block"
            />

            {/* Budget */}
            <div className="flex w-full flex-1 items-center gap-4 md:px-5">
              <FiDollarSign
                size={23}
                className="shrink-0 text-cyan-300"
              />
              <div>
                <h3 className="text-sm font-semibold">Your Budget</h3>
                <p className="mt-1 text-xs text-white/65">
                  Select your price range
                </p>
              </div>
            </div>

            <Separator
              orientation="vertical"
              className="hidden h-10 bg-white/30 md:block"
            />

            {/* Travelers */}
            <div className="flex w-full flex-1 items-center gap-4 md:px-5">
              <FiUsers
                size={23}
                className="shrink-0 text-cyan-300"
              />
              <div>
                <h3 className="text-sm font-semibold">Travelers</h3>
                <p className="mt-1 text-xs text-white/65">
                  Number of guests
                </p>
              </div>
            </div>

            {/* Search Button */}
            <button className="group cursor-pointer flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 text-sm font-semibold uppercase tracking-wider transition duration-300 hover:bg-cyan-400 md:w-auto">
              Search
              <FiArrowUpRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
