import { navigateTo } from "../lib/navigation";

function Navbar() {
  const navItems = [
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

          px-12
          py-8
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

          md:flex
        "
        >
          {navItems.map((item) => (
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
          "
        >
          Start a Project
        </button>
      </div>
    </header>
  );
}

export default Navbar;
