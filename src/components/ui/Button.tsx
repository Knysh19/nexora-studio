import { motion } from "framer-motion";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

function Button({ text, variant = "primary" }: ButtonProps) {
  const baseStyles = `
    rounded-full
    px-8
    py-4
    font-semibold
    transition-all
    duration-500
    ease-out

    hover:-translate-y-[2px]
  `;

  const variants = {
    primary: `
    border
    border-amber-200/20
    bg-amber-100/10
    text-[#f5efe7]
    backdrop-blur-md

    hover:bg-amber-100/15
    hover:border-amber-100/30

    hover:shadow-[0_0_30px_rgba(214,180,94,0.15)]
  `,

    secondary: `
    border
    border-white/10
    bg-white/[0.03]
    text-[#d6cec2]
    backdrop-blur-md

    hover:bg-white/[0.06]
    hover:border-white/20
  `,
  };

  return (
    <motion.button
      whileHover={{
        y: -3,
        // scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`
        ${baseStyles}
        ${variants[variant]}
      `}
    >
      {text}
    </motion.button>
  );
}

export default Button;
