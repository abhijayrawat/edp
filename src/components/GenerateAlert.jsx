import React from 'react';

const GenerateAlert = () => {
  return (
    <div className="bg-[#F7FFD9] rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="flex justify-between items-start">
        <div className="max-w-[60%]">
          <h3 className="text-[#000000] font-bold text-xl mb-4">Generate High Alert</h3>
          <p className="text-[#818181] font-medium text-base">
            If you want to make sure there is a high alert generate it by pressing the button!
          </p>
        </div>
        <div className="w-32 h-32">
          <img
            src="Assistance.svg" // Replace with your radar image
            alt="Radar Chart"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Smooth Slide Button */}
      <div className="mt-8 w-full">
        <div className="group bg-gradient-to-r from-[#B6E401] to-[#4D6100] rounded-full p-1 flex items-center justify-between cursor-pointer transition-all duration-500 ease-in-out hover:from-[#A4D000] hover:to-[#3C5000] hover:shadow-lg hover:scale-[1.02]">
          <span className="text-white font-semibold px-6 py-3 transition-all duration-500 ease-in-out">
            Slide to Generate Alert Ping
          </span>
          <div className="bg-white rounded-full p-2 mr-2 transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:shadow-md">
            <svg
              className="w-4 h-4 text-[#4D6100] transition-all duration-500 ease-in-out"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateAlert;
