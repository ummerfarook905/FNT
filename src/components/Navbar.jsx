import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "BUSINESSES", path: "/businesses" },
  { name: "GLOBAL PRESENCE", path: "/global" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
   const isHomePage = location.pathname === "/";

  // ================= SCROLL DETECTION =================
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          scrolled || !isHomePage
            ? "bg-[#061522]/95 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >

      {/* ================= NAVBAR ================= */}

      <nav
        className="
          relative
          flex
          h-[70px]
          w-full
          items-center
          border-b
          border-white/20
          px-5
          sm:h-[76px]
          sm:px-8
          lg:h-[78px]
          lg:px-12
          xl:px-14
        "
      >

        {/* ================= LOGO ================= */}

        <a
          href="/"
          className="relative z-30 flex shrink-0 items-center"
        >
          <img
            src="/logo.png"
            alt="FNT Group"
            className="
              h-10
              w-auto
              object-contain
              sm:h-12
              lg:h-13
            "
          />
        </a>


        {/* ================================================= */}
        {/* ============== CENTER NAVIGATION ================ */}
        {/* ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-0
            hidden
            h-full
            -translate-x-1/2
            items-center
            lg:flex
          "
        >
          <div className="flex h-full items-center gap-7 xl:gap-9">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="
                  flex
                  h-full
                  items-center
                  whitespace-nowrap
                  text-[12px]
                  font-semibold
                  tracking-[0.05em]
                  text-white
                  transition-all
                  duration-300
                  hover:text-[#ef3b32]
                  xl:text-[13px]
                "
              >
                {item.name}
              </a>
            ))}

          </div>
        </div>


        {/* ================= MOBILE BUTTON ================= */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            relative
            z-30
            ml-auto
            text-white
            lg:hidden
          "
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X
              size={26}
              strokeWidth={1.8}
            />
          ) : (
            <Menu
              size={26}
              strokeWidth={1.8}
            />
          )}
        </button>

      </nav>


      {/* ================================================= */}
      {/* ================= MOBILE MENU =================== */}
      {/* ================================================= */}

      {menuOpen && (
        <div
          className="
            border-b
            border-white/10
            bg-[#061522]/95
            px-6
            py-5
            backdrop-blur-md
            lg:hidden
          "
        >

          <div className="flex flex-col">

            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`
                  border-b
                  border-white/10
                  py-4
                  text-[10px]
                  font-bold
                  tracking-[0.08em]
                  transition-colors
                  duration-300
                  ${
                    index === 0
                      ? "text-[#ef3b32]"
                      : "text-white hover:text-[#ef3b32]"
                  }
                `}
              >
                {item.name}
              </a>
            ))}

          </div>

        </div>
      )}

    </header>
  );
}