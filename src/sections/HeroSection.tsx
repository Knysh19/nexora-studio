import { motion } from "framer-motion";
import Reveal from "../components/ui/Reveal";

import Button from "../components/ui/Button";
import { ChevronDown } from "lucide-react";
import useMediaQuery from "../hooks/useMediaQuery";

function HeroSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      className="
        relative
        flex
        min-h-[100svh]
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        px-5
        py-28
        text-center

        sm:px-6
        lg:min-h-screen
        lg:py-0
      "
    >
      {/* AMBIENT GRADIENT LIGHT */}
      <motion.div
        animate={
          isDesktop
            ? {
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
              }
            : {
                opacity: 0.22,
              }
        }
        transition={{
          duration: isDesktop ? 8 : 0.8,
          repeat: isDesktop ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          opacity-25

          lg:opacity-40
        "
        style={{
          background: `
            radial-gradient(
              circle at top,
              rgba(214, 180, 94, 0.12),
              transparent 45%
            )
          `,
        }}
      />

      {/* DARK OVERLAY */}
      {/* NOISE TEXTURE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-35
          mix-blend-soft-light

          lg:opacity-50
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[38rem] lg:max-w-none">
        {/* SMALL LABEL */}
        <Reveal>
          <p
            className="
              mb-6
              text-xs
              uppercase
              tracking-[0.32em]
              text-amber-200/70

              lg:tracking-[0.4em]
            "
          >
            Luxury Architecture Studio
          </p>
        </Reveal>

        {/* MAIN TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[22rem]

            font-['Cormorant_Garamond']

            text-[52px]
            font-medium

            leading-[0.92]
            tracking-normal

            text-[#f5efe7]

            sm:max-w-[32rem]
            sm:text-[56px]
            lg:max-w-5xl
            lg:text-[120px]
            lg:leading-[0.9]
            lg:tracking-[-0.03em]
          "
        >
          Crafted
          <span className="text-amber-200"> To Be </span>
          Remembered
        </motion.h1>

        {/* DESCRIPTION */}
        <Reveal>
          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-relaxed
              text-[#9f9689]

              lg:mt-10
              lg:text-lg
            "
          >
            We craft timeless architectural spaces through cinematic minimalism,
            luxury aesthetics, and refined spatial storytelling.
          </p>
        </Reveal>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-10
            flex
            w-full
            max-w-sm
            flex-col
            items-center

            lg:mt-14
            lg:max-w-none
          "
        >
          <Button
            text="Discover Nexora"
            variant="primary"
            onClick={() => {
              document.getElementById("services")?.scrollIntoView();
            }}
          />
          <div
            className="
             mt-8
              flex
              flex-col
              items-center
              gap-2

              text-[10px]
              uppercase
              tracking-[0.4em]
              text-[#7a7368]

              lg:mt-10
            "
          >
            <span>Scroll To Explore</span>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
