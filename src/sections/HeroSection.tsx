import { motion } from "framer-motion";
import Reveal from "../components/ui/Reveal";

import Button from "../components/ui/Button";
import { ChevronDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        px-6
        text-center
      "
    >
      {/* AMBIENT GRADIENT LIGHT */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          opacity-40
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
          opacity-50
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* SMALL LABEL */}
        <Reveal>
          <p
            className="
              mb-6
              text-xs
              uppercase
              tracking-[0.4em]
              text-amber-200/70
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
            max-w-5xl

            font-['Cormorant_Garamond']

            text-7xl
            font-medium

            leading-[0.9]
            tracking-[-0.03em]

            text-[#f5efe7]

            md:text-[120px]
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
              mt-10
              max-w-2xl
              text-lg
              leading-relaxed
              text-[#9f9689]
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
            mt-14
            flex
            flex-col
            items-center
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
             mt-10
              flex
              flex-col
              items-center
              gap-2

              text-[10px]
              uppercase
              tracking-[0.4em]
              text-[#7a7368]
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
