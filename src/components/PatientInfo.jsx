import React from "react";

const PatientInfo = () => (
  <div className="flex items-center bg-white rounded-full shadow px-4 py-2 w-fit gap-3 mt-6 ml-6 cursor-pointer hover:shadow-md transition-shadow">
    <img 
      src="/Patient-Pic.png" 
      alt="Guru Dutt" 
      className="w-10 h-10 rounded-full object-cover border-2 border-[#afd42a]" 
    />
    <div>
      <div className="font-semibold text-gray-900">Guru Dutt</div>
      <div className="text-xs text-gray-500">Patient</div>
    </div>
    <button className="ml-2 cursor-pointer">
      <svg className="w-5 h-5 text-gray-400 hover:text-[#afd42a] transition-colors" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
      </svg>
    </button>
  </div>
);

export default PatientInfo;
