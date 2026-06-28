import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  image: string;
};

const EXPERIENCES: Experience[] = [
  {
    number: "01",
    category: "Private Residence",
    title: "Architectural Presence",
    image: image1,
  },
  {
    number: "02",
    category: "Luxury Exterior",
    title: "Light & Reflection",
    image: image2,
  },
  {
    number: "03",
    category: "Spatial Architecture",
    title: "Timeless Modernism",
    image: image7,
  },
  {
    number: "04",
    category: "Spatial Flow",
    title: "Designed For Presence",
    image: image6,
  },
  {
    number: "05",
    category: "Materiality",
    title: "Refined Material Language",
    image: imageK2,
  },
  {
    number: "06",
    category: "Gathering Spaces",
    title: "Spaces For Connection",
    image: imageK3,
  },
  {
    number: "07",
    category: "Wellness",
    title: "Restorative Spaces",
    image: imageS1,
  },
  {
    number: "08",
    category: "Water & Light",
    title: "Immersive Reflection",
    image: imageS2,
  },
  {
    number: "09",
    category: "Private Retreat",
    title: "Designed For Calm",
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
  const accentOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.02, end - 0.005, end],
    [0, 1, 1, 0],
  );

  const scale = useTransform(scrollYProgress, [start, end], [1, 1.12]);
  const y = useTransform(scrollYProgress, [start, end], ["0%", "6%"]);
  const slideInX = useTransform(
    scrollYProgress,
    [start, start + 0.07],
    ["100%", "0%"],
  );
  const isAccentSlide = index === 3 || index === 6;

  return (
    <motion.img
      src={experience.image}
      alt={experience.title}
      decoding="async"
      fetchPriority={isPriority ? "high" : "auto"}
      style={{
        opacity: isAccentSlide ? accentOpacity : defaultOpacity,
        scale,
        y,
        x: isAccentSlide ? slideInX : "0%",
      }}
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        will-change-transform
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

export default function SpatialExperiencesSection() {
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
    for (let index = activeIndex - 2; index <= activeIndex + 2; index += 1) {
      const experience = EXPERIENCES[index];

      if (!experience) {
        continue;
      }

      preloadImage(experience.image);
    }
  }, [activeIndex]);

  const visibleExperiences = EXPERIENCES.filter((_, index) => {
    return Math.abs(index - activeIndex) <= 1;
  }).map((experience, index) => {
    return {
      experience,
      index: Math.max(0, activeIndex - 1) + index,
    };
  });

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
