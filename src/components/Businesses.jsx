import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Cable,
  Cog,
  ShieldCheck,
  Globe2,
  BarChart3,
  Lightbulb,
  Link2,
  X,
} from "lucide-react";

// ============================================================
// PRODUCT IMAGES
// ============================================================

import CableLadder from "../assets/images/cheol/ladder.jpeg";
import CableLadder1 from "../assets/images/cheol/ladder1.png";
import CableTray from "../assets/images/cheol/tray.jpeg";
import CableTray1 from "../assets/images/cheol/tray1.png";
import CableTrunking from "../assets/images/cheol/trunking.jpeg";
import CableTrunking1 from "../assets/images/cheol/trunking1.png";
import ChannelSupport from "../assets/images/cheol/support.jpeg";
import ChannelSupport1 from "../assets/images/cheol/support1.png";

import Cheol from "../assets/images/business/cheol.png";
import Cablond from "../assets/images/business/cablond.png";
import Third from "../assets/images/business/third.png";
import Fourth from "../assets/images/business/fourth.png";

// ============================================================
// BUSINESS DATA
// ============================================================

const businesses = [
  {
    name: "CHEOL",
    accent: "KOREA",
    subtitle: "CABLE MANAGEMENT SYSTEMS",

    description:
      "Engineered cable management solutions designed for modern industrial applications. Delivering strength, reliability and efficiency.",

    image: Cheol,

    link: "https://cheolkorea.com/",

    features: [
      {
        icon: Cable,
        text: "Wide range of cable support solutions",
      },
      {
        icon: Cog,
        text: "Engineered for industrial environments",
      },
      {
        icon: ShieldCheck,
        text: "Durable, safe and standards-compliant",
      },
      {
        icon: Globe2,
        text: "Trusted worldwide",
      },
    ],

    products: [
      {
        name: "Cable Ladder",
        description:
          "Heavy-duty cable ladders manufactured for industrial and commercial installations.",
        image: CableLadder1,
      },
      {
        name: "Cable Tray",
        description:
          "Perforated cable trays available in multiple sizes and materials.",
        image: CableTray1,
      },
      {
        name: "Cable Trunking",
        description:
          "Multi-compartment cable trunking systems for organized cable routing.",
        image: CableTrunking1,
      },
      {
        name: "Channel & Support",
        description:
          "Structural channels, brackets and support accessories.",
        image: ChannelSupport1,
      },
    ],
  },

  {
    name: "CABLOND",
    accent: "",
    subtitle: "CABLE TERMINATIONS & ACCESSORIES",

    description:
      "High-performance cable termination and accessory solutions for demanding applications. Ensuring secure, reliable and long-lasting connections.",

    image: Cablond,

    link: "https://cablond.com/",

    features: [
      {
        icon: Link2,
        text: "Comprehensive termination range",
      },
      {
        icon: Cog,
        text: "Designed for harsh environments",
      },
      {
        icon: ShieldCheck,
        text: "High-quality and reliable performance",
      },
      {
        icon: Globe2,
        text: "Solutions for global industries",
      },
    ],

    products: [
      {
        name: "Cable Glands",
        description:
          "Reliable cable gland solutions for industrial applications.",
        image: CableLadder,
      },
      {
        name: "Cable Lugs",
        description:
          "High-quality cable lugs for secure electrical connections.",
        image: CableTray,
      },
      {
        name: "Cable Accessories",
        description:
          "Professional accessories designed for cable installation.",
        image: CableTrunking,
      },
      {
        name: "Termination Systems",
        description:
          "High-performance cable termination systems.",
        image: ChannelSupport,
      },
    ],
  },

  {
    name: "BUSINESS",
    accent: "",
    subtitle: "INDUSTRIAL SOLUTIONS",

    description:
      "Advanced industrial solutions to support modern infrastructure and operations. Built to enhance productivity, safety and long-term value.",

    image: Third,

    link: "#",

    features: [
      {
        icon: BarChart3,
        text: "Solutions for critical infrastructure",
      },
      {
        icon: Cog,
        text: "Optimized for operational efficiency",
      },
      {
        icon: ShieldCheck,
        text: "Built for safety and reliability",
      },
      {
        icon: Globe2,
        text: "Supporting diverse industrial sectors",
      },
    ],

    products: [
      {
        name: "Industrial Systems",
        description:
          "Advanced systems designed for modern industrial applications.",
        image: CableLadder,
      },
      {
        name: "Support Systems",
        description:
          "Reliable structural support solutions.",
        image: CableTray,
      },
      {
        name: "Infrastructure",
        description:
          "Solutions supporting modern industrial infrastructure.",
        image: CableTrunking,
      },
      {
        name: "Accessories",
        description:
          "Industrial accessories for industrial applications.",
        image: ChannelSupport,
      },
    ],
  },

  {
    name: "BUSINESS",
    accent: "",
    subtitle: "ENGINEERING SOLUTIONS",

    description:
      "Innovative engineering solutions for a more efficient and connected future. Combining technical expertise with practical applications to solve complex challenges.",

    image: Fourth,

    link: "#",

    features: [
      {
        icon: Lightbulb,
        text: "Innovative and future-ready solutions",
      },
      {
        icon: Cog,
        text: "Engineering excellence and expertise",
      },
      {
        icon: ShieldCheck,
        text: "Tailored for complex requirements",
      },
      {
        icon: Globe2,
        text: "Delivering long-term value",
      },
    ],

    products: [
      {
        name: "Engineering Systems",
        description:
          "Engineering solutions designed for demanding applications.",
        image: CableLadder,
      },
      {
        name: "Industrial Products",
        description:
          "Reliable products for industrial environments.",
        image: CableTray,
      },
      {
        name: "Technical Systems",
        description:
          "Technical solutions for modern infrastructure.",
        image: CableTrunking,
      },
      {
        name: "Support Products",
        description:
          "Supporting products for industrial installations.",
        image: ChannelSupport,
      },
    ],
  },
];

// ============================================================
// OUTSIDE PRODUCT POPUP
// ============================================================

function ProductPopup({
  business,
  buttonRect,
  onMouseEnter,
  onMouseLeave,
  onClose,
}) {
  const popupRef = useRef(null);

  const [position, setPosition] = useState({
    top: 100,
    left: 100,
  });

  useEffect(() => {
    if (!buttonRect) return;

    const updatePosition = () => {
      if (!popupRef.current) return;

      const popupWidth = popupRef.current.offsetWidth;
      const popupHeight = popupRef.current.offsetHeight;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const margin = 16;
      const gap = 18;

      let left = 0;
      let top = buttonRect.top;

      // ======================================================
      // DESKTOP
      // ======================================================

      if (viewportWidth >= 1024) {
        const spaceRight =
          viewportWidth - buttonRect.right;

        const spaceLeft =
          buttonRect.left;

        // Open to RIGHT
        if (spaceRight >= popupWidth + gap) {
          left = buttonRect.right + gap;
        }

        // Open to LEFT
        else if (spaceLeft >= popupWidth + gap) {
          left = buttonRect.left - popupWidth - gap;
        }

        // Center if neither side has enough room
        else {
          left =
            (viewportWidth - popupWidth) / 2;
        }
      }

      // ======================================================
      // TABLET / MOBILE
      // ======================================================

      else {
        left =
          (viewportWidth - popupWidth) / 2;
      }

      // Keep popup inside viewport horizontally
      left = Math.max(
        margin,
        Math.min(
          left,
          viewportWidth - popupWidth - margin
        )
      );

      // ======================================================
      // VERTICAL POSITION
      // ======================================================

      if (
        top + popupHeight >
        viewportHeight - margin
      ) {
        top =
          viewportHeight -
          popupHeight -
          margin;
      }

      if (top < margin) {
        top = margin;
      }

      setPosition({
        top,
        left,
      });
    };

    updatePosition();

    window.addEventListener(
      "resize",
      updatePosition
    );

    window.addEventListener(
      "scroll",
      updatePosition,
      true
    );

    return () => {
      window.removeEventListener(
        "resize",
        updatePosition
      );

      window.removeEventListener(
        "scroll",
        updatePosition,
        true
      );
    };
  }, [buttonRect]);

  if (!business) {
    return null;
  }

  // ========================================================
  // PORTAL
  // This puts the popup directly inside <body>
  // instead of inside the business card.
  // ========================================================

  return createPortal(
    <div
      ref={popupRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="
        fixed
        z-[99999]

        w-[calc(100vw-24px)]
        max-w-[720px]

        rounded-2xl

        border
        border-[#d8e0e6]

        bg-[#f5f7f9]

        p-3

        shadow-[0_30px_100px_rgba(0,0,0,0.38)]

        sm:p-4
        md:p-5
      "
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {/* ====================================================
          POPUP HEADER
      ==================================================== */}

      <div
        className="
          mb-4

          flex
          items-start
          justify-between
          gap-4

          border-b
          border-[#d8e0e6]

          pb-4
        "
      >
        <div className="min-w-0">
          <p
            className="
              text-[8px]
              sm:text-[9px]

              font-bold
              uppercase

              tracking-[0.22em]

              text-[#647386]
            "
          >
            Our Products
          </p>

          <div
            className="
              mt-1

              flex
              flex-wrap
              items-baseline

              gap-x-2
            "
          >
            <h3
              className="
                text-[20px]
                sm:text-[22px]
                md:text-[25px]

                font-black
                uppercase

                leading-none

                tracking-[-0.03em]

                text-[#061522]
              "
            >
              {business.name}
            </h3>

            {business.accent && (
              <span
                className="
                  text-[20px]
                  sm:text-[22px]
                  md:text-[25px]

                  font-black
                  uppercase

                  leading-none

                  tracking-[-0.03em]

                  text-[#ef3b32]
                "
              >
                {business.accent}
              </span>
            )}
          </div>

          <p
            className="
              mt-2

              text-[8px]
              sm:text-[9px]

              font-semibold
              uppercase

              tracking-[0.14em]

              text-[#718093]
            "
          >
            {business.subtitle}
          </p>
        </div>

        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          className="
            flex
            h-8
            w-8

            shrink-0

            items-center
            justify-center

            rounded-full

            border
            border-[#d8e0e6]

            bg-white

            text-[#526276]

            transition

            hover:bg-[#061522]
            hover:text-white
          "
        >
          <X size={15} />
        </button>
      </div>

      {/* ====================================================
          PRODUCT GRID
      ==================================================== */}

      <div
        className="
          grid

          grid-cols-1

          min-[420px]:grid-cols-2

          gap-3

          sm:gap-4
          md:gap-5
        "
      >
        {business.products?.map(
          (product) => (
            <div
              key={product.name}
              className="
                group/product

                overflow-hidden

                rounded-xl

                border
                border-[#dfe5ea]

                bg-white
              "
            >
              {/* IMAGE */}

              <div
                className="
                  relative

                  h-[90px]

                  min-[420px]:h-[105px]

                  sm:h-[115px]

                  md:h-[125px]

                  overflow-hidden
                "
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    w-full

                    object-cover

                    transition-transform
                    duration-500

                    group-hover/product:scale-105
                  "
                />

                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/40
                    to-transparent
                  "
                />
              </div>

              {/* DETAILS */}

              <div
                className="
                  p-3

                  sm:p-3.5

                  md:p-4
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-2
                  "
                >
                  <h4
                    className="
                      text-[10px]
                      sm:text-[11px]
                      md:text-[12px]

                      font-black
                      uppercase

                      leading-tight

                      text-[#061522]
                    "
                  >
                    {product.name}
                  </h4>

                  <ArrowUpRight
                    size={14}
                    className="
                      shrink-0

                      text-[#ef3b32]

                      transition-transform
                      duration-300

                      group-hover/product:translate-x-0.5
                      group-hover/product:-translate-y-0.5
                    "
                  />
                </div>

                <p
                  className="
                    mt-1.5

                    line-clamp-2

                    text-[8px]
                    sm:text-[9px]
                    md:text-[10px]

                    leading-4

                    text-[#647386]
                  "
                >
                  {product.description}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* ====================================================
          EXPLORE WEBSITE
      ==================================================== */}

      {business.link !== "#" && (
        <a
          href={business.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5

            flex
            w-full

            items-center
            justify-between

            gap-3

            rounded-lg

            bg-[#061522]

            px-4
            py-3

            text-[9px]
            sm:text-[10px]

            font-bold
            uppercase

            tracking-[0.14em]

            text-white

            transition-colors
            duration-300

            hover:bg-[#ef3b32]
          "
        >
          <span>
            Explore Website
          </span>

          <ArrowUpRight size={15} />
        </a>
      )}
    </div>,
    document.body
  );
}

// ============================================================
// BUSINESS CARD
// ============================================================

function BusinessCard({ business, onPopupOpen, onPopupClose }) {
  const buttonRef = useRef(null);

  const closeTimer = useRef(null);

  const [showPopup, setShowPopup] =
    useState(false);

  const [buttonRect, setButtonRect] =
    useState(null);

  // ==========================================================
  // OPEN
  // ==========================================================

  const openPopup = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    if (!buttonRef.current) {
      return;
    }

    const rect =
      buttonRef.current.getBoundingClientRect();

    setButtonRect(rect);

    setShowPopup(true);
    onPopupOpen();
  };

  // ==========================================================
  // CLOSE
  // ==========================================================

  const closePopup = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setShowPopup(false);
      onPopupClose();
    }, 180);
  };

  // ==========================================================
  // KEEP OPEN
  // ==========================================================

  const keepPopupOpen = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
  };

  // ==========================================================
  // UPDATE POSITION
  // ==========================================================

  useEffect(() => {
    if (!showPopup) {
      return;
    }

    const updatePosition = () => {
      if (!buttonRef.current) {
        return;
      }

      const rect =
        buttonRef.current.getBoundingClientRect();

      setButtonRect(rect);
    };

    updatePosition();

    window.addEventListener(
      "resize",
      updatePosition
    );

    window.addEventListener(
      "scroll",
      updatePosition,
      true
    );

    return () => {
      window.removeEventListener(
        "resize",
        updatePosition
      );

      window.removeEventListener(
        "scroll",
        updatePosition,
        true
      );
    };
  }, [showPopup]);

  // ==========================================================
  // CLEANUP
  // ==========================================================

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  return (
    <div
      className="
        relative
        z-10
        w-full
        min-w-0
      "
    >
      {/* ====================================================
          BUSINESS CARD
      ==================================================== */}

      <article
        className="
          relative

          w-full

          overflow-hidden

          rounded-[18px]

          border
          border-[#d8dee3]

          bg-[#061522]

          min-h-0

          lg:min-h-[clamp(500px,32vw,590px)]
        "
      >
        {/* ==================================================
            IMAGE
        ================================================== */}

        <div
          className="
            relative

            h-[210px]

            w-full

            overflow-hidden

            min-[375px]:h-[225px]

            sm:h-[250px]

            md:h-[300px]

            lg:absolute
            lg:inset-0
            lg:h-full
          "
        >
          <img
            src={business.image}
            alt={business.name}
            className="
              h-full
              w-full

              object-cover
              object-center
            "
          />

          {/* MOBILE GRADIENT */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-b
              from-transparent
              via-transparent
              to-[#061522]/50

              lg:hidden
            "
          />
        </div>

        {/* ==================================================
            DESKTOP IMAGE OVERLAY
        ================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            hidden

            bg-gradient-to-r
            from-[#061522]/75
            via-[#061522]/30
            to-transparent

            lg:block
          "
        />

        {/* ==================================================
            DESKTOP DIAGONAL PANEL
        ================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            inset-y-0
            left-0

            z-[2]

            hidden

            w-[58%]

            bg-[#061522]/95

            lg:block
          "
          style={{
            clipPath:
              "polygon(0 0, 94% 0, 76% 100%, 0 100%)",
          }}
        />

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10

            w-full

            bg-[#061522]

            px-5
            pb-7
            pt-7

            min-[375px]:px-6

            sm:px-8
            sm:pb-8
            sm:pt-8

            md:px-10
            md:pb-9
            md:pt-9

            lg:absolute
            lg:inset-y-0
            lg:left-0

            lg:flex
            lg:h-full

            lg:w-[56%]

            lg:flex-col

            lg:bg-transparent

            lg:px-[clamp(28px,2.4vw,42px)]
            lg:py-[clamp(28px,2.2vw,40px)]
          "
        >
          {/* ==================================================
              TITLE
          ================================================== */}

          <div
            className="
              flex
              flex-wrap
              items-baseline

              gap-x-2
              gap-y-1
            "
          >
            <h3
              className="
                text-[clamp(28px,7vw,40px)]

                font-black
                uppercase

                leading-[0.95]

                tracking-[-0.04em]

                text-white

                md:text-[42px]

                lg:text-[clamp(30px,2.8vw,46px)]
              "
            >
              {business.name}
            </h3>

            {business.accent && (
              <span
                className="
                  text-[clamp(28px,7vw,40px)]

                  font-black
                  uppercase

                  leading-[0.95]

                  tracking-[-0.04em]

                  text-[#ef3b32]

                  md:text-[42px]

                  lg:text-[clamp(30px,2.8vw,46px)]
                "
              >
                {business.accent}
              </span>
            )}
          </div>

          {/* ==================================================
              SUBTITLE
          ================================================== */}

          <p
            className="
              mt-4

              max-w-full

              text-[9px]

              font-bold
              uppercase

              leading-5

              tracking-[0.18em]

              text-white

              min-[375px]:text-[10px]

              sm:tracking-[0.2em]

              md:text-[11px]

              lg:mt-[clamp(12px,1vw,18px)]

              lg:text-[clamp(9px,0.7vw,12px)]
            "
          >
            {business.subtitle}
          </p>

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-5

              w-full
              max-w-full

              text-[11px]

              leading-[1.7]

              text-white/80

              min-[375px]:text-[12px]

              sm:mt-6
              sm:max-w-[620px]

              md:text-[13px]

              lg:mt-[clamp(16px,1.5vw,24px)]

              lg:max-w-[clamp(300px,25vw,430px)]

              lg:text-[clamp(11px,0.8vw,14px)]

              lg:leading-[1.65]
            "
          >
            {business.description}
          </p>

          {/* ==================================================
              FEATURES
          ================================================== */}

          <div
            className="
              mt-7

              grid
              grid-cols-1

              gap-y-3

              sm:mt-8
              sm:gap-y-3.5

              md:mt-9

              md:grid-cols-2

              md:gap-x-10
              md:gap-y-4

              lg:mt-[clamp(18px,1.6vw,28px)]

              lg:grid-cols-1

              lg:gap-y-[clamp(10px,1vw,17px)]
            "
          >
            {business.features.map(
              (feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      min-w-0
                      items-center

                      gap-3

                      sm:gap-4

                      lg:gap-[clamp(10px,0.9vw,16px)]
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex

                        h-6
                        w-6

                        shrink-0

                        items-center
                        justify-center

                        text-[#ef3b32]

                        sm:h-7
                        sm:w-7
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={2.2}
                        className="
                          sm:h-[22px]
                          sm:w-[22px]

                          lg:h-[clamp(18px,1.4vw,24px)]
                          lg:w-[clamp(18px,1.4vw,24px)]
                        "
                      />
                    </div>

                    {/* TEXT */}

                    <span
                      className="
                        min-w-0

                        text-[10px]

                        font-medium
                        leading-5

                        text-white/90

                        min-[375px]:text-[11px]

                        sm:text-[11px]

                        md:text-[12px]

                        lg:text-[clamp(10px,0.75vw,13px)]

                        lg:leading-[1.5]
                      "
                    >
                      {feature.text}
                    </span>
                  </div>
                );
              }
            )}
          </div>

          {/* ==================================================
              DISCOVER PRODUCTS
          ================================================== */}

          <div
            className="
              mt-8

              w-fit

              lg:mt-auto
            "
          >
            <button
              ref={buttonRef}
              type="button"
              onMouseEnter={openPopup}
              onMouseLeave={closePopup}
              onClick={openPopup}
              className="
                group/discover

                relative

                flex
                w-fit

                items-center

                gap-3

                pb-3
                pt-3

                text-[9px]

                font-bold
                uppercase

                tracking-[0.18em]

                text-white

                min-[375px]:text-[10px]

                sm:gap-4

                md:text-[11px]

                lg:gap-[clamp(10px,1vw,16px)]

                lg:text-[clamp(10px,0.75vw,13px)]
              "
            >
              <span className="whitespace-nowrap">
                Discover Products
              </span>

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="
                  shrink-0

                  transition-transform
                  duration-300

                  group-hover/discover:translate-x-1

                  lg:h-[clamp(17px,1.4vw,22px)]
                  lg:w-[clamp(17px,1.4vw,22px)]
                "
              />

              {/* RED LINE */}

              <span
                className="
                  absolute

                  bottom-0
                  left-0

                  h-[3px]

                  w-full

                  bg-[#ef3b32]
                "
              />

              {/* GREY LINE */}

              <span
                className="
                  absolute

                  -bottom-[1px]
                  left-0

                  h-[1px]

                  w-[125%]

                  bg-white/40
                "
              />
            </button>
          </div>
        </div>
      </article>

      {/* ====================================================
          PRODUCT POPUP

          IMPORTANT:
          Popup is NOT inside the card.
          It is rendered into document.body.
      ==================================================== */}

      {showPopup && buttonRect && (
        <ProductPopup
          business={business}
          buttonRect={buttonRect}
          onMouseEnter={keepPopupOpen}
          onMouseLeave={closePopup}
          onClose={() => {
            setShowPopup(false);
            onPopupClose();
          }}
        />
      )}
    </div>
  );
}

// ============================================================
// BUSINESSES SECTION
// ============================================================

export default function Businesses() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section
      id="businesses"
      className="
        relative

        overflow-visible

        bg-[#f4f7f9]

        px-4
        py-16

        min-[375px]:px-5

        sm:px-7
        sm:py-20

        md:px-8
        md:py-24

        lg:px-[clamp(32px,4vw,70px)]

        lg:py-[clamp(80px,7vw,120px)]

        xl:px-[clamp(50px,5vw,100px)]
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          overflow-hidden
        "
      >
        {/* TOP BORDER */}

        <div
          className="
            absolute

            left-0
            top-0

            h-px
            w-full

            bg-[#d7dee5]
          "
        />

        {/* DIAGONAL LINE 1 */}

        <div
          className="
            absolute

            -left-20
            top-[-20%]

            hidden

            h-[150%]
            w-px

            rotate-[28deg]

            bg-[#dbe2e8]

            md:block
          "
        />

        {/* DIAGONAL LINE 2 */}

        <div
          className="
            absolute

            left-[28%]
            top-[-20%]

            hidden

            h-[150%]
            w-px

            rotate-[28deg]

            bg-[#e0e6eb]

            md:block
          "
        />

        {/* DIAGONAL LINE 3 */}

        <div
          className="
            absolute

            right-[20%]
            top-[-20%]

            hidden

            h-[150%]
            w-px

            rotate-[28deg]

            bg-[#e0e6eb]

            md:block
          "
        />

        {/* DIAGONAL LINE 4 */}

        <div
          className="
            absolute

            right-[-5%]
            top-[-20%]

            hidden

            h-[150%]
            w-px

            rotate-[28deg]

            bg-[#dbe2e8]

            md:block
          "
        />

        {/* CENTER GLOW */}

        <div
          className="
            absolute

            left-1/2
            top-1/2

            h-[350px]
            w-[350px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-white/70

            blur-3xl

            sm:h-[450px]
            sm:w-[450px]

            lg:h-[clamp(450px,40vw,700px)]
            lg:w-[clamp(450px,40vw,700px)]
          "
        />
      </div>

      {/* ==================================================
          SECTION HEADER
      ================================================== */}

      <div
        className="
          relative

          z-10

          mx-auto

          mb-10

          max-w-[1200px]

          px-1

          text-center

          sm:mb-12

          md:mb-14

          lg:mb-[clamp(48px,4vw,72px)]
        "
      >
        {/* LABEL */}

        <div
          className="
            mb-4

            flex
            items-center
            justify-center

            gap-3

            sm:mb-5
          "
        >
          <span
            className="
              text-[9px]

              font-bold
              uppercase

              tracking-[0.24em]

              text-[#526276]

              sm:text-[10px]

              md:text-[11px]
            "
          >
            Our Businesses
          </span>

          <span
            className="
              h-[2px]

              w-7

              bg-[#ef3b32]

              sm:w-8
            "
          />
        </div>

        {/* HEADING */}

        <h2
          className="
            text-[28px]

            font-black
            uppercase

            leading-[1]

            tracking-[-0.04em]

            text-[#071827]

            min-[375px]:text-[30px]

            sm:text-[38px]

            md:text-[44px]

            lg:text-[clamp(42px,3.5vw,58px)]
          "
        >
          Four Specialized Businesses
          <span className="text-[#ef3b32]">
            .
          </span>
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            mx-auto

            mt-4

            max-w-[650px]

            text-[11px]

            leading-5

            text-[#526276]

            min-[375px]:text-[12px]

            sm:mt-5
            sm:text-[13px]

            md:text-[14px]
            md:leading-6

            lg:mt-[clamp(18px,1.5vw,26px)]

            lg:text-[clamp(13px,0.9vw,16px)]
          "
        >
          Different strengths. A shared vision. Building
          a stronger, connected industry.
        </p>
      </div>

      {/* ==================================================
          BUSINESS GRID
      ================================================== */}

      <div
        className="
          relative

          z-20

          mx-auto

          grid

          w-full

          max-w-[1530px]

          grid-cols-1

          gap-5

          sm:gap-6

          md:grid-cols-1

          md:gap-7

          lg:grid-cols-2

          lg:gap-[clamp(20px,2vw,34px)]

          xl:gap-[clamp(24px,2.2vw,40px)]
        "
      >
        {businesses.map((business, index) => (
          <div
            key={`${business.name}-${index}`}
            className={`
              transition-all
              duration-500
              ease-out
              ${
                popupOpen
                  ? "blur-[6px] opacity-40 scale-[0.98]"
                  : "blur-0 opacity-100 scale-100"
              }
            `}
          >
            <BusinessCard
              business={business}
              onPopupOpen={() => setPopupOpen(true)}
              onPopupClose={() => setPopupOpen(false)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}