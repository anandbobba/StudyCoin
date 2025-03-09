import React from 'react';
import hexImage from '../assets/hex.png'; // Import the image
import blockchainBg from '../assets/blockchainbg.png'; // Import the background image

const Hex = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${blockchainBg})`,
        width: '1926px',
        height: '1100px',
      }}
    >
      <div className="container mx-auto px-4 py-8 h-full">
        <div className="flex flex-col md:flex-row items-center h-full">
          {/* Text Content on the Left */}
          <div className="md:w-1/2 text-left text-gray-300 h-full flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">
              Interactuating the Hex ID - Your Unique Identifier in the StudyCoin Ecosystem
            </h1>
            <p className="text-lg mb-6">
              At StudyCoin, we aim to revolutionize the way you earn, learn, and engage with education. To ensure seamless transactions and secure tracking of your rewards, we’ve introduced the Hex ID, a unique identifier for each user within the StudyCoin platform.
            </p>
            <div>
              <h2 className="text-2xl font-semibold mb-4">What is the Hex ID?</h2>
              <p className="mb-4">
                The Hex ID is a blockchain-powered, alphanumeric identifier assigned to every user when they join the StudyCoin ecosystem. This unique ID serves as the key to access and track your earned tokens, ensuring a personalized and secure experience. Think of it as your personal digital address within the StudyCoin world.
              </p>
              <h2 className="text-2xl font-semibold mb-4">How Does the Hex ID Work?</h2>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>Assigned Upon Registration:</strong> Your Hex ID is generated automatically when you register with StudyCoin. It’s unique to you and linked to your profile and accumulated rewards.
                </li>
                <li className="mb-2">
                  <strong>Secure Tracking:</strong> Your Hex ID ensures that all your earned StudyCoin tokens are safely stored and tracked, allowing you to maintain complete control over your balance.
                </li>
                <li className="mb-2">
                  <strong>Ready for Token Exchange:</strong> When StudyCoin tokens are listed on the market, your Hex ID will serve as the gateway to convert your tokens into real-world value via supported cryptocurrency platforms.
                </li>
              </ul>
              <h2 className="text-2xl font-semibold mb-4">Why the Hex ID?</h2>
              <ul className="list-disc list-inside mb-4">
                <li className="mb-2">
                  <strong>Security:</strong> Using a cryptographically generated identifier ensures that your data is secure and unique.
                </li>
                <li className="mb-2">
                  <strong>Simplicity:</strong> Easily track your rewards and exchange them without the complexity of managing multiple wallets or addresses.
                </li>
                <li className="mb-2">
                  <strong>Blockchain Integration:</strong> The Hex ID will be fully compatible with blockchain technology, empowering you with the flexibility to convert your rewards into cryptocurrency once StudyCoin tokens are listed.
                </li>
              </ul>
              <p className="text-lg">
                With your unique Hex ID, you’re one step closer to making your educational journey more rewarding.
              </p>
            </div>
          </div>

          {/* Image on the Right */}
          <div className="md:w-1/2 flex justify-center md:justify-end h-full items-center">
            <img
              src={hexImage}
              alt="Hex ID"
              style={{ width: '695px', height: '465px' }} // Set image size to 695x465
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hex;