import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import backgroundPattern from "../assets/images/back.jpg";

export default function DesignProcessSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const impactSteps = [
    {
      value: "25+",
      title: "Projects Delivered",
      description:
        "A portfolio of carefully crafted residential and hospitality spaces.",
      backgroundWord: "IMPACT",
    },

    {
      value: "180k+",
      title: "Square Feet Designed",
      description:
        "From intimate residences to large-scale architectural environments.",
      backgroundWord: "SCALE",
    },

    {
      value: "12",
      title: "Countries Reached",
      description: "Projects and collaborations across international markets.",
      backgroundWord: "GLOBAL",
    },

    {
      value: "98%",
      title: "Client Satisfaction",
      description: "Built through trust, precision and long-term partnerships.",
      backgroundWord: "TRUST",
    },
  ];

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="
        bg-gradient-to-b
        from-[#0b0b0b]
        via-[#0f0f0f]
        to-[#0b0b0b]

        text-white
      "
    >
      {/* INTRO */}
      <div
        className="
          px-6
          py-40

          md:px-12
        "
      >
        <div className="max-w-5xl">
          <p
            className="
             mb-6
              text-sm
             uppercase
             tracking-[0.35em]
              text-amber-200/70
            "
          >
            Our Impact
          </p>

          <h2
            className="
             font-['Cormorant_Garamond']
              text-5xl
             font-light
             leading-[0.92]
             md:text-8xl
           "
          >
            Measured by
            <br />
            spaces that endure.
          </h2>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="relative h-[350vh]">
        <div
          className="
            sticky
            top-0

            flex
            h-screen
            flex-col

            overflow-hidden
          "
        >
          <motion.img
            style={{
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.08]),
            }}
            src={backgroundPattern}
            alt=""
            className="
              absolute
              inset-0

              h-full
              w-full

              object-cover

              opacity-[0.18]
           "
          />
          <div
            className="
              absolute
              inset-0

              bg-black/50
            "
          />
          {/* TOP TIMELINE */}
          <div
            className="
              px-6
              pt-24

              md:px-12
            "
          >
            <div className="relative">
              {/* BASE LINE */}
              <div
                className="
                  absolute
                  top-1/2

                  h-px
                  w-full

                  -translate-y-1/2

                  bg-white/10
                "
              />

              {/* GOLD LINE */}
              <motion.div
                style={{
                  width: progressWidth,
                }}
                className="
                  absolute
                  top-1/2

                  h-px

                  -translate-y-1/2

                  bg-[#d6a85a]
                "
              />

              <div
                className="
                  relative

                  flex
                  justify-between
                "
              >
                {impactSteps.map((step, index) => {
                  const start = index / impactSteps.length;
                  const end = (index + 1) / impactSteps.length;

                  const opacity = useTransform(
                    scrollYProgress,
                    [start, start + 0.08, end - 0.08, end],
                    [0, 1, 1, 0],
                  );

                  const color = useTransform(
                    scrollYProgress,
                    [start, start + 0.08],
                    ["rgba(255,255,255,0.35)", "#d6a85a"],
                  );

                  return (
                    <motion.div
                      key={step.title}
                      style={{
                        opacity,
                        color,
                      }}
                      className="
                        relative

                        bg-[#0b0b0b]

                        px-4

                        text-xs
                        uppercase
                        tracking-[0.25em]

                        md:text-sm
                      "
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div
                          className="
                           h-3
                           w-3
                           rounded-full
                           bg-current
                          "
                        />

                        <span>{step.backgroundWord}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* CONTENT */}
          <div
            className="
              relative

              flex-1
            "
          >
            {impactSteps.map((step, index) => {
              const start = index / impactSteps.length;
              const end = (index + 1) / impactSteps.length;

              const isLastStep = index === impactSteps.length - 1;

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.08, end - 0.08, end],
                [0, 1, 1, 0],
              );

              const y = useTransform(scrollYProgress, [start, end], [80, -80]);
              return (
                <motion.div
                  key={step.title}
                  style={{
                    opacity,
                    y,
                  }}
                  className="
                    absolute
                    inset-0

                    flex
                    items-center

                    px-6

                    md:px-12
                  "
                >
                  <>
                    {/* BACKGROUND WORD */}
                    <div
                      className="
                        absolute
                        inset-0

                        flex
                        items-center
                        justify-center

                        justify-end
                        pr-[8vw]

                        pointer-events-none
                     "
                    >
                      <span
                        className="
                          text-[18vw]
                          font-light
                          tracking-[-0.05em]

                         text-[#b88c3a]/[0.5]
                       "
                      >
                        {step.backgroundWord}
                      </span>
                    </div>

                    <div
                      className="
                         relative
                         z-10

                          grid
                          items-center
                          gap-16

                         md:grid-cols-2
                         md:gap-24
                       "
                    >
                      {/* LEFT */}
                      <div>
                        <p
                          className="
                           mb-4

                           text-sm
                           uppercase
                           tracking-[0.35em]

                            text-[#b88c3a]
                          "
                        >
                          Impact
                        </p>

                        <h3
                          className="
                           font-['Cormorant_Garamond']

                            text-7xl
                            font-light
                            leading-none

                            md:text-[11rem]
                          "
                        >
                          {step.value}
                        </h3>

                        <h4
                          className="
                           mt-4

                           text-2xl
                           font-light

                            md:text-5xl
                         "
                        >
                          {step.title}
                        </h4>
                      </div>

                      {/* RIGHT */}
                      <div>
                        <p
                          className="
                          max-w-xl

                          text-lg
                          leading-relaxed

                          text-neutral-300

                          md:text-xl
                        "
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="
    absolute
    bottom-20
    left-1/2

    -translate-x-1/2

    flex
    flex-col
    items-center

    text-center
    z-50
  "
            >
              <p
                className="
      mb-6

      text-sm
      uppercase
      tracking-[0.3em]

      text-white/50
    "
              >
                Ready to begin?
              </p>

              <button
                className="
      rounded-full

      border
      border-[#d6a85a]

      px-10
      py-4

      text-sm
      uppercase
      tracking-[0.25em]

      text-[#d6a85a]

      transition-all
      duration-500

      hover:bg-[#d6a85a]/10
      hover:shadow-[0_0_40px_rgba(214,168,90,0.25)]
    "
              >
                Start Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
