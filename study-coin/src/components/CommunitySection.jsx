import React from 'react';
import communityImage from '../assets/community.png'; // Middle image

const JoinCommunity = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-[50vh] py-4"> {/* Adjusted height and padding */}
      {/* Join the Community Text */}
      <h2 className="text-4xl font-bold mb-6"> {/* Reduced margin-bottom */}
        <span className="text-black">Join the</span>{' '}
        <span className="text-orange-500">Community</span>
      </h2>

      {/* Middle Image */}
      <div className="flex items-center justify-center mb-6"> {/* Reduced margin-bottom */}
        <img 
          src={communityImage} 
          alt="Community" 
          className="w-[400px] h-[380px]" // Further decreased size
        />
      </div>

      {/* Social Icons with Links */}
      <div className="flex items-center justify-center space-x-8">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition-colors"
        >
          <i className="fab fa-linkedin text-4xl"></i>
        </a>

        {/* GitHub */}
        <a 
          href="https://www.github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition-colors"
        >
          <i className="fab fa-github text-4xl"></i>
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition-colors"
        >
          <i className="fab fa-instagram text-4xl"></i>
        </a>
      </div>
    </div>
  );
};

export default JoinCommunity;