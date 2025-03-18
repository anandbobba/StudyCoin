import React from 'react';

const SubscribeSection = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center bg-violet-500 w-full px-4 py-10 md:h-[300px] md:max-w-7xl mx-auto"
    >
      {/* Content Container */}
      <div className="text-center text-white max-w-2xl">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to our newsletter
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg mb-8">
          Receive emails about token listings and how you can start exchanging your earned tokens for crypto once we reach sufficient volume!
        </p>

        {/* Email Input and Button */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
          {/* Email Input */}
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full md:w-[400px] px-6 py-3 rounded-full text-black focus:outline-none"
          />

          {/* Send Button */}
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors w-full md:w-auto">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
