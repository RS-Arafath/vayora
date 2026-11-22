import { Separator } from "@heroui/react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiCalendar,
  FiDollarSign,
  FiUsers,
} from "react-icons/fi";

const searchFields = [
  { icon: FiMapPin, title: "Location", hint: "Where do you want to go?" },
  { icon: FiCalendar, title: "Date & Duration", hint: "Choose your travel dates" },
  { icon: FiDollarSign, title: "Your Budget", hint: "Select your price range" },
  { icon: FiUsers, title: "Travelers", hint: "Number of guests" },
];

const Banner = () => {
  return (
    <section className="relative bg-black text-white">
      {/* Hero (image only lives here) */}
      <div className="relative bg-[url('/assets/banner.png')] bg-cover bg-center lg:min-h-[720px]">
        {/* dark overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black" /> */}

        <div className="relative z-10 flex flex-col items-center justify-center px-5 py-14 text-center sm:py-20 lg:min-h-[720px] lg:pb-48">
          <span className="mb-4  rounded-full border border-cyan-300/50 bg-white/10 px-4 py-1.5 font-body text-[10px] font-medium uppercase tracking-[0.2em] backdrop-blur-md sm:mb-6 sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
            Discover the Extraordinary
          </span>

          <h1 className="max-w-5xl font-heading text-4xl font-semibold leading-[1.15] tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Discover Your
            <br />
            Next{" "}
            <span className="font-serif italic text-cyan-300">Adventure</span>
          </h1>

          <p className="mt-5  max-w-xs font-body text-sm leading-7 text-white/90 sm:mt-7 sm:max-w-xl sm:text-base md:max-w-2xl md:text-lg md:leading-8">
            Explore breathtaking destinations and create unforgettable memories
            with our curated luxury travel experiences.
          </p>

          <div className="mt-7 flex w-full max-w-xs flex-col items-center gap-3 font-ui sm:mt-9 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <button className="group flex w-full cursor-pointer items-center justify-center gap-2 bg-[#00B8DB] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-cyan-300 sm:w-auto sm:gap-3 sm:px-7 sm:py-4 sm:text-sm">
              Explore Now
              <FiArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-4.5 sm:w-4.5" />
            </button>

            <button className="w-full cursor-pointer border border-white/60 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black sm:w-auto sm:px-7 sm:py-4 sm:text-sm">
              View Destinations
            </button>
          </div>
        </div>
      </div>

      {/* Search bar: below image on mobile, floating on lg */}
      <div className="relative z-20 px-4 py-5 font-ui sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-8 lg:py-0 lg:pb-8 xl:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-3 gap-y-4 rounded-2xl border border-white/20 bg-white/10 p-4 text-white shadow-2xl shadow-black/40 backdrop-blur-xl sm:gap-x-5 sm:p-5 lg:flex lg:items-center lg:gap-0 lg:p-4 xl:p-6">
          {searchFields.map(({ icon: Icon, title, hint }, i) => (
            <div
              key={title}
              className="contents lg:flex lg:min-w-0 lg:flex-1 lg:items-center"
            >
              <div className="flex w-full min-w-0 flex-1 items-center gap-2.5 sm:gap-4 lg:gap-3 lg:px-3 xl:gap-4 xl:px-5">
                <Icon className="h-5 w-5 shrink-0 text-[#00B8DB] sm:h-6 sm:w-6" />
                <div className="min-w-0">
                  <h3 className="truncate text-xs font-semibold sm:text-sm">{title}</h3>
                  <p className="mt-0.5 hidden truncate text-xs text-white/70 sm:block">
                    {hint}
                  </p>
                </div>
              </div>

              {i < searchFields.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden h-10 shrink-0 bg-white/25 lg:block"
                />
              )}
            </div>
          ))}

          <button className="group col-span-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#00B8DB] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-cyan-300 sm:py-4 sm:text-sm lg:col-span-1 lg:ml-2 lg:w-auto lg:shrink-0 lg:gap-3 lg:px-6 xl:px-7">
            Search
            <FiArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-4.5 sm:w-4.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;