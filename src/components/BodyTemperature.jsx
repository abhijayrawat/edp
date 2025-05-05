import React from 'react';

const BodyTemperature = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer h-full relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#6D8900] font-semibold text-xl">Body Temp.</h3>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#9FC700] hover:bg-[#e6f7c7] transition-all duration-200 cursor-pointer hover:scale-110">
          <svg className="w-4 h-4 text-white hover:text-[#9FC700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
        </button>
      </div>

      {/* Image Placeholder */}
      <div className="h-32 rounded-lg flex items-center justify-center">
        <img
          src="BodyTemp.svg" // Replace with the actual path to the image
          alt="Body Temperature Visualization"
          className="h-full object-contain"
        />
      </div>

      {/* Info at the bottom */}
      <div className="absolute bottom-4 left-4 text-left">
        <div className="text-[#9FC700] text-5xl font-normal mb-2">36.8°C</div>
        <div className="flex items-center text-[#474747] text-sm">
          <span className="mr-1">±</span>
          <span>0.2% from last week</span>
        </div>
      </div>
    </div>
  );
};

export default BodyTemperature;