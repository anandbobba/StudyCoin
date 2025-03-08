import React from 'react';

const SubscribeSection = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center bg-violet-500 h-[300px] w-[1200px] ml-auto mr-[260px]" // Added ml-auto and mr-[54px]
    >
      {/* Content Container */}
      <div className="text-center text-white">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">
          Subscribe to our newsletter
        </h1>

        {/* Description */}
        <p className="text-lg mb-8">
          Receive emails about token listings and how you can start exchanging your earned tokens for crypto once we reach sufficient volume!
        </p>

        {/* Email Input and Button */}
        <div className="flex items-center justify-center space-x-4">
          {/* Email Input */}
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-[400px] px-6 py-3 rounded-full text-black focus:outline-none"
          />

          {/* Send Button */}
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;