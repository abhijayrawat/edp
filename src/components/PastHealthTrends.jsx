import React from 'react';

const trends = [
  { title: 'Cardiac Arrest', date: 'Feb, 14' },
  { title: 'Fall Detection', date: 'Feb, 14' },
  { title: 'Low spO2', date: 'Feb, 14' },
  { title: 'Low spO2', date: 'Feb, 14' },
  { title: 'High BP', date: 'Feb, 13' },
  { title: 'Low Heart Rate', date: 'Feb, 12' },
];

const PastHealthTrends = () => {
  return (
    <div className="bg-gradient-to-br from-[#6E8A00] to-[#000000] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer h-full">
      <h3 className="text-white font-bold text-xl mb-5">Past Health Trends</h3>
      <div className="flex flex-col gap-2 h-[240px] overflow-y-auto overflow-x-hidden custom-scrollbar">
        {trends.map((trend, idx) => (
          <div
            key={idx}
            className="flex items-center h-12 bg-transparent rounded-lg"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-[#9FC700] rounded-lg mr-3">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6l-4-4H4zm0 2h7v3h3v9H4V4z" />
              </svg>
            </div>
            <div className="flex-1 flex items-center bg-white rounded-lg h-10 pl-3 pr-3 hover:scale-105 hover:shadow-md transition-transform transition-shadow duration-200 cursor-pointer">
              <span className="text-[#202020] font-bold text-sm flex-1">
                {trend.title}
              </span>
              <span className="bg-[#F4F4F4] text-[#2F2F2F] text-xs px-3 py-0.5 rounded-full font-medium">
                {trend.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastHealthTrends;