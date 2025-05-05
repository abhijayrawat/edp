import React, { useEffect, useState } from 'react';

const NotificationCard = () => {
  const [alert, setAlert] = useState(null);
  const [alertActive, setAlertActive] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Handle storage event for detecting new alerts
  const handleStorageChange = (event) => {
    if (event.key === 'incomingAlert') {
      const alertPayload = JSON.parse(event.newValue);
      setAlert(alertPayload);
      setAlertActive(true);
      setShowToast(true);
    }
  };

  useEffect(() => {
    // Check if there is already an alert in localStorage
    const storedAlert = localStorage.getItem('incomingAlert');
    if (storedAlert) {
      const alertPayload = JSON.parse(storedAlert);
      setAlert(alertPayload);
      setAlertActive(true);
    }

    // Listen for changes in localStorage across tabs
    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Clear the alert and reset the background
  const clearAlert = () => {
    localStorage.removeItem('incomingAlert');
    setAlert(null);  // Set alert to null
    setAlertActive(false);
  };

  if (!alert) {
    // If there's no alert, show 'No Alert' message
    return (
      <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border-4 border-transparent">
        <div className="flex justify-between items-center">
          <div className="max-w-[60%]">
            <h3 className="text-gray-500 font-semibold text-2xl mb-4">No Alert</h3>
            <p className="text-gray-700 font-medium text-lg mb-4">There are currently no active alerts.</p>
          </div>
          <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
            <span>No Alert</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-between">
          <span className="font-semibold">New High Alert Triggered!</span>
          <button
            onClick={() => setShowToast(false)}
            className="ml-4 text-xl font-semibold hover:text-red-200"
          >
            &times;
          </button>
        </div>
      )}

      {/* Notification Card */}
      <div
        className={`bg-white rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ${
          alertActive ? 'border-4 border-red-500' : 'border-4 border-transparent'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="max-w-[60%]">
            <h3 className="text-red-500 font-bold text-2xl mb-4">
              {alertActive ? '⚠️ High Alert Notification' : 'No Alert'}
            </h3>
            <p className="text-gray-700 font-medium text-lg mb-4">
              {alertActive
                ? 'A high alert has been triggered. Please check immediately.'
                : 'There are currently no active alerts.'}
            </p>
          </div>
          <div className="w-32 h-32">
            {alertActive ? (
              <img
                src="/alert.png" // Replace with your actual alert icon
                alt="Alert Icon"
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                <span>No Alert</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 w-full">
          {alertActive && (
            <div className="text-red-500 font-semibold text-lg">
              <p>{alert.message}</p>
              <p className="text-sm text-gray-500">
                Triggered at: {new Date(alert.timestamp).toLocaleString()}
              </p>
            </div>
          )}
        </div>

        {/* Clear Alert Button */}
        {alertActive && (
          <div className="mt-6 flex justify-center">
            <button
              className="bg-red-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-red-600 transition-all duration-300 ease-in-out"
              onClick={clearAlert}
            >
              Clear Alert
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
