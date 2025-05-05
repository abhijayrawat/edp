// import React, { useEffect, useState } from 'react';
// import BodyTemperature from './BodyTemperature';
// import HeartRate from './HeartRate';
// import SpO2 from './SpO2';

// const API_URL = 'http://127.0.0.1:8000/vitals'; // Replace with your endpoint

// const VitalsDashboard = () => {
//   const [vitals, setVitals] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVitals = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await fetch(API_URL);
//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//         const data = await response.json();
//         console.log(data); // Debugging line to check the response
//         setVitals(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVitals();

//     // Optional: setInterval for polling
//     // const intervalId = setInterval(fetchVitals, 1000);
//     // return () => clearInterval(intervalId);
//   }, []);

//   if (loading) return <div>Loading vitals...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!vitals) return null;

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       <BodyTemperature temperature={vitals.temperature} />
//       <HeartRate heartRate={vitals.heart_rate} />
//       <SpO2 spo2={vitals.spo2} />
//       {/* Add other components as needed */}
//     </div>
//   );
// };

// export default VitalsDashboard;
