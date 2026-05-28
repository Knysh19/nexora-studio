import Lenis from "lenis";

import { useEffect } from "react";

function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,

      smoothWheel: true,

      wheelMultiplier: 0.9,

      touchMultiplier: 1.5,

      easing: (t) => {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
    });

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}

export default useSmoothScroll;
