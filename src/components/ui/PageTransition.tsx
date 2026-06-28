import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { registerTransition } from "../../lib/transition";
import { lenis } from "../../lib/lenis";

function PageTransition() {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    registerTransition((id: string) => {
      console.log("TRANSITION");
      setClosing(true);

      setTimeout(() => {
        const section = document.getElementById(id);

        if (!section) return;

        lenis.stop();

        window.scrollTo(0, section.offsetTop - 80);

        lenis.resize();
        lenis.start();

        setTimeout(() => {
          setClosing(false);
        }, 250);
      }, 300);
    });
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
          y: closing ? 0 : "-100%",
        }}
        transition={{
          duration: 0.3,
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
          y: closing ? 0 : "100%",
        }}
        transition={{
          duration: 0.3,
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
