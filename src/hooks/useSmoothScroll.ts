import { useEffect } from "react";
import { createLenis, destroyLenis } from "../lib/lenis";

function useSmoothScroll() {
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let rafId: number | null = null;

    const raf = (time: number) => {
      const lenis = createLenis();

      lenis.raf(time);

      rafId = requestAnimationFrame(raf);
    };

    const startDesktopScroll = () => {
      if (rafId) {
        return;
      }

      createLenis().start();
      rafId = requestAnimationFrame(raf);
    };

    const stopDesktopScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      destroyLenis();
    };

    const syncScrollMode = () => {
      if (desktopQuery.matches) {
        startDesktopScroll();
        return;
      }

      stopDesktopScroll();
    };

    syncScrollMode();
    desktopQuery.addEventListener("change", syncScrollMode);

    return () => {
      desktopQuery.removeEventListener("change", syncScrollMode);
      stopDesktopScroll();
    };
  }, []);
}

export default useSmoothScroll;
