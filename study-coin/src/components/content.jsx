import React from 'react';
import studyChainImage from '../assets/study-chain.png'; // Replace with your image path
import Study from './study';
import Hex from './hex';

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-violet-900"> {/* Set background color to violet */}
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-8 py-12 md:py-24">
        {/* Text Content Section (Left) */}
        <div 
          className="text-left pr-0 md:pr-12 w-full"
        >
          {/* Main Heading in Yellow */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500 mb-8">
            Welcome to StudyChain - The Blockchain-Powered Education Network
          </h1>

          {/* First Paragraph in White */}
          <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
            At StudyChain, we are revolutionizing education by integrating blockchain technology to create an ecosystem where learning is both engaging and rewarding. Through StudyChain, students are empowered to earn real-world value from their educational achievements, bridging the gap between academic success and tangible rewards.
          </p>

          {/* Subheading: What is StudyChain? */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            What is StudyChain?
          </h2>

          {/* Second Paragraph in White */}
          <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
            StudyChain is a decentralized platform that leverages blockchain technology to reward students for their learning journey. Every achievement, from daily learning milestones to major academic accomplishments, is tracked on the blockchain, ensuring transparency, security, and most importantly, real-world value for students’ hard work.
          </p>

          {/* Subheading: Why StudyChain? */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Why StudyChain?
          </h2>

          {/* List Items in White */}
          <ul className="text-lg sm:text-xl text-white mb-8 list-disc list-inside pl-5 leading-relaxed">
            <li className="mb-4">
              <strong>Blockchain Transparency:</strong> All transactions and rewards are recorded on a decentralized ledger, ensuring transparency and accountability.
            </li>
            <li className="mb-4">
              <strong>Empowering Students:</strong> With StudyChain, your learning efforts are rewarded, making the educational experience more engaging and meaningful.
            </li>
            <li className="mb-4">
              <strong>Future-Oriented:</strong> The blockchain foundation ensures that StudyChain is ready for the future of education, offering endless possibilities for growth and collaboration.
            </li>
          </ul>

          {/* Final Paragraph in White */}
          <p className="text-lg sm:text-xl text-white leading-relaxed">
            Explore StudyChain today and begin your journey to earning rewards for your hard work and achievements!
          </p>
        </div>

        {/* Image Section (Right) */}
        <div className="flex-1 flex justify-end mt-8 md:mt-0 max-w-full md:max-w-xl">
          <img 
            src={studyChainImage} 
            alt="Study Chain" 
            className="w-full h-auto object-contain rounded-lg" 
          />
        </div>
      </div>

      {/* Additional Sections */}
      <Study />
      <Hex />
    </div>
  );
};

export default Content;
