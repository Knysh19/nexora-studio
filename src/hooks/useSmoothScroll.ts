import { useEffect } from "react";
import { lenis } from "../lib/lenis";

function useSmoothScroll() {
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let rafId: number | null = null;

    const raf = (time: number) => {
      lenis.raf(time);

      rafId = requestAnimationFrame(raf);
    };

    const updateSmoothScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      if (desktopQuery.matches) {
        lenis.start();
        rafId = requestAnimationFrame(raf);
        return;
      }

      lenis.stop();
    };

    updateSmoothScroll();
    desktopQuery.addEventListener("change", updateSmoothScroll);

    return () => {
      desktopQuery.removeEventListener("change", updateSmoothScroll);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
}

export default useSmoothScroll;
