import React, { useEffect, useState } from 'react';

const OxygenLevel = () => {
  const [oxygenLevel, setOxygenLevel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchOxygenLevel = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/vitals/spo2'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Assuming API returns: { oxygen: 95 }
        setOxygenLevel(data.spo2);
        // console.log(data); // Debugging line to check the response
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchOxygenLevel(); // Initial fetch
    intervalId = setInterval(fetchOxygenLevel, 2500); // Fetch every second

    return () => clearInterval(intervalId); // Cleanup
  }, []);
  

  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer h-full relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#6D8900] font-semibold text-xl">Oxygen Level</h3>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#9FC700] hover:bg-[#e6f7c7] transition-all duration-200 cursor-pointer hover:scale-110">
          <svg className="w-4 h-4 text-white hover:text-[#9FC700]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
        </button>
      </div>

      {/* Graph Placeholder */}
      <div className="h-32 flex items-center justify-center">
        <svg
          viewBox="0 0 200 80"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 40 C 50 10, 150 70, 200 40"
            stroke="#9FC700"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
          />
          <path
            d="M0 40 C 50 20, 150 60, 200 40"
            stroke="#9FC700"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="100" cy="40" r="5" fill="#9FC700" />
        </svg>
      </div>

      {/* Data display */}
      <div className="absolute bottom-4 left-4 text-left">
        {oxygenLevel !== null ? (
          <div className="text-[#9FC700] text-5xl font-normal mb-2">
            {oxygenLevel}%
          </div>
        ) : (
          <div className="text-gray-400 text-lg">Loading...</div>
        )}
        {error ? (
          <div className="text-red-500 text-sm mt-1">Error: {error}</div>
        ) : (
          <div className="flex items-center text-[#474747] text-sm">
            {/* <span className="mr-1">±</span>
            <span>0.2% from last week</span> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default OxygenLevel;
