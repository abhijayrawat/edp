import React from 'react';

const TokenEarned = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#6D8900] font-semibold text-xl">Token Earned</h3>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#9FC700] hover:bg-[#e6f7c7] transition-all duration-200 cursor-pointer hover:scale-110">
          <svg className="w-4 h-4 text-white hover:text-[#9FC700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
        </button>
      </div>

      {/* Graph Section */}
      <div className="relative h-42 mb-10">
        <svg
          viewBox="0 0 200 80"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Area */}
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9FC700" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9FC700" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0 60 L20 50 L40 55 L60 40 L80 45 L100 30 L120 50 L140 35 L160 20 L180 25 L200 10 L200 80 L0 80 Z"
            fill="url(#gradient)"
          />
          {/* Line */}
          <path
            d="M0 60 L20 50 L40 55 L60 40 L80 45 L100 30 L120 50 L140 35 L160 20 L180 25 L200 10"
            stroke="#9FC700"
            strokeWidth="2"
            fill="none"
          />
          {/* Dots */}
          <circle cx="20" cy="50" r="3" fill="#9FC700" />
          <circle cx="60" cy="40" r="3" fill="#9FC700" />
          <circle cx="100" cy="30" r="3" fill="#9FC700" />
          <circle cx="160" cy="20" r="3" fill="#9FC700" />
          {/* Labels */}
          <text x="20" y="70" fill="#9FC700" fontSize="10" textAnchor="middle">Jan</text>
          <text x="100" y="70" fill="#9FC700" fontSize="10" textAnchor="middle">Jan</text>
          <text x="160" y="70" fill="#9FC700" fontSize="10" textAnchor="middle">Mar</text>
        </svg>
      </div>

      {/* Token and People Helped Section */}
      <div className="flex justify-center items-center gap-45">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2">
            <svg viewBox="0 0 24 24" fill="#9FC700">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <span className="text-[#9FC700] text-2xl font-medium">627</span>
            <p className="text-[#474747] text-xs">Ethereum Earned</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2">
            <svg viewBox="0 0 24 24" fill="#FFBB00">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div>
            <span className="text-[#9FC700] text-2xl font-medium">38</span>
            <p className="text-[#474747] text-xs">People Helped</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenEarned;