import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Download,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-28">
      
      {/* Decorative Background */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ef3b32]/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#071827]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Small Label */}
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#ef3b32]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ef3b32]">
                Contact
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#071827] sm:text-6xl md:text-7xl">
              Let's Build
              <br />

              <span className="text-[#ef3b32]">
                Together
              </span>
              <span className="text-[#071827]">.</span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-sm leading-7 text-slate-500 sm:text-[15px]">
              Whether you are a founder exploring a permanent home for your
              business, a partner looking to collaborate across industrial and
              consumer markets, or an organization interested in working with
              FNT Group, our corporate development office is ready to discuss
              the next move.
            </p>

            {/* Contact Information */}
            <div className="mt-10 space-y-4">

              {/* Email */}
              <div className="group flex items-center gap-5 border-b border-slate-200 pb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 transition duration-300 group-hover:border-[#ef3b32] group-hover:bg-[#ef3b32]">
                  <Mail
                    size={17}
                    strokeWidth={1.8}
                    className="text-[#ef3b32] transition group-hover:text-white"
                  />
                </div>

                <div>
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Email
                  </p>

                  <p className="text-sm font-medium text-[#071827]">
                    corporate@fntgroup.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-5 border-b border-slate-200 pb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 transition duration-300 group-hover:border-[#ef3b32] group-hover:bg-[#ef3b32]">
                  <Phone
                    size={17}
                    strokeWidth={1.8}
                    className="text-[#ef3b32] transition group-hover:text-white"
                  />
                </div>

                <div>
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Phone
                  </p>

                  <p className="text-sm font-medium text-[#071827]">
                    +82 2 555 0198
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-center gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 transition duration-300 group-hover:border-[#ef3b32] group-hover:bg-[#ef3b32]">
                  <MapPin
                    size={17}
                    strokeWidth={1.8}
                    className="text-[#ef3b32] transition group-hover:text-white"
                  />
                </div>

                <div>
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Office
                  </p>

                  <p className="text-sm font-medium text-[#071827]">
                    FNT Group, India
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* ================= RIGHT FORM ================= */}
          <div className="relative">

            {/* Red accent */}
            <div className="absolute -left-2 -top-2 h-12 w-12 border-l-2 border-t-2 border-[#ef3b32]" />

            <div className="relative border border-slate-200 bg-[#f8f9fa] p-6 shadow-[0_20px_60px_rgba(7,24,39,0.08)] sm:p-8 md:p-10">

              {/* Form Header */}
              <div className="mb-8">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#ef3b32]">
                  Send a Message
                </p>

                <h3 className="text-3xl font-black uppercase tracking-[-0.03em] text-[#071827] sm:text-4xl">
                  Start a Conversation
                </h3>

                <div className="mt-4 h-[2px] w-12 bg-[#ef3b32]" />
              </div>


              <form className="space-y-6">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#071827]">
                      Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your full name"
                      className="h-12 w-full border border-slate-200 bg-white px-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#ef3b32] focus:ring-1 focus:ring-[#ef3b32]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#071827]">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="h-12 w-full border border-slate-200 bg-white px-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#ef3b32] focus:ring-1 focus:ring-[#ef3b32]/20"
                    />
                  </div>

                </div>


                {/* Company */}
                <div>
                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#071827]">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company or organization"
                    className="h-12 w-full border border-slate-200 bg-white px-4 text-sm text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#ef3b32] focus:ring-1 focus:ring-[#ef3b32]/20"
                  />
                </div>


                {/* Message */}
                <div>
                  <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#071827]">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell us about your business, your goals, or the opportunity you want to discuss."
                    className="w-full resize-none border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-[#071827] outline-none transition placeholder:text-slate-400 focus:border-[#ef3b32] focus:ring-1 focus:ring-[#ef3b32]/20"
                  />
                </div>


                {/* Buttons */}
                <div className="flex flex-col gap-3 pt-1 sm:flex-row">

                  <button
                    type="submit"
                    className="group flex h-12 items-center justify-center gap-3 bg-[#ef3b32] px-7 text-[10px] font-bold uppercase tracking-wide text-white transition duration-300 hover:bg-[#071827]"
                  >
                    Send Message

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}