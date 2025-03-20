import React from "react";
import exam3 from "../assets/exam3.png"; // Import exam3 image
import exam4 from "../assets/exam4.png"; // Import exam4 image
import exam5 from "../assets/exam5.png"; // Import exam5 image

const VioletSection = () => {
  return (
    <div
      className="absolute hidden 2xl:flex items-center bg-[#7E57C2] p-6 text-white font-sans shadow-lg space-x-6 rounded-lg" // Use 2xl:flex to hide below 1500px
      style={{
        width: "1360px",
        height: "130px",
        top: "490px",
        left: "50%",
        transform: "translateX(-50%)", // Center horizontally
      }}
    >
      {/* Section 1: Practice Your Skills */}
      <div
        className="flex items-center p-4"
        style={{ width: "419px", height: "137px" }}
      >
        <img
          src={exam3} // Use exam3 image
          alt="Practice Your Skills"
          className="w-16 h-16 mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Practice Your Skills</h2>
          <p className="text-sm leading-relaxed">
            Have your expertise through current levels with success. Upload your
            own questions to challenge and deepen your understanding.
          </p>
        </div>
      </div>

      {/* Section 2: Track Your Progress */}
      <div
        className="flex items-center p-4"
        style={{ width: "419px", height: "137px" }}
      >
        <img
          src={exam4} // Use exam4 image
          alt="Track Your Progress"
          className="w-16 h-16 mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Track Your Progress</h2>
          <p className="text-sm leading-relaxed">
            Learn valuable insights with intuitive areas and dynamic graphs
            showing your time, levels, and growth trends.
          </p>
        </div>
      </div>

      {/* Section 3: Reap Rewards Instantly */}
      <div
        className="flex items-center p-4"
        style={{ width: "419px", height: "137px" }}
      >
        <img
          src={exam5} // Use exam5 image
          alt="Reap Rewards Instantly"
          className="w-16 h-16 mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">Reap Rewards Instantly</h2>
          <p className="text-sm leading-relaxed">
            Earn Cohen to buy gift cards, courses, choppers, and premium fixtures
            for every correct answer. Hold your coins as an investment unlocking
            even greater value!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VioletSection;
