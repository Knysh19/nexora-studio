import Lenis from "lenis";

export const lenis = new Lenis({
  duration: 0.9,

  smoothWheel: true,

  wheelMultiplier: 0.9,

  touchMultiplier: 1.5,

  easing: (t: number) => 1 - Math.pow(1 - t, 3),
});
