import Reveal from "../components/ui/Reveal";

const services = [
  {
    title: "Architectural Design",
    description:
      "Modern spaces designed with timeless proportions and cinematic atmosphere.",
  },

  {
    title: "Interior Experience",
    description:
      "Luxury interiors crafted through refined materials, lighting, and spatial harmony.",
  },

  {
    title: "Creative Direction",
    description:
      "Visual storytelling for architecture, hospitality, and luxury environments.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        px-6
        py-32
      "
    >
      <div
        className="
        absolute
        top-0 
        left-0

        h-[300px]
        w-full

        bg-gradient-to-b
        from-transparent
        to-[#050505]
      "
      />
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl
        "
      >
        {/* TITLE */}
        <Reveal>
          <div className="max-w-2xl">
            <p
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.35em]
                text-amber-200/70
              "
            >
              Services
            </p>

            <h2
              className="
                font-['Cormorant_Garamond']
                text-6xl
                leading-[0.95]
                text-[#f5efe7]
              "
            >
              Crafted for brands seeking timeless impact.
            </h2>
          </div>
        </Reveal>

        {/* CARDS */}
        <div
          className="
            mt-20
            grid
            gap-8

            md:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.18}>
              <div
                className="
                  group
                  relative

                  transform-gpu

                  overflow-hidden

                  rounded-[32px]

                  border
                  border-white/[0.06]

                  bg-white/[0.02]

                  p-10

                  transition-all
                  duration-700

                  hover:-translate-y-3
                  hover:border-amber-100/20
                  hover:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                "
              >
                {/* CARD GLOW */}
                <div
                  className="
                    absolute
                    inset-0

                    opacity-0

                    transition-opacity
                    duration-700

                    group-hover:opacity-100
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at top left,
                        rgba(214,180,94,0.12),
                        transparent 60%
                      )
                    `,
                  }}
                />

                <div
                  className="
                    relative z-10
                    transition-transform
                    duration-700

                    group-hover:translate-y-[-4px]
                  "
                >
                  <p
                    className="
                      mb-6
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      text-amber-100/60
                    "
                  >
                    {index + 1}
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-medium
                      text-[#f5efe7]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      leading-relaxed
                      text-[#8f877c]
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
