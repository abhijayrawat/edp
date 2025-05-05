import React from 'react';

const ProofOfAssistance = () => {
  return (
    <div className="bg-[#F7FFD9] rounded-2xl p-6 shadow-lg flex flex-col justify-between h-full hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[#000000] font-bold text-xl mb-9">Proof of Assistance</h3>
          <p className="text-[#818181] font-bold text-base">
            If you reached to the spot and helped your neighbour send us the image for reward!
          </p>
        </div>
        <div className="w-80 h-50">
          <img
            src="Assistance.svg" // Replace with the actual image path
            alt="Radar Chart"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center bg-gradient-to-r from-[#B6E401] to-[#4D6100] rounded-full p-1">
        <input
          type="text"
          placeholder="Type your message here"
          className="ml-1 flex-1 rounded-full px-4 py-2 bg-white text-[#6D8900] placeholder-[#6D8900] focus:outline-none focus:ring-2 focus:ring-[#b6e401] transition-all duration-200"
        />
        <button className="ml-2 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#9FC700] hover:bg-[#e6f7c7] transition-all duration-200 shadow-md">
          <img
            src="camera.svg"
            alt="Camera Icon"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default ProofOfAssistance;