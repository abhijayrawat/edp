import React from 'react';

const HealthCentre = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#6D8900] font-semibold text-xl">Health Centre</h3>
        <button
          aria-label="More options"
          className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 cursor-pointer hover:bg-[#e6f7c7] hover:shadow-md"
        >
          <div className="flex space-x-1">
            <div className="w-1 h-1 rounded-full bg-[#9FC700]"></div>
            <div className="w-1 h-1 rounded-full bg-[#9FC700]"></div>
            <div className="w-1 h-1 rounded-full bg-[#9FC700]"></div>
          </div>
        </button>
      </div>

      {/* Hospital Image */}
      <div className="relative h-60 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="Hospital.svg" // Replace with the actual path to the provided image
          alt="Hospital"
          className="w-full h-full object-cover"
        />

        {/* Apollo Hospital Info Box */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black bg-opacity-40 rounded-lg p-3">
          <div>
            <h4 className="text-white font-semibold text-lg">Jabalpur Hospital</h4>
            <p className="text-gray-300 text-sm">Russel Chowk, Jabalpur</p>
          </div>
          <div className="flex space-x-2">
            {/* Call Button */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#9FC700] hover:bg-[#e6f7c7] transition-all duration-200 shadow-md">
              <img
                src="call.svg" // Replace with the actual call icon image path
                alt="Call Icon"
                className="w-5 h-5"
              />
            </button>
            {/* Map Button (Replaces message button) */}
            <a
              href="https://maps.app.goo.gl/jtyuFNBHj3zj2wEC6" // Directs to the location on Google Maps
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#9FC700] hover:bg-[#e6f7c7] transition-all duration-200 shadow-md"
            >
              <img
                src="Vector.png" // Replace with the actual map icon image path
                alt="Map Icon"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCentre;
