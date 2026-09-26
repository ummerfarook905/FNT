import { ArrowRight } from "lucide-react";
import aboutImage from "../assets/images/about.png";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#061522]">

      {/* ========================================================= */}
      {/* ================= DESKTOP BUILDING IMAGE =============== */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          right-0
          top-0
          hidden
          h-full
          w-[58%]
          lg:block
        "
      >
        <img
          src={aboutImage}
          alt="FNT Group Building"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>


      {/* ========================================================= */}
      {/* ================= DARK LEFT PANEL ====================== */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          inset-y-0
          left-0
          z-10
          hidden
          w-[58%]
          bg-[#061522]
          lg:block
        "
        style={{
          clipPath: "polygon(0 0, 88% 0, 68% 100%, 0 100%)",
        }}
      />


      {/* ========================================================= */}
      {/* ================= RED DIAGONAL ACCENT ================== */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          right-[30.5%]
          top-0
          z-20
          hidden
          h-[135px]
          w-[4px]
          origin-top
          rotate-[26deg]
          bg-[#ef3b32]
          lg:block
        "
      />


      {/* ========================================================= */}
      {/* ================= MAIN CONTENT ========================= */}
      {/* ========================================================= */}

      <div
        className="
          relative
          z-30
          mx-auto
          flex
          max-w-7xl
          flex-col
          px-5
          py-16
          sm:px-8
          sm:py-20
          md:py-24
          lg:min-h-screen
          lg:flex-row
          lg:items-center
          lg:px-12
          lg:py-24
        "
      >

        {/* ===================================================== */}
        {/* ================= LEFT CONTENT ====================== */}
        {/* ===================================================== */}

        <div
          className="
            w-full
            max-w-[520px]
            lg:w-[44%]
            lg:max-w-[500px]
          "
        >

          {/* ================= SMALL HEADING ================= */}

          <div className="mb-5 flex items-center gap-3">

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-white/80
                sm:text-[10px]
                md:text-xs
              "
            >
              About FNT Group
            </span>

            <span className="h-[2px] w-7 bg-[#ef3b32]" />

          </div>


          {/* ================= MAIN HEADING ================= */}

          <h2
            className="
              max-w-[480px]
              text-[36px]
              font-black
              uppercase
              leading-[0.94]
              tracking-[-0.04em]
              text-white
              sm:text-[46px]
              md:text-[56px]
              lg:max-w-[500px]
              lg:text-[58px]
              xl:text-[62px]
            "
          >
            Building Businesses
            <br />

            That Power
            <br />

            <span className="text-[#ef3b32]">
              Modern Industry.
            </span>
          </h2>


          {/* ================= DESCRIPTION ================= */}

          <p
            className="
              mt-6
              max-w-[420px]
              text-[13px]
              leading-6
              text-white/75
              sm:text-[14px]
              sm:leading-7
              md:text-[15px]
              lg:max-w-[430px]
            "
          >
            FNT Group is a diversified industrial group committed to
            innovation, quality and long-term value. We bring together
            specialized businesses that serve global industries with
            engineering excellence and a forward-thinking approach.
          </p>


          {/* ================= BUTTON ================= */}

          <div className="mt-7 sm:mt-8">

            <a
              href="#businesses"
              className="
                group
                inline-flex
                items-center
                gap-4
                border
                border-white/70
                px-5
                py-3
                text-[9px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-white
                transition-all
                duration-300
                hover:border-[#ef3b32]
                hover:bg-[#ef3b32]
                sm:px-6
                sm:py-3.5
                sm:text-[10px]
              "
            >
              Learn More

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>

        </div>


        {/* ===================================================== */}
        {/* ================= MOBILE IMAGE ====================== */}
        {/* ===================================================== */}

        <div
          className="
            relative
            mt-12
            block
            h-[260px]
            w-full
            overflow-hidden
            sm:h-[320px]
            md:h-[400px]
            lg:hidden
          "
        >

          <img
            src={aboutImage}
            alt="FNT Group Building"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Mobile Image Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#061522]/50
              via-transparent
              to-transparent
            "
          />

          {/* Mobile Red Accent */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-24
              bg-[#ef3b32]
            "
          />

        </div>

      </div>


      {/* ========================================================= */}
      {/* ================= MOBILE BOTTOM ACCENT ================= */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-[3px]
          w-24
          bg-[#ef3b32]
          lg:hidden
        "
      />

    </section>
  );
}