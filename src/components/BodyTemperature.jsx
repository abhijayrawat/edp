import React, { useEffect, useState } from 'react';

const BodyTemperature = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchTemperature = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/vitals/temperature');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data)
        setTemperature(data.temperature);
        setError(null); // Reset error on success
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchTemperature();

    // Start polling every 1 second
    intervalId = setInterval(fetchTemperature, 2500);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer h-full relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#6D8900] font-semibold text-xl">Body Temp.</h3>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#9FC700] hover:bg-[#e6f7c7] transition-all duration-200 cursor-pointer hover:scale-110">
          <svg
            className="w-4 h-4 text-white hover:text-[#9FC700]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
        </button>
      </div>

      <div className="h-32 rounded-lg flex items-center justify-center">
        <img
          src="BodyTemp.svg"
          alt="Body Temperature Visualization"
          className="h-full object-contain"
        />
      </div>

      <div className="absolute bottom-4 left-4 text-left">
        {loading && <div className="text-gray-500">Loading...</div>}
        {error && <div className="text-red-500">Error: {error}</div>}
        {!loading && !error && (
          <div className="text-[#9FC700] text-5xl font-normal mb-2">
            {temperature}°C
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyTemperature;
