import React from 'react';
import { useNavigate } from 'react-router-dom';
import studyChainImage from '../assets/study-chain.png'; // Replace with your image path
import studyTokenImage from '../assets/study-token.png'; // Replace with your image path
import hexIdImage from '../assets/hex-id.png'; // Replace with your image path

const TransformingLearning = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-40">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          Transforming Answers Into Assets
        </h1>
        <p className="text-xl text-gray-700">
          Study Coin is revolutionizing the learning experience for students, educators, and institutions by using innovative blockchain technology and reward-driven initiatives.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-row justify-center space-x-6">
        {/* Study Chain Card */}
        <div className="bg-white rounded-lg text-center w-[400px] h-[550px] p-6 flex flex-col items-center">
          <img 
            src={studyChainImage} 
            alt="Study Chain" 
            className="w-[280px] h-[260px] object-cover rounded-t-lg mb-6" 
          />
          <h2 className="text-2xl font-bold text-black mb-4">
            STUDY CHAIN
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            World’s First Blockchain Platform Rewarding Learning with Crypto!
          </p>
          <button 
            className="bg-primary-purple text-white px-6 py-3 rounded-full text-lg"
          onClick={() => navigate('/Content')}
          >
            Learn More
          </button>
        </div>

        {/* Utility Token Card */}
        <div className="bg-white rounded-lg text-center w-[400px] h-[550px] p-6 flex flex-col items-center">
          <img 
            src={studyTokenImage} 
            alt="Study Token" 
            className="w-[280px] h-[260px] object-cover rounded-t-lg mb-6" 
          />
          <h2 className="text-2xl font-bold text-black mb-4">
            #STUDY
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            $STUDY is the utility token rewarding students in a blockchain-powered education ecosystem.
          </p>
          <button className="bg-primary-purple text-white px-6 py-3 rounded-full text-lg"onClick={() => navigate('/Content')}>
         
            Learn More
          </button>
        </div>

        {/* HEX ID Card */}
        <div className="bg-white rounded-lg text-center w-[400px] h-[550px] p-6 flex flex-col items-center">
          <img 
            src={hexIdImage} 
            alt="HEX ID" 
            className="w-[280px] h-[260px] object-cover rounded-t-lg mb-6" 
          />
          <h2 className="text-2xl font-bold text-black mb-4">
            HEX ID
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your unique on-chain learning profile to store and track your educational achievements.
          </p>
          <button className="bg-primary-purple text-white px-6 py-3 rounded-full text-lg"
          onClick={() => navigate('/Content')}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransformingLearning;