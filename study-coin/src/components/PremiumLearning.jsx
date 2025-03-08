import React from 'react';
import premiumLearningBg from '../assets/PremiumLearning.png'; // Background image
import learningLady from '../assets/learning.png'; // Lady picture

const PremiumLearning = () => {
  return (
    <div 
      className="relative flex items-center justify-center h-[636px] bg-cover bg-center -mt-20" // Added -mt-20 to move the section up
      style={{ backgroundImage: `url(${premiumLearningBg})` }}
    >
      {/* Content Container */}
      <div className="flex flex-row items-center justify-between w-full max-w-7xl px-8">
        {/* Left Side: Text Content */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-black mb-6">
            Premium Learning  
            <span className="block text-primary-orange">Experience</span>
          </h1>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary-purple rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-lg">✔</span>
              </div>
              <p className="text-xl text-black">
                Daily Challenges and Streaks  
                <span className="block text-gray-800">Stay consistent, earn rewards daily!</span>
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary-purple rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-lg">✔</span>
              </div>
              <p className="text-xl text-black">
                Gamified Learning  
                <span className="block text-gray-800">Learn, play, and achieve milestones!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Lady Picture */}
        <div className="w-1/2 flex justify-end">
          <img 
            src={learningLady} 
            alt="Learning Lady" 
            className="w-[500px] h-auto" 
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumLearning;