import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ProcessCard from "../components/ui/ProcessCard";
import Reveal from "../components/ui/Reveal";
import useMediaQuery from "../hooks/useMediaQuery";
import villaImage from "../assets/images/villa-projectResized.webp";

const DESKTOP_PROCESS_STEPS = [
  {
    step: "STEP 01",
    title: "Concept & Spatial Vision",
    description:
      "We shape emotionally driven architectural experiences through refined composition and timeless spatial design.",
  },
  {
    step: "STEP 02",
    title: "Luxury Material Direction",
    description:
      "Premium textures, warm lighting, and cinematic material balance crafted for emotional impact.",
  },
  {
    step: "STEP 03",
    title: "Atmosphere & Emotional Design",
    description:
      "Every visual layer is designed to create calm, prestige, and immersive luxury presence.",
  },
] as const;

const MOBILE_PROCESS_STEPS = [
  ...DESKTOP_PROCESS_STEPS,
  {
    step: "STEP 04",
    title: "Delivery & Refinement",
    description:
      "A polished final experience shaped through precise details, calm hierarchy, and lasting presence.",
  },
] as const;

function MobileProcessSection() {
  return (
    <section
      id="process"
      className="
        bg-black
        px-5
        py-20
        text-white

        sm:px-6
        sm:py-24
      "
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p
            className="
              mb-5
              text-xs
              uppercase
              tracking-[0.35em]
              text-amber-200/70
            "
          >
            Our Process
          </p>

          <h2
            className="
              font-['Cormorant_Garamond']
              text-4xl
              font-light
              leading-[0.98]
              text-[#f5efe7]
              sm:text-5xl
            "
          >
            Architecture crafted through precision, atmosphere, and timeless
            spatial design.
          </h2>
        </Reveal>

        <div className="relative mt-14 space-y-8">
          <div
            className="
              absolute
              bottom-0
              left-6
              top-0
              w-px
              bg-gradient-to-b
              from-[#d6a85a]
              via-[#d6a85a]/35
              to-transparent
            "
          />

          {MOBILE_PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <div className="relative grid grid-cols-[3rem_1fr] gap-5">
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d6a85a]/50
                    bg-black
                    text-xs
                    tracking-[0.2em]
                    text-[#d6a85a]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div
                  className="
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.035]
                    p-6
                  "
                >
                  <p
                    className="
                      mb-4
                      text-xs
                      uppercase
                      tracking-[0.28em]
                      text-[#d6a066]
                    "
                  >
                    {step.step}
                  </p>

                  <h3
                    className="
                      font-['Cormorant_Garamond']
                      text-3xl
                      leading-tight
                      text-[#f5efe7]
                    "
                  >
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-white/65">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScaleX = useTransform(scrollYProgress, [0, 0.22], [0.38, 1]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="
        relative
        h-[400vh]
        bg-black
      "
    >
      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
          bg-black
        "
      >
        <motion.div
          style={{
            scaleX: imageScaleX,
            transformOrigin: "left center",
          }}
          className="
            absolute
            left-0
            top-0
            h-screen
            w-full
            overflow-hidden
            will-change-transform
          "
        >
          <img
            src={villaImage}
            alt="Luxury Villa"
            loading="lazy"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/30
            "
          />
        </motion.div>

        <div
          className="
            relative
            z-20
            flex
            h-full
            items-center
            px-20
          "
        >
          <div className="max-w-xl">
            <p
              className="
                mb-6
                text-sm
                uppercase
                tracking-[0.3em]
                text-amber-200/70
              "
            >
              Our Process
            </p>

            <h2
              className="
                font-['Cormorant_Garamond']
                text-5xl
                font-light
                leading-tight
                text-[#f5efe7]
              "
            >
              Architecture crafted through precision, atmosphere, and timeless
              spatial design.
            </h2>
          </div>
        </div>

        <div
          className="
            absolute
            right-[12%]
            top-1/2
            z-30
            h-screen
            w-[460px]
            -translate-y-1/2
          "
        >
          {DESKTOP_PROCESS_STEPS.map((step, index) => (
            <ProcessCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return isDesktop ? <DesktopProcessSection /> : <MobileProcessSection />;
}

export default ProcessSection;
