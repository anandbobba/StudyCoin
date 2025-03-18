import React from 'react';
import studyTokenBg from '../assets/studytoken.png'; // Background image
import studyTokenImage from '../assets/studytoken1.png'; // Content image

const Study = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen relative bg-cover bg-center bg-no-repeat w-full" 
      style={{ backgroundImage: `url(${studyTokenBg})` }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center rounded-lg p-4 sm:p-8 max-w-7xl w-full">
        {/* Content Section */}
        <div className="flex-1 text-center md:text-left p-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
            SSTUDY Token - The Key to Unlocking Education Rewards
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-black mb-4 sm:mb-6">
            At the heart of the StudyChain ecosystem is the SSTUDY token, a blockchain-based utility token that empowers students by converting their academic achievements into real-world value. With SSTUDY, learning is more than just an academic pursuit – it’s a pathway to valuable rewards.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-4">
            What is the SSTUDY Token?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-black mb-4 sm:mb-6">
            The SSTUDY token is the native utility token of the StudyChain platform, rewarding students for their efforts throughout their educational journey. Students earn SSTUDY tokens by engaging with lessons, providing correct answers, completing tasks, and progressing through more difficult challenges. Consistency in learning and mastering content brings bigger rewards, ensuring a continuous and rewarding learning experience.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-4">
            Why SSTUDY Token?
          </h2>

          <ul className="text-base sm:text-lg md:text-xl text-black mb-4 sm:mb-6 list-disc list-inside">
            <li className="mb-2">Continuous Learning Rewards: Earn SSTUDY tokens not only for completing tasks but also for staying consistent in your learning journey.</li>
            <li className="mb-2">Real-World Value: Exchange your tokens for exciting real-world rewards like coupons, gift cards, premium courses, and even gadgets.</li>
            <li className="mb-2">Blockchain-Powered Transparency: SSTUDY token ensures secure, transparent tracking of your earned rewards.</li>
          </ul>

          <p className="text-base sm:text-lg md:text-xl text-black">
            Start earning SSTUDY tokens today by simply engaging in your education, and watch your efforts translate into valuable rewards!
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img 
            src={studyTokenImage} 
            alt="SSTUDY Token" 
            className="w-3/4 sm:w-1/2 md:w-[585px] h-auto object-contain rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Study;
