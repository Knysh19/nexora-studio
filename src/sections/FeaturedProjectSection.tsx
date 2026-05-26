import Reveal from "../components/ui/Reveal";

import villaImage from "../assets/images/villa-project.jpg";

function FeaturedProjectSection() {
  return (
    <section
      className="
        relative
        px-6
        py-32
        bg-[#050505]
      "
    >
      <Reveal>
        <div
          className="
            group
            relative

            mx-auto
            max-w-7xl

            overflow-hidden
            rounded-[40px]
          "
        >
          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={villaImage}
              alt="Luxury Villa"
              className="
                h-[800px]
                w-full
                object-cover

                transition-transform
                duration-[2000ms]

                group-hover:scale-105
              "
            />
          </div>

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0

              bg-black/40
            "
          />

          {/* GOLD GLOW */}
          <div
            className="
              absolute
              inset-0

              opacity-0

              transition-opacity
              duration-1000

              group-hover:opacity-100
            "
            style={{
              background: `
                radial-gradient(
                  circle at center,
                  rgba(214,180,94,0.12),
                  transparent 70%
                )
              `,
            }}
          />

          {/* CONTENT */}
          <div
            className="
              absolute
              bottom-0
              left-0

              z-10

              p-12
            "
          >
            <p
              className="
                mb-4

                text-xs
                uppercase
                tracking-[0.35em]

                text-amber-200/70
              "
            >
              Featured Project
            </p>

            <h2
              className="
                max-w-3xl

                font-['Cormorant_Garamond']

                text-6xl
                leading-[0.95]

                text-[#f5efe7]

                md:text-8xl
              "
            >
              Designed
              <span className="text-amber-200"> For </span>
              Atmosphere
            </h2>

            <p
              className="
                mt-6
                max-w-xl

                text-lg
                leading-relaxed

                text-[#b8b0a5]
              "
            >
              A cinematic residential concept focused on light, silence,
              material contrast, and timeless luxury.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default FeaturedProjectSection;
