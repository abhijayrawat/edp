import React from "react";
import Navbar from "../components/Navbar";
import PatientDetails from "../components/PatientDetails";
import ECGGraph from "../components/ECGGraph";
// import BodyTemperature from "../components/BodyTemperature";
// import OxygenLevel from "../components/OxygenLevel";
// import HeartRate from "../components/HeartRate";
// import LiveLocation from "../components/LiveLocation";
// import PastHealthTrends from "../components/PastHealthTrends";
// import TokenEarned from "../components/TokenEarned";
// import HealthCentre from "../components/HealthCentre";
// import GenerateAlert from "../components/GenerateAlert";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f3f4f6] p-6">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col gap-6">
        {/* Top Section: PatientDetails and ECGGraph side by side on large screens */}
        <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-grow lg:w-2/3 w-full min-w-0">
              <ECGGraph />
          </div>
          <div className="flex-shrink-0 lg:w-1/3 w-full min-w-0">
            <PatientDetails />
          </div>
        </div>

        {/* Metrics Section: Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <BodyTemperature /> */}
          <div className="bg-white rounded-2xl min-h-[180px] flex items-center justify-center font-bold text-[#afd42a] text-xl">
            Body Temperature
          </div>
          {/* <OxygenLevel /> */}
          <div className="bg-white rounded-2xl min-h-[180px] flex items-center justify-center font-bold text-[#afd42a] text-xl">
            Oxygen Level
          </div>
          {/* <HeartRate /> */}
          <div className="bg-black rounded-2xl min-h-[180px] flex items-center justify-center font-bold text-[#afd42a] text-xl">
            Heart Rate
          </div>
          {/* <LiveLocation /> */}
          <div className="bg-white rounded-2xl min-h-[180px] flex items-center justify-center font-bold text-[#afd42a] text-xl">
            Live Location
          </div>
        </div>

        {/* Bottom Section: Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <PastHealthTrends /> */}
          <div className="bg-[#283618] rounded-2xl min-h-[180px] flex items-center justify-center font-bold text-white text-xl">
            Past Health Trends
          </div>
          {/* <TokenEarned /> */}
          <div className="bg-white rounded-2xl min-h-[180px] flex items-center justify-center font-bold text-[#afd42a] text-xl">
            Token Earned
          </div>
          {/* <HealthCentre /> */}
          <div className="bg-white rounded-2xl min-h-[180px] flex items-center justify-center font-bold text-[#afd42a] text-xl">
            Health Centre
          </div>
          {/* <GenerateAlert /> */}
          <div className="bg-[#afd42a] rounded-2xl min-h-[180px] flex items-center justify-center font-bold text-[#181a14] text-xl">
            Generate Alert
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
