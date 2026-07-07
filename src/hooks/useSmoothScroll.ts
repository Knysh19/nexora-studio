import { useEffect } from "react";
import { lenis } from "../lib/lenis";

function useSmoothScroll() {
  useEffect(() => {
    let rafId: number | null = null;

    const raf = (time: number) => {
      lenis.raf(time);

      rafId = requestAnimationFrame(raf);
    };

    lenis.start();
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
}

export default useSmoothScroll;
