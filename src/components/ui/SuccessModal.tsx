import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

function SuccessModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[9999]
              w-[calc(100%-2rem)]
              max-w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[28px]
              border
              border-white/10
              bg-[#0d0d0d]
              p-8
              text-center

              sm:rounded-[32px]
              sm:p-12
            "
          >
            <div className="mb-6 flex justify-center text-amber-300">
              <Check size={48} strokeWidth={1.3} />
            </div>

            <h2 className="mb-4 font-['Cormorant_Garamond'] text-4xl text-[#f5efe7]">
              Request Sent
            </h2>

            <p className="text-[#8f877c]">
              Thank you for reaching out.
              <br />
              We'll get back to you within 24 hours.
            </p>

            <button
              onClick={onClose}
              className="
                mt-10
                rounded-full
                border
                border-amber-200/30
                px-8
                py-3
                uppercase
                tracking-[0.2em]
                text-amber-100
                transition
                hover:bg-amber-200/10
              "
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default SuccessModal;
