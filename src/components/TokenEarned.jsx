import React from 'react';

const TokenEarned = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 cursor-pointer h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[#6D8900] font-semibold text-xl">Token Earned</h3>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#9FC700] hover:bg-[#e6f7c7] transition duration-200 hover:scale-110">
          <svg className="w-4 h-4 text-white hover:text-[#9FC700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
        </button>
      </div>

      {/* Stats Section */}
      <div className="space-y-6">
        {/* Ethereum Earned */}
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition duration-200">
          <div className="w-6 h-6 mr-3">
            <svg viewBox="0 0 24 24" fill="#9FC700">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <span className="text-[#9FC700] text-2xl font-medium">627</span>
            <p className="text-[#474747] text-xs">Ethereum Earned</p>
          </div>
        </div>

        {/* People Helped */}
        <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition duration-200">
          <div className="w-6 h-6 mr-3">
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
