import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

import villaImage from "../assets/images/villa-project.jpg";

function ProcessSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
    IMAGE EXPANSION
    (поки НЕ рухається)
  */

  const imageWidth = useTransform(
    scrollYProgress,
    [0, 0.22],
    ["38vw", "100vw"],
  );

  const panelScale = useTransform(scrollYProgress, [0, 0.22], [1, 1.08]);

  const panelX = useTransform(scrollYProgress, [0, 0.22], [0, -120]);

  const panelBlur = useTransform(scrollYProgress, [0, 0.22], [0, 8]);

  return (
    <section
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
        {/* IMAGE */}
        <motion.div
          style={{
            width: imageWidth,
          }}
          className="
            absolute
            left-0
            top-0

            h-screen
            overflow-hidden
          "
        >
          <img
            src={villaImage}
            alt="Luxury Villa"
            className="
              h-full
              w-full
              object-cover
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/30
            "
          />
        </motion.div>

        {/* LEFT CONTENT */}
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

        {/* RIGHT PANEL */}
        <motion.div
          style={{
            scale: panelScale,
            x: panelX,
            backdropFilter: `blur(${panelBlur}px)`,
          }}
          className="
            absolute
            right-[12%]
            top-1/2
            z-30

            w-[420px]
            -translate-y-1/2

            border
            border-white/10

            bg-black/40
            backdrop-blur-md

            p-10
          "
        >
          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.2em]
              text-amber-200
            "
          >
            Step 01
          </p>

          <h3
            className="
              mb-6
              text-4xl
              leading-tight
              text-white
            "
          >
            Concept & Spatial Vision
          </h3>

          <p
            className="
              leading-relaxed
              text-white/60
            "
          >
            We shape emotionally driven architectural experiences through
            cinematic composition, material balance, and refined minimalism.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessSection;
