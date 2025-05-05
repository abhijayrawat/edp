import React from 'react';

const HeartRate = () => {
  return (
    <div className="bg-gradient-to-br from-black to-[#777777] rounded-2xl p-5 shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer h-full relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold text-xl">Heart Rate</h3>
        <button
          aria-label="More options"
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 cursor-pointer hover:bg-[#232323] hover:shadow-md"
        >
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#FFAFAF]"></div>
            <div className="w-2 h-2 rounded-full bg-[#FF6464]"></div>
            <div className="w-2 h-2 rounded-full bg-[#FF0000]"></div>
          </div>
        </button>
      </div>

      {/* Image Placeholder */}
      <div className="h-32 flex items-center justify-center">
        <img
          src="heartrate.svg" // Replace with the actual path to the image
          alt="Heart Rate Visualization"
          className="h-full object-contain"
        />
      </div>

      {/* Info shifted to the bottom left */}
      <div className="absolute bottom-4 left-4 text-left">
        <div className="text-[#B6E401] text-5xl font-normal mb-2">92 bpm</div>
        <div className="flex items-center text-[#ECFFA0] text-sm">
          <span className="mr-1">+</span>
          <span>0.2% from last week</span>
        </div>
      </div>
    </div>
  );
};

export default HeartRate;