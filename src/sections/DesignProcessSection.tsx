import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

import Reveal from "../components/ui/Reveal";
import useMediaQuery from "../hooks/useMediaQuery";
import backgroundPattern from "../assets/images/back.jpg";

type ImpactStep = {
  value: string;
  title: string;
  description: string;
  backgroundWord: string;
};

const IMPACT_STEPS: ImpactStep[] = [
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

type ImpactStepProps = {
  index: number;
  scrollYProgress: MotionValue<number>;
  step: ImpactStep;
};

function TimelineMarker({ index, scrollYProgress, step }: ImpactStepProps) {
  const start = index / IMPACT_STEPS.length;
  const end = (index + 1) / IMPACT_STEPS.length;

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
}

function ImpactPanel({ index, scrollYProgress, step }: ImpactStepProps) {
  const start = index / IMPACT_STEPS.length;
  const end = (index + 1) / IMPACT_STEPS.length;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(scrollYProgress, [start, end], [80, -80]);

  return (
    <motion.div
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
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-end
            pr-[8vw]
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
            items-start
            gap-16
            md:grid-cols-2
            md:gap-24
          "
        >
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

          <div
            className="
              md:flex
              md:min-h-[32rem]
              md:items-end
              md:justify-end
            "
          >
            <p
              className="
                max-w-xl
                text-lg
                leading-relaxed
                text-neutral-300
                md:pb-8
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
}

function MobileDesignProcessSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#0b0b0b]
        via-[#0f0f0f]
        to-[#0b0b0b]
        px-5
        py-20
        text-white

        sm:px-6
        sm:py-24
      "
    >
      <img
        src={backgroundPattern}
        alt=""
        loading="lazy"
        decoding="async"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-[0.08]
        "
      />

      <div className="relative z-10 mx-auto max-w-3xl">
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
            Our Impact
          </p>

          <h2
            className="
              font-['Cormorant_Garamond']
              text-4xl
              font-light
              leading-[0.95]
              text-[#f5efe7]
              sm:text-5xl
            "
          >
            Measured by spaces that endure.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="
              absolute
              bottom-0
              left-4
              top-0
              w-px
              bg-gradient-to-b
              from-[#d6a85a]
              via-[#d6a85a]/35
              to-transparent
            "
          />

          <div className="space-y-8">
            {IMPACT_STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="relative pl-12">
                  <div
                    className="
                      absolute
                      left-0
                      top-2
                      h-8
                      w-8
                      rounded-full
                      border
                      border-[#d6a85a]/60
                      bg-[#0b0b0b]
                    "
                  />

                  <div
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-black/25
                      p-6
                    "
                  >
                    <p
                      className="
                        mb-4
                        text-xs
                        uppercase
                        tracking-[0.28em]
                        text-[#b88c3a]
                      "
                    >
                      {step.backgroundWord}
                    </p>

                    <h3
                      className="
                        font-['Cormorant_Garamond']
                        text-6xl
                        font-light
                        leading-none
                        text-[#f5efe7]
                      "
                    >
                      {step.value}
                    </h3>

                    <h4 className="mt-4 text-2xl font-light text-white">
                      {step.title}
                    </h4>

                    <p className="mt-4 leading-relaxed text-white/60">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.18}>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView();
            }}
            className="
              mt-14
              w-full
              rounded-full
              border
              border-[#d6a85a]
              px-8
              py-4
              text-xs
              uppercase
              tracking-[0.22em]
              text-[#d6a85a]
              transition-all
              duration-300
              hover:bg-[#d6a85a]/10
            "
          >
            Start Your Project
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function DesktopDesignProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

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
              scale: backgroundScale,
            }}
            src={backgroundPattern}
            alt=""
            loading="lazy"
            decoding="async"
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

          <div
            className="
              px-6
              pt-24
              md:px-12
            "
          >
            <div className="relative">
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
                {IMPACT_STEPS.map((step, index) => (
                  <TimelineMarker
                    key={step.title}
                    step={step}
                    index={index}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className="
              relative
              flex-1
            "
          >
            {IMPACT_STEPS.map((step, index) => (
              <ImpactPanel
                key={step.title}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="
                absolute
                bottom-20
                left-1/2
                z-50
                flex
                -translate-x-1/2
                flex-col
                items-center
                text-center
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
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView();
                }}
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

export default function DesignProcessSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return isDesktop ? (
    <DesktopDesignProcessSection />
  ) : (
    <MobileDesignProcessSection />
  );
}
