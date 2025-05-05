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

const FamilyDashboard = () => {
  return (
 
    <div className="flex flex-col gap-10 p-4">
  {/* Navbar */}
  <div className="h-20 w-full">
    <Navbar />
  </div>

  {/* Main section: ECG Graph + Patient Details */}
  <div className="flex flex-wrap gap-10 px-7">
    <div className="flex-1 min-w-[60%]">
      <ECGGraph />
    </div>
    <div className="w-[35%]">
      <PatientDetails />
    </div>
  </div>

  {/* Vitals: Body Temp, Oxygen, Heart Rate, Live Location */}
  <div className="flex flex-wrap gap-10 px-7">
    <div className="w-[18%]">
      <BodyTemperature />
    </div>
    <div className="w-[18%]">
      <OxygenLevel />
    </div>
    <div className="w-[24%]">
      <HeartRate />
    </div>
    <div className="flex-1 min-w-[30%]">
      <LiveLocation />
    </div>
  </div>

  {/* Bottom section: Past Trends, Tokens, Hospital, Proof of Assistance */}
  <div className="flex flex-wrap gap-10 px-7">
    <div className="w-[18%]">
      <PastHealthTrends />
    </div>
    <div className="w-[18%]">
      <TokenEarned />
    </div>
    <div className="w-[24%]">
      {/* Replace this div content with actual Health Centre */}
      <div className="bg-white h-full rounded-xl shadow"><HealthCentre/></div>
    </div>
    <div className="flex-1 min-w-[30%]">
      {/* Replace this div content with actual Proof of Assistance */}
      <div className="bg-white h-full rounded-xl shadow"><ProofOfAssistance/></div>
    </div>
  </div>
</div>

  );
};

export default FamilyDashboard;
