import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#15171b] px-5 py-16 text-white sm:px-8 lg:px-12">

      {/* Subtle border */}
      <div className="absolute inset-0 border border-white/[0.03]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1100px] items-center">

        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="flex flex-col justify-center">

            {/* Label */}
            <div className="mb-5">
              <span className="border border-[#f47b20]/60 bg-[#f47b20]/10 px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-[#f47b20]">
                Contact
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[500px] text-[38px] font-black uppercase leading-[0.95] tracking-[-1px] sm:text-[48px] md:text-[52px]">

              <span className="text-white">
                Let's Build
              </span>

              <br />

              <span className="text-[#f47b20]">
                Together
              </span>

              <span className="text-white">
                .
              </span>

            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[475px] text-[10px] leading-[1.7] text-gray-400 sm:text-[11px]">
              Whether you are a founder exploring a permanent home for your
              business, a sovereign wealth fund evaluating high-yield operating
              assets, or a partner looking to collaborate across industrial and
              consumer markets, our corporate development office is ready to
              discuss the next move.
            </p>

            {/* Contact details */}
            <div className="mt-7 space-y-4">

              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="flex h-5 w-5 items-center justify-center text-[#f47b20]">
                  <Mail size={13} />
                </div>

                <a
                  href="mailto:corporate@fntgroup.com"
                  className="text-[9px] text-gray-400 transition hover:text-[#f47b20] sm:text-[10px]"
                >
                  corporate@fntgroup.com
                </a>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">

                <div className="flex h-5 w-5 items-center justify-center text-[#f47b20]">
                  <Phone size={13} />
                </div>

                <a
                  href="tel:+8225550198"
                  className="text-[9px] text-gray-400 transition hover:text-[#f47b20] sm:text-[10px]"
                >
                  +82 2 555 0198
                </a>

              </div>

              {/* Address */}
              <div className="flex items-center gap-4">

                <div className="flex h-5 w-5 items-center justify-center text-[#f47b20]">
                  <MapPin size={13} />
                </div>

                <span className="text-[9px] text-gray-400 sm:text-[10px]">
                  24 Teheran-ro 87-gil, Gangnam-gu, Seoul
                </span>

              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT FORM
          ====================================================== */}
          <div className="border border-white/[0.08] bg-[#090b0d] p-5 sm:p-6 md:p-7">

            {/* Form header */}
            <div className="mb-5">

              <p className="text-[7px] font-semibold uppercase tracking-[0.15em] text-[#f47b20]">
                Send a Message
              </p>

              <h3 className="mt-2 text-[22px] font-black uppercase leading-none tracking-[-0.5px] sm:text-[25px]">
                Start a Conversation
              </h3>

            </div>

            <form className="space-y-4">

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[6px] font-semibold uppercase tracking-[0.15em] text-gray-500"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="
                      h-9
                      w-full
                      border
                      border-white/[0.07]
                      bg-[#17191e]
                      px-3
                      text-[9px]
                      text-white
                      outline-none
                      placeholder:text-gray-600
                      focus:border-[#f47b20]/60
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[6px] font-semibold uppercase tracking-[0.15em] text-gray-500"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="
                      h-9
                      w-full
                      border
                      border-white/[0.07]
                      bg-[#17191e]
                      px-3
                      text-[9px]
                      text-white
                      outline-none
                      placeholder:text-gray-600
                      focus:border-[#f47b20]/60
                    "
                  />
                </div>

              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-[6px] font-semibold uppercase tracking-[0.15em] text-gray-500"
                >
                  Company
                </label>

                <input
                  id="company"
                  type="text"
                  placeholder="Company or organization"
                  className="
                    h-9
                    w-full
                    border
                    border-white/[0.07]
                    bg-[#17191e]
                    px-3
                    text-[9px]
                    text-white
                    outline-none
                    placeholder:text-gray-600
                    focus:border-[#f47b20]/60
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[6px] font-semibold uppercase tracking-[0.15em] text-gray-500"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about your business, your goals, or the opportunity you want to discuss."
                  className="
                    w-full
                    resize-none
                    border
                    border-white/[0.07]
                    bg-[#17191e]
                    px-3
                    py-3
                    text-[9px]
                    leading-5
                    text-white
                    outline-none
                    placeholder:text-gray-600
                    focus:border-[#f47b20]/60
                  "
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 pt-1 sm:flex-row">

                <button
                  type="submit"
                  className="
                    group
                    flex
                    h-9
                    items-center
                    justify-center
                    gap-2
                    bg-[#f47b20]
                    px-5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-black
                    transition
                    duration-300
                    hover:bg-[#ff8c32]
                  "
                >
                  Send Message

                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  className="
                    flex
                    h-9
                    items-center
                    justify-center
                    border
                    border-white/[0.12]
                    bg-[#15171b]
                    px-5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-white
                    transition
                    duration-300
                    hover:border-[#f47b20]/50
                    hover:bg-white/[0.03]
                  "
                >
                  Download Acquisition Brief
                </button>

              </div>

            </form>
          </div>

        </div>

      </div>

    </section>
  );
}