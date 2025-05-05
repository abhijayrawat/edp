import React from 'react';

const LiveLocation = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[#6D8900] font-semibold text-xl">Live Location</h3>
          <div className="flex space-x-1 cursor-pointer hover:scale-125 transition-transform duration-200">
            <div className="w-1 h-1 rounded-full bg-[#9FC700]"></div>
            <div className="w-1 h-1 rounded-full bg-[#9FC700]"></div>
            <div className="w-1 h-1 rounded-full bg-[#9FC700]"></div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-64">
        <img
          src="path/to/map-image.png" // Replace with the actual path to the map image
          alt="Map"
          className="w-full h-full object-cover"
        />

        {/* Location Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-[#9FC700]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span className="text-[#9FC700] font-bold text-lg">RA-345</span>
            </div>
            <span className="text-[#ECFFA0] text-sm">Nabapally, Sector IV</span>
          </div>

          {/* Directions Button */}
          <button className="bg-[#9FC700] text-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-[#7FB800] hover:scale-105 transition-all duration-200">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveLocation;