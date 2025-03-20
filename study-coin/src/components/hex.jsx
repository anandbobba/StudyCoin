import React from 'react';

const Hex = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-violet-800"> {/* Set background color to violet */}
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-8 py-12 md:py-24"> {/* Adjust padding for responsiveness */}
        {/* Text Content Section (Left) */}
        <div 
          className="text-left pr-0 md:pr-12"
          style={{ width: '100%', maxWidth: '1216px' }} // Make width responsive
        >
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-8">
            Interactuating the Hex ID - Your Unique Identifier in the StudyCoin Ecosystem
          </h1>

          {/* First Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 leading-relaxed">
            At StudyCoin, we aim to revolutionize the way you earn, learn, and engage with education. To ensure seamless transactions and secure tracking of your rewards, we’ve introduced the Hex ID, a unique identifier for each user within the StudyCoin platform.
          </p>

          {/* Subheading: What is the Hex ID? */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-6">
            What is the Hex ID?
          </h2>

          {/* Second Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 leading-relaxed">
            The Hex ID is a blockchain-powered, alphanumeric identifier assigned to every user when they join the StudyCoin ecosystem. This unique ID serves as the key to access and track your earned tokens, ensuring a personalized and secure experience.
          </p>

          {/* Subheading: How Does the Hex ID Work? */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-6">
            How Does the Hex ID Work?
          </h2>

          {/* List Items */}
          <ul className="text-base sm:text-lg md:text-xl text-white mb-8 list-disc list-inside pl-5 leading-relaxed">
            <li className="mb-4">
              <strong>Assigned Upon Registration:</strong> Your Hex ID is generated automatically when you register with StudyCoin. It’s unique to you and linked to your profile and accumulated rewards.
            </li>
            <li className="mb-4">
              <strong>Secure Tracking:</strong> Your Hex ID ensures that all your earned StudyCoin tokens are safely stored and tracked, allowing you to maintain complete control over your balance.
            </li>
            <li className="mb-4">
              <strong>Ready for Token Exchange:</strong> When StudyCoin tokens are listed on the market, your Hex ID will serve as the gateway to convert your tokens into real-world value via supported cryptocurrency platforms.
            </li>
          </ul>

          {/* Subheading: Why the Hex ID? */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-6">
            Why the Hex ID?
          </h2>

          {/* List Items */}
          <ul className="text-base sm:text-lg md:text-xl text-white mb-8 list-disc list-inside pl-5 leading-relaxed">
            <li className="mb-4">
              <strong>Security:</strong> Using a cryptographically generated identifier ensures that your data is secure and unique.
            </li>
            <li className="mb-4">
              <strong>Simplicity:</strong> Easily track your rewards and exchange them without the complexity of managing multiple wallets or addresses.
            </li>
            <li className="mb-4">
              <strong>Blockchain Integration:</strong> The Hex ID will be fully compatible with blockchain technology, empowering you with the flexibility to convert your rewards into cryptocurrency once StudyCoin tokens are listed.
            </li>
          </ul>

          {/* Final Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
            With your unique Hex ID, you’re one step closer to making your educational journey more rewarding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hex;
