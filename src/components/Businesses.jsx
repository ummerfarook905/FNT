import { ArrowRight } from "lucide-react";
import Cheol from "../assets/images/channel.png";

const businesses = [
  {
    number: "01/04",
    name: "CHEOL",
    accent: "KOREA",
    subtitle: "CABLE MANAGEMENT SYSTEMS",
    description:
      "Engineered cable management solutions designed for modern industrial applications.",
    image: Cheol,
    link: "https://cheolkorea.com/",
  },
  {
    number: "02/04",
    name: "CABLOND",
    accent: "",
    subtitle: "CABLE TERMINATIONS & ACCESSORIES",
    description:
      "High-performance cable termination and accessory solutions for demanding applications.",
    image: Cheol,
    link: "https://cablond.com/",
  },
  {
    number: "03/04",
    name: "BUSINESS",
    accent: "03",
    subtitle: "INDUSTRIAL SOLUTIONS",
    description:
      "Advanced industrial solutions to support modern infrastructure and operations.",
    image: Cheol,
    link: "#",
  },
  {
    number: "04/04",
    name: "BUSINESS",
    accent: "04",
    subtitle: "ENGINEERING SOLUTIONS",
    description:
      "Innovative engineering solutions for a more efficient and connected future.",
    image: Cheol,
    link: "#",
  },
];

function BusinessCard({ business }) {
  return (
    <article
      className="
        group
        relative
        h-[300px]
        overflow-hidden
        rounded-xl
        border
        border-white/40
        bg-[#061522]
        shadow-[0_15px_40px_rgba(7,24,39,0.08)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_25px_60px_rgba(7,24,39,0.18)]
        sm:h-[320px]
        lg:h-[340px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src={business.image}
        alt={business.name}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-[#061522]/10 transition duration-500 group-hover:bg-transparent" />

      {/* Image Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#061522]
          via-[#061522]/95
          via-[45%]
          to-[#061522]/10
        "
      />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/50 to-transparent" />


      {/* ================= DARK DIAGONAL PANEL ================= */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          z-[2]
          w-[68%]
          bg-[#061522]/95
          transition-all
          duration-500
          group-hover:w-[66%]
        "
        style={{
          clipPath: "polygon(0 0, 91% 0, 70% 100%, 0 100%)",
        }}
      />


      {/* ================= RED DIAGONAL LINE ================= */}
      {/* <div
        className="
          absolute
          inset-y-0
          left-[57%]
          z-[5]
          w-[2px]
          bg-[#ef3b32]
          transition-all
          duration-500
          group-hover:bg-white
          sm:left-[56.5%]
        "
      /> */}

      {/* Red Glow */}
      {/* <div
        className="
          absolute
          inset-y-0
          left-[57%]
          z-[4]
          w-[12px]
          bg-[#ef3b32]/10
          blur-md
          transition-all
          duration-500
          group-hover:bg-[#ef3b32]/30
          sm:left-[56.5%]
        "
      /> */}


      {/* ================= CARD CONTENT ================= */}
      <div className="relative z-10 flex h-full flex-col px-7 py-6 sm:px-8 sm:py-7">

        {/* Number */}
        {/* <div className="flex items-center gap-3">

          <span className="text-[10px] font-semibold tracking-[0.15em] text-white/55 sm:text-[11px]">
            {business.number}
          </span>

          <span className="h-px w-7 bg-white/20 transition-all duration-300 group-hover:w-11 group-hover:bg-[#ef3b32]" />

        </div> */}


        {/* Business Name */}
        <div className="mt-5 flex items-baseline gap-1">

          <h3
            className="
              text-[28px]
              font-black
              uppercase
              leading-none
              tracking-[-0.02em]
              text-white
              sm:text-[32px]
            "
          >
            {business.name}
          </h3>

          {business.accent && (
            <span
              className="
                text-[28px]
                font-black
                uppercase
                leading-none
                tracking-[-0.02em]
                text-[#ef3b32]
                sm:text-[32px]
              "
            >
              {business.accent}
            </span>
          )}

        </div>


        {/* Subtitle */}
        <p
          className="
            mt-4
            max-w-[330px]
            text-[9px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-white/90
            sm:text-[10px]
          "
        >
          {business.subtitle}
        </p>


        {/* Description */}
        <p
          className="
            mt-5
            max-w-[310px]
            text-[11px]
            leading-[1.6]
            text-white/70
            sm:text-[12px]
          "
        >
          {business.description}
        </p>


        {/* Explore Website */}
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
            gap-3
            border-b
            border-white/30
            pb-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white
            transition-all
            duration-300
            hover:border-[#ef3b32]
            hover:text-[#ef3b32]
            sm:text-[10px]
          "
        >
          Explore Website

          <ArrowRight
            size={14}
            strokeWidth={2}
            className="
              transition-transform
              duration-300
              group-hover/link:translate-x-1
            "
          />
        </a>

      </div>


      {/* ================= TOP RED ACCENT ================= */}
      <div
        className="
          absolute
          left-0
          top-0
          z-20
          h-[2px]
          w-0
          bg-[#ef3b32]
          transition-all
          duration-500
          group-hover:w-28
        "
      />

    </article>
  );
}


export default function Businesses() {
  return (
    <section
      id="businesses"
      className="
        relative
        overflow-hidden
        bg-[#f4f7f9]
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-10
        lg:py-32
      "
    >

      {/* ================= BACKGROUND PATTERN ================= */}
      <div className="pointer-events-none absolute inset-0">

        {/* Top Border */}
        <div className="absolute left-0 top-0 h-px w-full bg-[#d7dee5]" />

        {/* Diagonal Line 1 */}
        <div
          className="
            absolute
            -left-20
            top-[-20%]
            h-[150%]
            w-px
            rotate-[28deg]
            bg-[#dbe2e8]
          "
        />

        {/* Diagonal Line 2 */}
        <div
          className="
            absolute
            left-[28%]
            top-[-20%]
            h-[150%]
            w-px
            rotate-[28deg]
            bg-[#e0e6eb]
          "
        />

        {/* Diagonal Line 3 */}
        <div
          className="
            absolute
            right-[20%]
            top-[-20%]
            h-[150%]
            w-px
            rotate-[28deg]
            bg-[#e0e6eb]
          "
        />

        {/* Diagonal Line 4 */}
        <div
          className="
            absolute
            right-[-5%]
            top-[-20%]
            h-[150%]
            w-px
            rotate-[28deg]
            bg-[#dbe2e8]
          "
        />

        {/* Center Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/70
            blur-3xl
          "
        />

      </div>


      {/* ================= SECTION HEADER ================= */}
      <div className="relative z-10 mx-auto mb-14 max-w-[1200px] text-center">

        {/* Small Label */}
        <div className="mb-5 flex items-center justify-center gap-3">

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-[#526276]
              sm:text-[11px]
            "
          >
            Our Businesses
          </span>

          <span className="h-[2px] w-8 bg-[#ef3b32]" />

        </div>


        {/* Main Heading */}
        <h2
          className="
            text-[32px]
            font-black
            uppercase
            leading-none
            tracking-[-0.035em]
            text-[#071827]
            sm:text-[40px]
            md:text-[46px]
            lg:text-[48px]
          "
        >
          Four Specialized Businesses
          <span className="text-[#ef3b32]">.</span>
        </h2>


        {/* Subtitle */}
        <p
          className="
            mx-auto
            mt-5
            max-w-[700px]
            text-[12px]
            leading-6
            text-[#526276]
            sm:text-[13px]
            md:text-[14px]
          "
        >
          Different strengths. A shared vision. Building a stronger,
          connected industry.
        </p>

      </div>


      {/* ================= BUSINESS GRID ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1250px]
          grid-cols-1
          gap-6
          md:grid-cols-2
          lg:gap-7
        "
      >

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