import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigateTo } from "../lib/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopNavItems = [
    {
      label: "Services",
      id: "services",
    },
    {
      label: "Process",
      id: "process",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];

  const mobileNavItems = [
    desktopNavItems[0],
    desktopNavItems[1],
    {
      label: "Projects",
      id: "projects",
    },
    desktopNavItems[2],
  ];

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const handleMobileNavigate = (id: string) => {
    setIsMenuOpen(false);
    navigateTo(id);
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
      "
    >
      <div
        className="
          flex
          items-center
          justify-between

          px-5
          py-5

          lg:px-12
          lg:py-8
        "
      >
        {/* LEFT */}
        <div>
          <p
            className="
              text-[13px]
              uppercase
              tracking-[0.35em]
              text-[#f5efe7]
            "
          >
            Nexora
          </p>

          <p
            className="
              mt-1
              text-[11px]
              italic
              text-[#8f877c]
            "
          >
            Architecture Studio
          </p>
        </div>

        {/* CENTER NAV */}
        <nav
          className="
          hidden
          items-center
          gap-12
          pointer

          lg:flex
        "
        >
          {desktopNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className="
              text-[12px]
              uppercase
              tracking-[0.15em]
              text-[#b7aea2]

              transition-all
              duration-500

              hover:text-amber-100
            "
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* RIGHT */}
        <button
          key={"contact"}
          onClick={() => navigateTo("contact")}
          className="
            rounded-full
            border
            border-[#3a342d]

            hidden

            px-5
            py-2

            text-[12px]
            uppercase
            tracking-[0.12em]

            text-[#d6cec2]

            transition-all
            duration-500

            hover:border-amber-100/30
            hover:text-amber-100

            lg:block
          "
        >
          Start a Project
        </button>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setIsMenuOpen(true)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-[#3a342d]
            text-[#f5efe7]
            transition-colors
            duration-300
            hover:border-amber-100/30
            hover:text-amber-100
            lg:hidden
          "
        >
          <Menu size={20} strokeWidth={1.6} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                lg:hidden
              "
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-[100svh]
                w-[min(86vw,380px)]
                flex-col
                border-l
                border-white/10
                bg-[#070707]
                px-7
                py-6
                shadow-[-30px_0_80px_rgba(0,0,0,0.45)]
                lg:hidden
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="
                      text-[13px]
                      uppercase
                      tracking-[0.35em]
                      text-[#f5efe7]
                    "
                  >
                    Nexora
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      italic
                      text-[#8f877c]
                    "
                  >
                    Architecture Studio
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-[#d6cec2]
                    transition-colors
                    duration-300
                    hover:border-amber-100/30
                    hover:text-amber-100
                  "
                >
                  <X size={18} strokeWidth={1.6} />
                </button>
              </div>

              <nav className="mt-20 flex flex-col gap-2">
                {mobileNavItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => handleMobileNavigate(item.id)}
                    className="
                      border-b
                      border-white/10
                      py-5
                      text-left
                      font-['Cormorant_Garamond']
                      text-4xl
                      font-light
                      text-[#f5efe7]
                      transition-colors
                      duration-300
                      hover:text-amber-100
                    "
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => handleMobileNavigate("contact")}
                className="
                  mt-auto
                  rounded-full
                  border
                  border-[#8a6b2f]
                  px-6
                  py-4
                  text-xs
                  uppercase
                  tracking-[0.22em]
                  text-amber-100
                  transition-colors
                  duration-300
                  hover:bg-amber-100
                  hover:text-black
                "
              >
                Start a Project
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
