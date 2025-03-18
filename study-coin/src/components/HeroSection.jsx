import React from "react";
import heroImage from "../assets/HeroSection.png";
import heroBg from "../assets/HeroBg.png";
import VioletSection from "./VioletSection"; // Import the VioletSection component

const HeroSection = () => {
  return (
    <div className="relative"> {/* Add relative positioning to contain the absolute VioletSection */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Left Content */}
        <div className="w-full lg:w-3/5 mt-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-snug text-black">
            <span className="text-primary-purple">Rewarding</span> Curiosity
            <br />
            <span className="text-primary-orange">Transforming</span> Future
          </h1>
          <p className="mt-8 md:mt-10 text-lg md:text-2xl text-gray-800">
            Empowering learners with field-specific modules, progress tracking,
            and a revolutionary reward system where knowledge transforms into cryptocurrency!
          </p>
          <div className="mt-8 md:mt-12 flex items-center w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for a program..."
              className="border p-4 md:p-6 rounded-l-full w-full text-lg md:text-2xl"
            />
            <button className="bg-primary-purple text-white px-6 md:px-10 py-4 md:py-6 rounded-r-full text-lg md:text-2xl">
              Continue
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src={heroImage}
            alt="Study Illustration"
            className="w-3/4 md:w-2/3 lg:w-3/4 h-auto scale-100"
          />
        </div>
      </div>

      {/* Violet Section */}
      <VioletSection />
    </div>
  );
};

export default HeroSection;
