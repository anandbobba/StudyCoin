import React from 'react';
import studyTokenBg from '../assets/studytoken.png'; // Background image
import studyTokenImage from '../assets/studytoken1.png'; // Content image

const Study = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen relative" 
      style={{ 
        backgroundImage: `url(${studyTokenBg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
        height: '100vh' 
      }}
    >
      <div 
        className="flex flex-col items-center justify-center rounded-lg p-8" 
        style={{
          width: '1152px',
          height: '700px' // Decreased height
        }}
      >
        <div className="flex flex-row items-center justify-center w-full p-8">
          {/* Content Section */}
          <div className="flex-1 text-left pr-8">
            {/* Main Heading in Black */}
            <h1 className="text-4xl font-bold text-black mb-4 text-center">
              SSTUDY Token - The Key to Unlocking Education Rewards
            </h1>
            
            {/* First Paragraph in Black */}
            <p className="text-xl text-black mb-4 text-center">
              At the heart of the StudyChain ecosystem is the SSTUDY token, a blockchain-based utility token that empowers students by converting their academic achievements into real-world value. With SSTUDY, learning is more than just an academic pursuit – it’s a pathway to valuable rewards.
            </p>
            
            {/* Subheading in Black */}
            <h2 className="text-3xl font-bold text-black mb-3 text-center">
              What is the SSTUDY Token?
            </h2>
            
            {/* Second Paragraph in Black */}
            <p className="text-lg text-black mb-4 text-center">
              The SSTUDY token is the native utility token of the StudyChain platform, rewarding students for their efforts throughout their educational journey. Students earn SSTUDY tokens by engaging with lessons, providing correct answers, completing tasks, and progressing through more difficult challenges. Consistency in learning and mastering content brings bigger rewards, ensuring a continuous and rewarding learning experience.
            </p>
            
            {/* Subheading in Black */}
            <h2 className="text-3xl font-bold text-black mb-3 text-center">
              Why SSTUDY Token?
            </h2>
            
            {/* List Items in Black */}
            <ul className="text-lg text-black mb-4 list-disc list-inside text-center">
              <li>Continuous Learning Rewards: Earn SSTUDY tokens not only for completing tasks but also for staying consistent in your learning journey.</li>
              <li>Real-World Value: Exchange your tokens for exciting real-world rewards like coupons, gift cards, premium courses, and even gadgets.</li>
              <li>Blockchain-Powered Transparency: SSTUDY token ensures secure, transparent tracking of your earned rewards.</li>
            </ul>
            
            {/* Final Paragraph in Black */}
            <p className="text-lg text-black text-center">
              Start earning SSTUDY tokens today by simply engaging in your education, and watch your efforts translate into valuable rewards!
            </p>
          </div>
          
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img 
              src={studyTokenImage} 
              alt="SSTUDY Token" 
              className="w-[585px] h-[585px] object-contain rounded-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;