import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <main className="min-h-screen bg-[#080a0b] text-white">
      <section className="relative min-h-screen overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">

          {/* Temporary background */}
          <div className="absolute inset-0 bg-[#111416]" />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Left gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Industrial vertical panel */}
        <div className="absolute right-[27%] top-0 hidden h-full w-[1px] bg-white/5 lg:block" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-24 sm:px-10 lg:px-14">
          <div className="max-w-[850px]">

            {/* Badge */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="border border-[#f47b20]/70 bg-[#f47b20]/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#f47b20] sm:text-[9px]">
                Operator Portfolio 2026
              </span>

              <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-gray-500 sm:text-[9px]">
                Independent Digital Commerce & Heavy Industry
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[850px]
                font-[Impact,Arial_Black,sans-serif]
                text-[46px]
                uppercase
                leading-[0.9]
                tracking-[-1px]
                sm:text-[60px]
                md:text-[72px]
                lg:text-[82px]
              "
            >
              Building
              <br />

              <span className="text-white">
                World-Class
              </span>

              <br />

              <span className="text-[#f47b20]">
                Digital Properties
              </span>

              <span className="text-white">
                {" "}For
              </span>

              <br />

              <span className="text-white">
                Global Sectors.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[610px] text-[11px] leading-5 text-gray-400 sm:text-[12px] sm:leading-6 md:text-[13px]">
              FNT Group is a premier digital holding company. We acquire,
              operate, and aggressively scale high-value web properties across
              manufacturing, beauty, logistics, and enterprise technology.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                className="
                  group
                  flex
                  h-[42px]
                  items-center
                  justify-center
                  gap-3
                  bg-[#f47b20]
                  px-5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#ff8c32]
                  sm:h-[44px]
                "
              >
                Explore Our Portfolio

                <ChevronDown
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </button>

              <button
                className="
                  group
                  flex
                  h-[42px]
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white/10
                  bg-black/30
                  px-5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#f47b20]
                  hover:bg-[#f47b20]/10
                  sm:h-[44px]
                "
              >
                Acquisition Criteria

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>
          </div>
        </div>

        {/* Bottom orange line */}
        <div className="absolute bottom-0 left-0 h-[3px] w-24 bg-[#f47b20]" />

        {/* Bottom right */}
        <div className="absolute bottom-7 right-7 hidden items-center gap-3 md:flex">
          <span className="h-[1px] w-12 bg-white/20" />

          <span className="text-[8px] uppercase tracking-[0.3em] text-gray-500">
            FNT GROUP
          </span>
        </div>

      </section>
    </main>
  );
};

export default Hero;