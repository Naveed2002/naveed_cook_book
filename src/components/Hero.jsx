import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-8 pt-20 overflow-hidden">
      {/* Available for Freelance - positioned above the name with some space */}
      <div className="text-gray-700 text-xs sm:text-sm font-sans mb-8 flex items-center bg-white px-4 py-2 rounded-full border border-gray-200">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
        AVAILABLE FOR FREELANCE
      </div>

      {/* First Name */}
      <h2 className="text-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-sans leading-none text-center">
        NAVEED
      </h2>

      {/* Last Name */}
      <h2 className="text-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-sans leading-none mt-2 text-center">
        DEVELOPER
      </h2>

      {/* Location */}
      <p className="text-black text-base sm:text-xl font-sans mt-8 text-center uppercase tracking-widest">
        BASED IN COLOMBO, SL
      </p>

      {/* Title */}
      <p className="text-gray-500 text-sm sm:text-xl font-sans mt-2 text-center font-medium">
        UI/UX DESIGNER + DEVELOPER
      </p>
    </div>
  );
};

export default Hero;