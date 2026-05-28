import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image7 from "../assets/images/7.jpg";

export default function SpatialExperiencesSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const experiences = [
    {
      number: "01",
      category: "Private Residence",
      title: "Architectural Presence",
      description:
        "Large-scale forms emerging through darkness and atmospheric landscape.",
      image: image1,
    },

    {
      number: "02",
      category: "Luxury Exterior",
      title: "Light & Reflection",
      description:
        "Water, illumination, and geometry blending into cinematic stillness.",
      image: image2,
    },

    {
      number: "03",
      category: "Spatial Architecture",
      title: "Timeless Modernism",
      description:
        "A restrained architectural language shaped through proportion and atmosphere.",
      image: image7,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        bg-[#0b0b0b]
        text-white
      "
    >
      {/* INTRO */}
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

      {/* SCROLL EXPERIENCE */}
      <div className="relative h-[400vh]">
        <div
          className="
            sticky
            top-0

            h-screen
            overflow-hidden
          "
        >
          {/* IMAGES */}
          <div className="absolute inset-0 ">
            {experiences.map((experience, index) => {
              const start = index / experiences.length;

              const end = (index + 1) / experiences.length;

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.12, end - 0.12, end],
                [0, 1, 1, 0],
              );

              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [1, 1.12],
              );

              const y = useTransform(
                scrollYProgress,
                [start, end],
                ["0%", "6%"],
              );

              return (
                <motion.img
                  key={experience.number}
                  src={experience.image}
                  alt={experience.title}
                  style={{
                    opacity,
                    scale,
                    y,
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
            })}

            {/* DARK OVERLAY */}
            <div
              className="
                absolute
                inset-0

                bg-black/20
              "
            />

            {/* ATMOSPHERIC GRADIENT */}
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

          {/* TEXT LAYERS */}
          <div
            className="
              relative
              z-20
              
              h-full
            "
          >
            {experiences.map((experience, index) => {
              const start = index / experiences.length;

              const end = (index + 1) / experiences.length;

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [0, 1, 1, 0],
              );

              const y = useTransform(scrollYProgress, [start, end], [80, -80]);

              return (
                <motion.div
                  key={experience.number}
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

                    <p
                      className="
                        max-w-xl

                        text-lg
                        leading-relaxed

                        text-neutral-300

                        md:text-xl
                      "
                    >
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
