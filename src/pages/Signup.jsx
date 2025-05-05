import React, { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); // Toggle the state
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ededed] px-4">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
        {/* Left: Welcome/Visual */}
        <div className="bg-[#9FC700] w-full md:w-2/5 p-8 flex flex-col justify-between text-white">
          <h1 className="text-4xl font-bold relative group">
            Welcome!
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-45"></span>
          </h1>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/hands.png"
              alt="Connecting hands"
              className="max-w-full hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="text-2xl font-medium text-right hover:text-[#f1f9e3] transition-colors duration-200">
            Your health<br />is our priority.
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-3/5 p-8">
          <div className="flex items-center mb-6">
            <img
              src="/Union.svg"
              alt="NexCare"
              className="w-10 h-10 hover:rotate-[360deg] transition-transform duration-500"
            />
            <span className="ml-2 text-3xl font-bold hover:text-[#84A500] transition-colors duration-200">
              NexCare
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-2 hover:underline transition-all duration-200">
            Create an account
          </h2>
          <p className="text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-200">
            Already have an account?{" "}
            <a href="/" className="text-[#84A500] hover:underline">
              Log in
            </a>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First name"
              className="input border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#84A500] hover:shadow-md transition-shadow duration-200"
            />
            <input
              type="text"
              placeholder="Last name"
              className="input border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#84A500] hover:shadow-md transition-shadow duration-200"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="input border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#84A500] hover:shadow-md transition-shadow duration-200 w-full"
            />
          </div>

          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              placeholder="Enter your password"
              className="input border border-gray-300 rounded-lg px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-[#84A500] hover:shadow-md transition-shadow duration-200 w-full"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility} // Toggle visibility on click
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-200"
            >
              <img
                src={showPassword ? "/eye-off.svg" : "/eye.svg"} // Change icon dynamically
                alt={showPassword ? "Hide password" : "Show password"} // Dynamic alt text
                className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity duration-200"
              />
            </button>
          </div>

          <div className="flex items-start mb-6">
            <input type="checkbox" id="terms" className="mt-2" />
            <label
              htmlFor="terms"
              className="ml-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              I agree to the{" "}
              <span className="text-[#84A500] hover:underline">
                Terms & Conditions
              </span>
            </label>
          </div>

          <button className="w-full bg-[#84A500] text-white py-2 rounded-lg text-sm font-bold hover:bg-[#9fc700] hover:scale-105 transition-all duration-200 mb-8">
            Create account
          </button>

          <div className="text-center text-gray-500 mb-4 hover:text-gray-700 transition-colors duration-200">
            or register with
          </div>

          <div className="flex justify-center gap-4">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-200">
              <img src="/google.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-200">
              <img src="/apple.svg" alt="Apple" className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-200">
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;