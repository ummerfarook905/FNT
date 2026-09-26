import Map from "../assets/images/map.png";

export default function GlobalPresence() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f4f7f9]
      "
    >

      {/* ===================================================== */}
      {/* ================= MAIN CONTAINER =================== */}
      {/* ===================================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          py-16
          sm:px-8
          sm:py-20
          md:px-10
          md:py-24
          lg:grid
          lg:grid-cols-[42%_58%]
          lg:items-center
          lg:px-12
          lg:py-24
          xl:px-[52px]
        "
      >

        {/* ================================================= */}
        {/* ================= LEFT CONTENT ================== */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-20
            w-full
            lg:max-w-[500px]
          "
        >

          {/* Small Label */}
          <div className="mb-5 flex items-center gap-3">

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#071827]
                sm:text-[10px]
              "
            >
              Global Presence
            </span>

            <span className="h-[2px] w-7 bg-[#ef3b32]" />

          </div>


          {/* ================================================= */}
          {/* ================= HEADING ======================= */}
          {/* ================================================= */}

          <h2
            className="
              max-w-[500px]
              text-[34px]
              font-black
              uppercase
              leading-[0.94]
              tracking-[-0.04em]
              text-[#071827]
              sm:text-[42px]
              md:text-[48px]
              lg:text-[46px]
              xl:text-[50px]
            "
          >
            A Stronger
            <br />

            Presence{" "}

            <span className="text-[#ef3b32]">
              Worldwide.
            </span>
          </h2>


          {/* ================================================= */}
          {/* ================= DESCRIPTION ================== */}
          {/* ================================================= */}

          <p
            className="
              mt-5
              max-w-[450px]
              text-[12px]
              leading-6
              text-[#526170]
              sm:text-[13px]
              sm:leading-7
              md:text-[14px]
            "
          >
            Our businesses serve customers across global markets,
            supporting industries with reliable products and solutions.
          </p>


          {/* ================================================= */}
          {/* ================= STATS ========================= */}
          {/* ================================================= */}

          <div
            className="
              mt-8
              flex
              w-full
              max-w-[500px]
              items-center
            "
          >

            {/* Countries */}
            <div className="pr-5 sm:pr-8">

              <p
                className="
                  text-[24px]
                  font-black
                  leading-none
                  text-[#071827]
                  sm:text-[28px]
                  md:text-[30px]
                "
              >
                20+
              </p>

              <p
                className="
                  mt-2
                  whitespace-nowrap
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-[#526170]
                  sm:text-[9px]
                "
              >
                Countries
              </p>

            </div>


            {/* Divider */}
            <div className="h-10 w-px shrink-0 bg-[#cbd3da] sm:h-12" />


            {/* Customers */}
            <div className="px-5 sm:px-8">

              <p
                className="
                  text-[24px]
                  font-black
                  leading-none
                  text-[#071827]
                  sm:text-[28px]
                  md:text-[30px]
                "
              >
                1000+
              </p>

              <p
                className="
                  mt-2
                  whitespace-nowrap
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-[#526170]
                  sm:text-[9px]
                "
              >
                Customers
              </p>

            </div>


            {/* Divider */}
            <div className="h-10 w-px shrink-0 bg-[#cbd3da] sm:h-12" />


            {/* Network */}
            <div className="pl-5 sm:pl-8">

              <p
                className="
                  text-[18px]
                  font-black
                  uppercase
                  leading-none
                  text-[#071827]
                  sm:text-[22px]
                  md:text-[24px]
                "
              >
                Growing
              </p>

              <p
                className="
                  mt-2
                  whitespace-nowrap
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-[#526170]
                  sm:text-[9px]
                "
              >
                Global Network
              </p>

            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* ================= WORLD MAP ===================== */}
        {/* ================================================= */}

        <div
          className="
            relative
            mt-10
            flex
            w-full
            items-center
            justify-center
            sm:mt-12
            md:mt-14
            lg:mt-0
            lg:min-h-[360px]
            xl:min-h-[400px]
          "
        >

          <img
            src={Map}
            alt="FNT Group Global Presence"
            className="
              block
              h-auto
              w-full
              max-w-full
              object-contain
              opacity-90
            "
          />

        </div>

      </div>


      {/* ===================================================== */}
      {/* ================= BOTTOM BORDER ==================== */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[1px]
          w-full
          bg-[#071827]/10
        "
      />

    </section>
  );
}