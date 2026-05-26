import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import villaImage from "../assets/images/villa-project.jpg";

function AtmosphereSection() {
  const sectionReference = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionReference,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <section
      ref={sectionReference}
      className="
        relative
        h-[120vh]
        overflow-hidden
        bg-[#050505]
      "
    >
      {/* IMAGE */}
      <motion.img
        src={villaImage}
        alt="Luxury Architecture"
        style={{
          y: imageY,
        }}
        className="
          absolute
          inset-0

          h-[140%]
          w-full

          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0

          bg-black/60
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          flex
          h-full
          items-center
          justify-center

          px-6
          text-center
        "
      >
        <div>
          <p
            className="
              mb-6

              text-xs
              uppercase
              tracking-[0.4em]

              text-amber-200/70
            "
          >
            Cinematic Architecture
          </p>

          <h2
            className="
              max-w-5xl

              font-['Cormorant_Garamond']

              text-6xl
              leading-[0.9]

              text-[#f5efe7]

              md:text-[120px]
            "
          >
            Space
            <span className="text-amber-200"> Designed </span>
            To Be Felt
          </h2>
        </div>
      </div>
    </section>
  );
}

export default AtmosphereSection;
