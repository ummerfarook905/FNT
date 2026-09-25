import { ArrowRight } from "lucide-react";

const businesses = [
  {
    number: "01/04",
    name: "CHEOL",
    accent: "KOREA",
    subtitle: "CABLE MANAGEMENT SYSTEMS",
    description:
      "Engineered cable management solutions designed for modern industrial applications.",
    image: "/business/cheol.jpg",
    link: "https://cheolkorea.com/",
  },
  {
    number: "02/04",
    name: "CABLOND",
    accent: "",
    subtitle: "CABLE TERMINATIONS & ACCESSORIES",
    description:
      "High-performance cable termination and accessory solutions for demanding applications.",
    image: "/business/cablond.jpg",
    link: "https://cablond.com/",
  },
  {
    number: "03/04",
    name: "BUSINESS",
    accent: "03",
    subtitle: "INDUSTRIAL SOLUTIONS",
    description:
      "Advanced industrial solutions to support modern infrastructure and operations.",
    image: "/business/industrial.jpg",
    link: "#",
  },
  {
    number: "04/04",
    name: "BUSINESS",
    accent: "04",
    subtitle: "ENGINEERING SOLUTIONS",
    description:
      "Innovative engineering solutions for a more efficient and connected future.",
    image: "/business/engineering.jpg",
    link: "#",
  },
];

function BusinessCard({ business }) {
  return (
    <div className="group relative h-[250px] overflow-hidden bg-[#071827] sm:h-[270px] lg:h-[290px]">

      {/* Background image */}
      <img
        src={business.image}
        alt={business.name}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overall dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Right image dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061522] via-[#061522]/90 via-45% to-transparent" />

      {/* Dark left content panel */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          w-[67%]
          bg-[#061522]/95
          [clip-path:polygon(0_0,88%_0,70%_100%,0_100%)]
          sm:w-[64%]
        "
      />

      {/* Red diagonal line */}
      <div
        className="
          absolute
          inset-y-0
          left-[58%]
          z-10
          w-[3px]
          bg-[#ef3b32]
          [clip-path:polygon(100%_0,100%_100%,0_100%)]
          sm:left-[57%]
        "
      />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col px-6 py-5 sm:px-7 sm:py-6">

        {/* Number */}
        <span className="text-[9px] font-semibold tracking-[0.12em] text-white/70 sm:text-[10px]">
          {business.number}
        </span>

        {/* Business name */}
        <div className="mt-3 flex items-baseline gap-1">

          <h3 className="text-[25px] font-black uppercase leading-none tracking-tight text-white sm:text-[29px]">
            {business.name}
          </h3>

          {business.accent && (
            <span className="text-[25px] font-black uppercase leading-none text-[#ef3b32] sm:text-[29px]">
              {business.accent}
            </span>
          )}

        </div>

        {/* Subtitle */}
        <p className="mt-3 max-w-[300px] text-[9px] font-bold uppercase tracking-[0.12em] text-white/90 sm:text-[10px]">
          {business.subtitle}
        </p>

        {/* Description */}
        <p className="mt-4 max-w-[290px] text-[11px] leading-[1.45] text-gray-300 sm:text-[12px]">
          {business.description}
        </p>

        {/* Explore */}
        <a
          href={business.link}
          target={business.link.startsWith("http") ? "_blank" : undefined}
          rel={
            business.link.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          className="
            group/link
            mt-auto
            flex
            w-fit
            items-center
            gap-2
            text-[9px]
            font-bold
            uppercase
            tracking-[0.08em]
            text-white
            transition-colors
            hover:text-[#ef3b32]
            sm:text-[10px]
          "
        >
          Explore Website

          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}

export default function Businesses() {
  return (
    <section className="relative overflow-hidden bg-[#f4f7f9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-[1px] w-full bg-[#cbd5df]" />

        <div className="absolute left-[12%] top-0 h-full w-px rotate-[28deg] bg-[#d8e0e7]" />

        <div className="absolute left-[30%] top-0 h-full w-px rotate-[28deg] bg-[#d8e0e7]" />

        <div className="absolute right-[20%] top-0 h-full w-px rotate-[28deg] bg-[#d8e0e7]" />

        <div className="absolute right-[5%] top-0 h-full w-px rotate-[28deg] bg-[#d8e0e7]" />
      </div>

      {/* Header */}
      <div className="relative z-10 mx-auto mb-10 max-w-[1100px] text-center">

        {/* Small title */}
        <div className="mb-3 flex items-center justify-center gap-3">

          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#526276] sm:text-[10px]">
            Our Businesses
          </span>

          <span className="h-[1px] w-7 bg-[#ef3b32]" />

        </div>

        {/* Main heading */}
        <h2 className="text-[27px] font-black uppercase leading-none tracking-tight text-[#0a192c] sm:text-[34px] md:text-[38px]">
          Four Specialized Businesses
          <span className="text-[#ef3b32]">.</span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-3 max-w-[650px] text-[11px] leading-5 text-[#526276] sm:text-[13px]">
          Different strengths. A shared vision. Building a stronger,
          connected industry.
        </p>

      </div>

      {/* Business cards */}
      <div className="relative z-10 mx-auto grid max-w-[1150px] grid-cols-1 gap-5 md:grid-cols-2">

        {businesses.map((business) => (
          <BusinessCard
            key={business.number}
            business={business}
          />
        ))}

      </div>

    </section>
  );
}