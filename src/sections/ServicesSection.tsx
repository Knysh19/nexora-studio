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
        px-5
        py-20

        sm:px-6
        sm:py-24
        lg:py-32
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
                text-4xl
                leading-[0.95]
                text-[#f5efe7]

                sm:text-5xl
                lg:text-6xl
              "
            >
              Crafted for brands seeking timeless impact.
            </h2>
          </div>
        </Reveal>

        {/* CARDS */}
        <div
          className="
            mt-12
            grid
            gap-5

            md:grid-cols-2
            md:gap-6
            lg:mt-20
            lg:grid-cols-3
            lg:gap-8
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

                  rounded-[24px]

                  border
                  border-white/[0.06]

                  bg-white/[0.02]

                  p-7

                  transition-all
                  duration-700

                  hover:border-amber-100/20

                  lg:rounded-[32px]
                  lg:p-10
                  lg:hover:-translate-y-3
                  lg:hover:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
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
