function MobilePlaceholder() {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#050505]
        px-8
        text-center
      "
    >
      <div className="max-w-md">
        <p
          className="
            mb-6
            text-xs
            uppercase
            tracking-[0.35em]
            text-amber-200/70
          "
        >
          Nexora Studio
        </p>

        <h1
          className="
            font-['Cormorant_Garamond']
            text-5xl
            text-[#f5efe7]
          "
        >
          Mobile Version
          <br />
          Coming Soon
        </h1>

        <p
          className="
            mt-8
            leading-relaxed
            text-[#8f877c]
          "
        >
          This experience has been crafted for desktop devices.
          <br />
          The mobile version is currently in development.
        </p>
      </div>
    </div>
  );
}

export default MobilePlaceholder;
