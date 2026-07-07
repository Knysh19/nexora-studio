import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import Reveal from "../components/ui/Reveal";
import useMediaQuery from "../hooks/useMediaQuery";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image7 from "../assets/images/7.jpg";
import image6 from "../assets/images/6.jpg";
import imageK2 from "../assets/images/000.jpg";
import imageK3 from "../assets/images/k3.jpg";
import imageS1 from "../assets/images/s1.jpg";
import imageS2 from "../assets/images/888.jpg";
import imageS3 from "../assets/images/s4.jpg";

type Experience = {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

const EXPERIENCES: Experience[] = [
  {
    number: "01",
    category: "Private Residence",
    title: "Architectural Presence",
    description:
      "Monolithic volume, controlled contrast, and warm exterior light shaped into a quiet statement.",
    image: image1,
  },
  {
    number: "02",
    category: "Luxury Exterior",
    title: "Light & Reflection",
    description:
      "Reflective surfaces and evening atmosphere create a restrained cinematic arrival.",
    image: image2,
  },
  {
    number: "03",
    category: "Spatial Architecture",
    title: "Timeless Modernism",
    description:
      "Clean geometry and generous negative space give the architecture a calm, lasting presence.",
    image: image7,
  },
  {
    number: "04",
    category: "Spatial Flow",
    title: "Designed For Presence",
    description:
      "Open transitions guide movement without visual noise, keeping the experience composed.",
    image: image6,
  },
  {
    number: "05",
    category: "Materiality",
    title: "Refined Material Language",
    description:
      "Stone, shadow, and muted warmth combine into a tactile luxury language.",
    image: imageK2,
  },
  {
    number: "06",
    category: "Gathering Spaces",
    title: "Spaces For Connection",
    description:
      "Interior scale and lighting are balanced for intimacy, comfort, and social rhythm.",
    image: imageK3,
  },
  {
    number: "07",
    category: "Wellness",
    title: "Restorative Spaces",
    description:
      "Soft transitions and natural texture create a slower, more restorative spatial mood.",
    image: imageS1,
  },
  {
    number: "08",
    category: "Water & Light",
    title: "Immersive Reflection",
    description:
      "Water, glass, and low light extend the architecture into a quiet sensory field.",
    image: imageS2,
  },
  {
    number: "09",
    category: "Private Retreat",
    title: "Designed For Calm",
    description:
      "A secluded composition where proportion and silence become the main luxury.",
    image: imageS3,
  },
];

const preloadedImages = new Set<string>();

function preloadImage(src: string) {
  if (preloadedImages.has(src)) {
    return;
  }

  const image = new Image();

  image.decoding = "async";
  image.src = src;
  void image.decode?.().catch(() => undefined);

  preloadedImages.add(src);
}

function getActiveIndex(progress: number) {
  const index = Math.floor(progress * EXPERIENCES.length);

  return Math.min(EXPERIENCES.length - 1, Math.max(0, index));
}

type ExperienceLayerProps = {
  experience: Experience;
  index: number;
  isPriority: boolean;
  scrollYProgress: MotionValue<number>;
};

type ExperienceTextLayerProps = Omit<ExperienceLayerProps, "isPriority">;

function ExperienceImageLayer({
  experience,
  index,
  isPriority,
  scrollYProgress,
}: ExperienceLayerProps) {
  const start = index / EXPERIENCES.length;
  const end = (index + 1) / EXPERIENCES.length;

  const defaultOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0],
  );

  const scale = useTransform(scrollYProgress, [start, end], [1, 1.045]);
  const y = useTransform(scrollYProgress, [start, end], ["0%", "2.5%"]);

  return (
    <motion.img
      src={experience.image}
      alt={experience.title}
      decoding="async"
      fetchPriority={isPriority ? "high" : "auto"}
      style={{
        opacity: defaultOpacity,
        scale,
        y,
      }}
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
      "
    />
  );
}

function ExperienceTextLayer({
  experience,
  index,
  scrollYProgress,
}: ExperienceTextLayerProps) {
  const start = index / EXPERIENCES.length;
  const end = (index + 1) / EXPERIENCES.length;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(scrollYProgress, [start, end], [80, -80]);

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="
        absolute
        inset-0
        flex
        items-center
        px-6
        md:px-12
      "
    >
      <div className="max-w-3xl">
        <p
          className="
            mb-8
            text-sm
            uppercase
            tracking-[0.3em]
            text-[#b88c3a]
          "
        >
          {experience.number} / {experience.category}
        </p>

        <h2
          className="
            mb-10
            font-['Cormorant_Garamond']
            text-6xl
            font-light
            leading-[0.9]
            md:text-8xl
          "
        >
          {experience.title}
        </h2>
      </div>
    </motion.div>
  );
}

function MobileSpatialExperiencesSection() {
  return (
    <section className="bg-[#0b0b0b] px-5 py-20 text-white sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p
            className="
              mb-5
              text-xs
              uppercase
              tracking-[0.35em]
              text-amber-200/70
            "
          >
            Exterior Experiences
          </p>

          <h2
            className="
              font-['Cormorant_Garamond']
              text-4xl
              font-light
              leading-[0.95]
              text-[#f5efe7]
              sm:text-5xl
            "
          >
            Architecture designed as cinematic presence.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-14">
          {EXPERIENCES.map((experience, index) => (
            <Reveal key={experience.number} delay={index % 3 * 0.06}>
              <article>
                <div
                  className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                  "
                >
                  <img
                    src={experience.image}
                    alt={experience.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      aspect-[4/5]
                      w-full
                      object-cover
                      sm:aspect-[16/10]
                    "
                  />
                </div>

                <div className="pt-6">
                  <p
                    className="
                      mb-3
                      text-xs
                      uppercase
                      tracking-[0.28em]
                      text-[#b88c3a]
                    "
                  >
                    {experience.number} / {experience.category}
                  </p>

                  <h3
                    className="
                      font-['Cormorant_Garamond']
                      text-4xl
                      font-light
                      leading-none
                      text-[#f5efe7]
                    "
                  >
                    {experience.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-white/60">
                    {experience.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopSpatialExperiencesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = getActiveIndex(value);

    setActiveIndex((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex,
    );
  });

  useEffect(() => {
    for (let index = activeIndex; index <= activeIndex + 2; index += 1) {
      const experience = EXPERIENCES[index];

      if (!experience) {
        continue;
      }

      preloadImage(experience.image);
    }
  }, [activeIndex]);

  const visibleExperiences = useMemo(() => {
    const secondaryIndex =
      activeIndex === EXPERIENCES.length - 1 ? activeIndex - 1 : activeIndex + 1;

    return [activeIndex, secondaryIndex]
      .filter((index, arrayIndex, indexes) => {
        return index >= 0 && indexes.indexOf(index) === arrayIndex;
      })
      .sort((a, b) => a - b)
      .map((index) => {
        return {
          experience: EXPERIENCES[index],
          index,
        };
      });
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="
        bg-[#0b0b0b]
        text-white
      "
    >
      <div
        className="
          px-6
          py-40
          md:px-12
        "
      >
        <div className="max-w-5xl">
          <p
            className="
              mb-6
              text-sm
              uppercase
              tracking-[0.35em]
              text-amber-200/70
            "
          >
            Exterior Experiences
          </p>

          <h2
            className="
              text-5xl
              font-light
              font-['Cormorant_Garamond']
              leading-[0.92]
              tracking-[-0.04em]
              md:text-8xl
            "
          >
            Architecture designed
            <br />
            as cinematic presence.
          </h2>
        </div>
      </div>

      <div className="relative h-[1050vh]">
        <div
          className="
            sticky
            top-0
            h-screen
            overflow-hidden
          "
        >
          <div className="absolute inset-0">
            {visibleExperiences.map(({ experience, index }) => {
              return (
                <ExperienceImageLayer
                  key={experience.number}
                  experience={experience}
                  index={index}
                  isPriority={index === activeIndex}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}

            <div
              className="
                absolute
                inset-0
                bg-black/20
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/30
                via-black/1
                to-black/75
              "
            />
          </div>

          <div
            className="
              relative
              z-20
              h-full
            "
          >
            {visibleExperiences.map(({ experience, index }) => {
              return (
                <ExperienceTextLayer
                  key={experience.number}
                  experience={experience}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SpatialExperiencesSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return isDesktop ? (
    <DesktopSpatialExperiencesSection />
  ) : (
    <MobileSpatialExperiencesSection />
  );
}
