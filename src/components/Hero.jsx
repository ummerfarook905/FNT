import { ArrowRight } from "lucide-react";
import heroBg from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28 sm:px-8 lg:px-12">

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ef3b32]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white sm:text-xs">
              FNT Group
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[42px] font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            <span className="block">
              Engineering
            </span>

            <span className="block text-[#ef3b32]">
              Industrial
            </span>

            <span className="block">
              Excellence<span className="text-[#ef3b32]">.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-sm leading-6 text-white sm:text-base sm:leading-7">
            FNT Group brings together specialized industrial businesses
            focused on engineering, manufacturing and technology.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#businesses"
              className="group inline-flex items-center gap-4 bg-[#ef3b32] px-6 py-4 text-[10px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-[#071827] sm:px-7"
            >
              Explore Our Businesses

              <ArrowRight
                size={15}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-6 z-20 hidden flex-col items-center gap-3 sm:right-10 md:flex">

        <span className="rotate-90 text-[8px] font-bold uppercase tracking-[0.3em] text-white">
          Scroll
        </span>

        <div className="h-16 w-px bg-white/50">
          <div className="h-6 w-full bg-white" />
        </div>

      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/20" />

    </section>
  );
}