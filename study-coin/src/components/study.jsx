import React from 'react';

const Study = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white"> {/* Set background color to white */}
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-8 py-12 md:py-24"> {/* Adjust padding for responsiveness */}
        {/* Text Content Section (Left) */}
        <div 
          className="text-left pr-0 md:pr-12"
          style={{ width: '100%', maxWidth: '1216px' }} // Make width responsive
        >
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-8">
            SSTUDY Token - The Key to Unlocking Education Rewards
          </h1>

          {/* First Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-black mb-8 leading-relaxed">
            At the heart of the StudyChain ecosystem is the SSTUDY token, a blockchain-based utility token that empowers students by converting their academic achievements into real-world value. With SSTUDY, learning is more than just an academic pursuit – it’s a pathway to valuable rewards.
          </p>

          {/* Subheading: What is the SSTUDY Token? */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-6">
            What is the SSTUDY Token?
          </h2>

          {/* Second Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-black mb-8 leading-relaxed">
            The SSTUDY token is the native utility token of the StudyChain platform, rewarding students for their efforts throughout their educational journey. Students earn SSTUDY tokens by engaging with lessons, providing correct answers, completing tasks, and progressing through more difficult challenges. Consistency in learning and mastering content brings bigger rewards, ensuring a continuous and rewarding learning experience.
          </p>

          {/* Subheading: Why SSTUDY Token? */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-6">
            Why SSTUDY Token?
          </h2>

          {/* List Items */}
          <ul className="text-base sm:text-lg md:text-xl text-black mb-8 list-disc list-inside pl-5 leading-relaxed">
            <li className="mb-4">
              <strong>Continuous Learning Rewards:</strong> Earn SSTUDY tokens not only for completing tasks but also for staying consistent in your learning journey.
            </li>
            <li className="mb-4">
              <strong>Real-World Value:</strong> Exchange your tokens for exciting real-world rewards like coupons, gift cards, premium courses, and even gadgets.
            </li>
            <li className="mb-4">
              <strong>Blockchain-Powered Transparency:</strong> SSTUDY token ensures secure, transparent tracking of your earned rewards.
            </li>
          </ul>

          {/* Final Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
            Start earning SSTUDY tokens today by simply engaging in your education, and watch your efforts translate into valuable rewards!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Study;