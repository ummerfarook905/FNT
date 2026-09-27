import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
  // Read the path from the router, not global `location`, so the transparent
  // navbar only applies on the home route and stays correct after navigation.
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

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

        <Link
          to="/"
          className="relative z-30 flex shrink-0 items-center"
          aria-label="FNT Group home"
        >
          {/* Wordmark: there is no logo.png in the repo, and a plain text mark
              matches the one used in the footer. */}
          <span className="flex items-baseline leading-none">
            <span className="text-[28px] font-black italic tracking-[-3px] text-white sm:text-[32px]">
              F
            </span>

            <span className="text-[28px] font-black italic tracking-[-2px] text-white sm:text-[32px]">
              NT
            </span>
          </span>

          <span className="ml-2 text-[7px] font-bold tracking-[0.3em] text-white/70 sm:text-[8px]">
            GROUP
          </span>
        </Link>


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
              <Link
                key={item.name}
                to={item.path}
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
              </Link>
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
              <Link
                key={item.name}
                to={item.path}
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
              </Link>
            ))}

          </div>

        </div>
      )}

    </header>
  );
}