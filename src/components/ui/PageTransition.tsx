import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { registerTransition } from "../../lib/transition";
import { getLenis } from "../../lib/lenis";

const TRANSITION_DURATION_MS = 300;
const REVEAL_DELAY_MS = 120;
const NAVBAR_OFFSET = 80;

function scrollToSection(section: HTMLElement) {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  if (!isDesktop) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - NAVBAR_OFFSET,
      behavior: "smooth",
    });

    return;
  }

  const lenis = getLenis();

  if (!lenis) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - NAVBAR_OFFSET,
      behavior: "smooth",
    });

    return;
  }

  lenis.stop();
  lenis.scrollTo(section, {
    offset: -NAVBAR_OFFSET,
    immediate: true,
    force: true,
  });
  lenis.resize();
  lenis.raf(performance.now());
  lenis.start();
}

function PageTransition() {
  const [isCovered, setIsCovered] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const openTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    registerTransition((id: string) => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }

      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
      }

      setIsCovered(true);

      closeTimeoutRef.current = window.setTimeout(() => {
        const section = document.getElementById(id);

        if (!section) {
          setIsCovered(false);
          return;
        }

        scrollToSection(section);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            openTimeoutRef.current = window.setTimeout(() => {
              setIsCovered(false);
            }, REVEAL_DELAY_MS);
          });
        });
      }, TRANSITION_DURATION_MS);
    });

    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }

      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[9999]
      "
    >
      <motion.div
        animate={{
          y: isCovered ? 0 : "-100%",
        }}
        transition={{
          duration: TRANSITION_DURATION_MS / 1000,
        }}
        className="
          absolute
          top-0
          left-0
          h-1/2
          w-full
          bg-[#050505]
        "
      />

      <motion.div
        animate={{
          y: isCovered ? 0 : "100%",
        }}
        transition={{
          duration: TRANSITION_DURATION_MS / 1000,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-1/2
          w-full
          bg-[#050505]
        "
      />
    </div>
  );
}

export default PageTransition;
