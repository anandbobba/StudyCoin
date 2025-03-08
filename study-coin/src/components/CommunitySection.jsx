import React from 'react';
import communityImage from '../assets/community.png';

const JoinCommunity = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-[50vh] py-6 px-4 md:px-8">
      {/* Join the Community Text */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
        <span className="text-black">Join the</span>{' '}
        <span className="text-orange-500">Community</span>
      </h2>

      {/* Middle Image */}
      <div className="flex items-center justify-center mb-4 md:mb-6">
        <img 
          src={communityImage} 
          alt="Community" 
          className="w-[280px] h-[260px] sm:w-[350px] sm:h-[330px] md:w-[400px] md:h-[380px]"
        />
      </div>

      {/* Social Icons with Links */}
      <div className="flex items-center justify-center space-x-6 sm:space-x-8">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition-colors"
        >
          <i className="fab fa-linkedin text-3xl sm:text-4xl"></i>
        </a>

        {/* GitHub */}
        <a 
          href="https://www.github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition-colors"
        >
          <i className="fab fa-github text-3xl sm:text-4xl"></i>
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition-colors"
        >
          <i className="fab fa-instagram text-3xl sm:text-4xl"></i>
        </a>
      </div>
    </div>
  );
};

export default JoinCommunity;