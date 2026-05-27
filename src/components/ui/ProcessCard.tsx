import { motion, useTransform } from "framer-motion";

type ProcessCardProps = {
  step: string;
  title: string;
  description: string;

  index: number;

  scrollYProgress: any;
};

function ProcessCard({
  step,
  title,
  description,
  index,
  scrollYProgress,
}: ProcessCardProps) {
  const animationRanges = [
    [0.18, 0.52],
    [0.42, 0.76],
    [0.66, 0.98],
  ];

  const [start, end] = animationRanges[index];

  const cardY = useTransform(scrollYProgress, [start, end], ["45vh", "-45vh"]);

  const visibleStart = start + 0.08;
  const visibleEnd = end - 0.08;

  const cardOpacity = useTransform(
    scrollYProgress,
    [start, visibleStart, visibleEnd, end],
    [0, 1, 1, 0],
  );

  // const cardBlur = useTransform(
  //   scrollYProgress,
  //   [start, centerPoint, end],
  //   [8, 0, 8],
  // );

  return (
    <motion.div
      style={{
        y: cardY,
        opacity: cardOpacity,
        // filter: cardBlur.to((value) => `blur(${value}px)`),
      }}
      className="
        absolute
        left-0
        top-1/2
        -left-0
        -translate-y-1/2
        w-full

        border
        border-white/20

        bg-white/[0.08]

        p-10

        backdrop-blur-2xl
      "
    >
      <p
        className="
          mb-5

          text-sm
          uppercase
          tracking-[0.3em]

          text-[#d6a066]
        "
      >
        {step}
      </p>

      <div
        className="
          mb-6
          h-px
          w-full
          bg-white/20
        "
      />

      <h3
        className="
          mb-6

          text-5xl
          leading-tight

          text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          text-lg
          leading-relaxed

          text-white/70
        "
      >
        {description}
      </p>
    </motion.div>
  );
}

export default ProcessCard;
