import React from "react";
import Navbar from "../components/Navbar";
import PatientDetails from "../components/PatientDetails";
import ECGGraph from "../components/ECGGraph";
import BodyTemperature from "../components/BodyTemperature";
import OxygenLevel from "../components/OxygenLevel";
import HeartRate from "../components/HeartRate";
import LiveLocation from "../components/LiveLocation";
import PastHealthTrends from "../components/PastHealthTrends";
import TokenEarned from "../components/TokenEarned";
import HealthCentre from "../components/HealthCentre";
import ProofOfAssistance from "../components/ProofOfAssistance";
// import GenerateAlert from "../components/GenerateAlert";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[1600px] px-2 sm:px-4 py-6 mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto_auto_auto_auto] gap-6 md:gap-x-10 items-stretch aspect-[16/9]"
          >
            {/* ECG Graph (spans 2 columns) */}
            <div className="md:col-span-2 md:row-span-1 h-full">
              <ECGGraph />
            </div>
            {/* Patient Details (right of ECG, spans 1 col, 1 row) */}
            <div className="flex-shrink-0 lg: w-full min-w-0">
              <PatientDetails />
            </div>

            {/* Metrics Row: Body Temp, Oxygen, Heart Rate */}
            <div className="md:col-span-1 md:row-span-1 h-full md:h-[300px]">
            <BodyTemperature />
            </div>
            <div className="md:col-span-1 md:row-span-1 h-full">
              <OxygenLevel />
            </div>
            <div className="md:col-span-1 md:row-span-1 h-full">
              <HeartRate />
            </div>

            {/* Live Location (spans 1 col, 2 rows) */}
            <div className="md:col-span-1 md:row-span-1 h-full flex flex-col">
              <LiveLocation />
            </div>
            {/* Past Health Trends */}
            <div className="md:col-span-1 md:row-span-1 h-full">
              <PastHealthTrends />
            </div>
            {/* Token Earned */}
            <div className="md:col-span-1 md:row-span-1 h-full">
              <TokenEarned />
            </div>
            {/* Health Centre */}
            <div className="md:col-span-1 md:row-span-1 h-full">
              <HealthCentre />
            </div>
            {/* Proof Of Assistance */}
            <div className="md:col-span-1 md:row-span-1 h-full">
              <ProofOfAssistance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
