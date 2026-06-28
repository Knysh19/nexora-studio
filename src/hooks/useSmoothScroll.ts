import { useEffect } from "react";
import { lenis } from "../lib/lenis";

function useSmoothScroll() {
  useEffect(() => {
    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);

      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);
}

export default useSmoothScroll;
