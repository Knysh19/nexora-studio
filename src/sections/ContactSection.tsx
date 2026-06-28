import Reveal from "../components/ui/Reveal";
import { useState } from "react";
import SuccessModal from "../components/ui/SuccessModal";

function ContactSection() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-6
        py-40
      "
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.35em]
                text-amber-200/70
              "
            >
              Contact
            </p>

            <h2
              className="
                font-['Cormorant_Garamond']
                text-6xl
                leading-[0.95]
                text-[#f5efe7]
              "
            >
              Let's create something timeless together.
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-[#8f877c]
              "
            >
              Whether you're designing a private residence, a luxury interior,
              or a commercial experience, we'd love to hear your vision.
            </p>
          </div>
        </Reveal>

        <div
          className="
            mt-24
            grid
            gap-20

            lg:grid-cols-2
          "
        >
          {/* LEFT */}

          <Reveal delay={0.15}>
            <div className="space-y-12">
              <div>
                <p
                  className="
                    mb-2
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-amber-200/60
                  "
                >
                  Email
                </p>

                <p className="text-2xl text-[#f5efe7]">hello@nexora.studio</p>
              </div>

              <div>
                <p
                  className="
                    mb-2
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-amber-200/60
                  "
                >
                  Phone
                </p>

                <p className="text-2xl text-[#f5efe7]">+44 20 1234 5678</p>
              </div>

              <div>
                <p
                  className="
                    mb-2
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-amber-200/60
                  "
                >
                  Location
                </p>

                <p className="text-2xl text-[#f5efe7]">
                  London, United Kingdom
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}

          <Reveal delay={0.3}>
            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();

                setIsSuccessOpen(true);

                e.currentTarget.reset();
              }}
            >
              <input
                type="text"
                placeholder="Name"
                className="
                  w-full
                  border-b
                  border-white/10
                  bg-transparent
                  pb-4

                  text-white
                  outline-none

                  transition-colors
                  duration-300

                  placeholder:text-[#6f6f6f]

                  focus:border-amber-200
                "
              />

              <input
                type="email"
                placeholder="Email"
                className="
                  w-full
                  border-b
                  border-white/10
                  bg-transparent
                  pb-4

                  text-white
                  outline-none

                  transition-colors
                  duration-300

                  placeholder:text-[#6f6f6f]

                  focus:border-amber-200
                "
              />

              <textarea
                rows={5}
                placeholder="Tell us about your vision..."
                className="
                  w-full
                  resize-none
                  border-b
                  border-white/10
                  bg-transparent
                  pb-4

                  text-white
                  outline-none

                  transition-colors
                  duration-300

                  placeholder:text-[#6f6f6f]

                  focus:border-amber-200
                "
              />

              <button
                type="submit"
                className="
                  rounded-full
                  border
                  border-[#8a6b2f]

                  px-10
                  py-4

                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-amber-100

                  transition-all
                  duration-500

                  hover:border-amber-100
                  hover:bg-amber-100
                  hover:text-black
                "
              >
                Start Conversation
              </button>
            </form>
          </Reveal>
        </div>
      </div>
      <SuccessModal
        open={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />
    </section>
  );
}

export default ContactSection;
