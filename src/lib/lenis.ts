import Lenis from "lenis";

type LenisInstance = InstanceType<typeof Lenis>;

let lenis: LenisInstance | null = null;

export function createLenis() {
  lenis ??= new Lenis({
    duration: 0.85,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.5,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  });

  return lenis;
}

export function getLenis() {
  return lenis;
}

export function destroyLenis() {
  lenis?.destroy();
  lenis = null;
}
