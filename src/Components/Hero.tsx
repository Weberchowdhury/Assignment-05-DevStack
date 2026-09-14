// Components/Hero.tsx

import Heropic from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex min-h-[600px] flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-24"
    >
      <div className="flex-1">
        <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />

          <span className="brand-gradient">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and pick the best tech stack for
          your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="brand-button rounded-full px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <img
          src={Heropic}
          alt="Development stack"
          className="w-full max-w-xl"
        />
      </div>
    </section>
  );
};

export default Hero;