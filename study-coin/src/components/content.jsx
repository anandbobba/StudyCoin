import React from 'react';
import studyChainImage from '../assets/study-chain.png'; // Replace with your image path
import blockchainBg from '../assets/blockchainbg.png'; // Replace with your image path
import Study from './study';
import Hex from './hex';

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative" style={{ backgroundImage: `url(${blockchainBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-row items-center justify-center w-full max-w-6xl p-8">
        {/* Content Section */}
        <div className="flex-1 text-left pr-8">
          {/* Main Heading in Yellow */}
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">
            Welcome to StudyChain - The Blockchain-Powered Education Network
          </h2>
          
          {/* First Paragraph in White */}
          <p className="text-xl text-white mb-6">
            At StudyChain, we are revolutionizing education by integrating blockchain technology to create an ecosystem where learning is both engaging and rewarding. Through StudyChain, students are empowered to earn real-world value from their educational achievements, bridging the gap between academic success and tangible rewards.
          </p>
          
          {/* Second Paragraph in White */}
          <p className="text-lg text-white mb-6">
            StudyChain is a decentralized platform that leverages blockchain technology to reward students for their learning journey. Every achievement, from daily learning milestones to major academic accomplishments, is tracked on the blockchain, ensuring transparency, security, and most importantly, real-world value for students’ hard work.
          </p>
          
          {/* List Items in White */}
          <ul className="text-lg text-white mb-6 list-disc list-inside">
            <li>Blockchain Transparency: All transactions and rewards are recorded on a decentralized ledger, ensuring transparency and accountability.</li>
            <li>Empowering Students: With StudyChain, your learning efforts are rewarded, making the educational experience more engaging and meaningful.</li>
            <li>Future-Oriented: The blockchain foundation ensures that StudyChain is ready for the future of education, offering endless possibilities for growth and collaboration.</li>
          </ul>
          
          {/* Final Paragraph in White */}
          <p className="text-lg text-white">
            Explore StudyChain today and begin your journey to earning rewards for your hard work and achievements!
          </p>
        </div>
        
        {/* Image Section */}
        <div className="flex-1 flex justify-end">
          <img 
            src={studyChainImage} 
            alt="Study Chain" 
            className="w-[606px] h-[571px] object-contain rounded-lg" 
          />
        </div>
      </div>
      <Study/>
      <Hex/>
    </div>
  );
};

export default Content;