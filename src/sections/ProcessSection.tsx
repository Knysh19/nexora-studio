import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ProcessCard from "../components/ui/ProcessCard";
import villaImage from "../assets/images/villa-project.jpg";

const PROCESS_STEPS = [
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

function ProcessSection() {
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
          {PROCESS_STEPS.map((step, index) => (
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

export default ProcessSection;
