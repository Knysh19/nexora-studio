import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
};

function Reveal({ children, delay = 0 }: RevealProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: isDesktop ? 80 : 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: isDesktop ? 1.4 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
