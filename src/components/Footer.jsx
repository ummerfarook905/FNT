
export default function Footer() {
  return (
    <footer className="bg-[#001421] text-white">

      <div className="mx-auto max-w-[1200px] px-6 py-10 sm:px-10 lg:px-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">

          {/* BRAND */}
          <div>
            <a href="/" className="inline-block">

              <div className="flex items-center">

                <span className="text-[40px] font-black italic leading-none tracking-[-4px]">
                  F
                </span>

                <span className="text-[40px] font-black italic leading-none tracking-[-3px] text-white">
                  NT
                </span>

              </div>

              <div className="ml-4 text-[10px] font-bold tracking-[0.32em]">
                GROUP
              </div>

            </a>

            <p className="mt-5 text-[13px] leading-5 text-gray-300">
              Industrial Excellence.
              <br />
              Global Vision.
            </p>
          </div>


          {/* NAVIGATION */}
          <div>

            <h3 className="mb-4 text-[16px] font-bold uppercase tracking-wider">
              Navigation
            </h3>

            <nav className="flex flex-col gap-3">

              <a
                href="/about"
                className="text-[14px] text-gray-300 transition hover:text-[#ef3b32]"
              >
                About
              </a>

              <a
                href="/businesses"
                className="text-[14px] text-gray-300 transition hover:text-[#ef3b32]"
              >
                Businesses
              </a>

              <a
                href="/global"
                className="text-[14px] text-gray-300 transition hover:text-[#ef3b32]"
              >
                Global Presence
              </a>

              <a
                href="/contact"
                className="text-[14px] text-gray-300 transition hover:text-[#ef3b32]"
              >
                Contact
              </a>

            </nav>

          </div>


          {/* CONTACT */}
          <div>

            <h3 className="mb-4 text-[16px] font-bold uppercase tracking-wider">
              Contact Us
            </h3>

            <p className="text-[14px] leading-5 text-gray-300">
              FNT Group
              <br />
              India
            </p>

            <a
              href="mailto:info@fntgroup.com"
              className="mt-3 block text-[14px] text-gray-300 transition hover:text-[#ef3b32]"
            >
              info@fntgroup.com
            </a>

            <div className="mt-5 flex gap-5">

              <a
                href="#"
                className="text-[14px] text-gray-300 hover:text-[#ef3b32]"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-[14px] text-gray-300 hover:text-[#ef3b32]"
              >
                YouTube
              </a>

              <a
                href="#"
                className="text-[14px] text-gray-300 hover:text-[#ef3b32]"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>


        {/* DIVIDER */}
        <div className="mt-10 h-px w-full bg-white/20" />


        {/* BOTTOM */}
        <div className="flex flex-col gap-4 pt-5 text-center md:flex-row md:items-center md:justify-between md:text-left">

          <p className="text-[9px] text-gray-400">
            © 2026 FNT Group. All rights reserved.
          </p>

          <div className="flex justify-center gap-4">

            <a
              href="#"
              className="text-[9px] text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>

            <span className="text-gray-600">|</span>

            <a
              href="#"
              className="text-[9px] text-gray-400 hover:text-white"
            >
              Terms of Use
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}