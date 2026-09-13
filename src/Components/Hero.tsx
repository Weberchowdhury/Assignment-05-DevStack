// Components/Hero.tsx

import HeroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

        {/* Hero Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 text-gray-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and pick the best tech stack for your
            next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 px-5 py-2 text-white">
              Explore Technologies
            </button>

            <button className="rounded-full border border-gray-300 px-5 py-2">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <img
            src={HeroImage}
            alt="Development Stack"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;