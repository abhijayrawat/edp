import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ededed]">
      <div className="bg-white rounded-2xl shadow-lg flex overflow-hidden max-w-4xl w-full">
        {/* Left: Welcome/Visual */}
        <div className="bg-[#afd42a] w-2/5 p-8 flex flex-col justify-between text-white">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <div className="flex-1 flex items-center justify-center">
            {/* Replace with your hands image */}
            <img src="/hands.png" alt="Connecting hands" className="max-w-full" />
          </div>
          <div className="text-2xl font-medium text-right">
            Your health<br />is our priority.
          </div>
        </div>
        
        {/* Right: Form */}
        <div className="w-3/5 p-8">
          <div className="flex items-center mb-6">
            <img src="/logo.svg" alt="NexCare" className="w-10 h-10" />
            <span className="ml-2 text-3xl font-bold">NexCare</span>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">Create an account</h2>
          <p className="text-gray-600 mb-6">
            Already have an account? <a href="/login" className="text-[#afd42a]">Log in</a>
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="First name" className="input" />
            <input type="text" placeholder="Last name" className="input" />
          </div>
          
          <div className="mb-4">
            <input type="email" placeholder="Email" className="input" />
          </div>
          
          <div className="mb-6 relative">
            <input type="password" placeholder="Enter your password" className="input pr-10" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <img src="/eye.svg" alt="Show password" className="w-5 h-5 opacity-60" />
            </button>
          </div>
          
          <div className="flex items-start mb-6">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="ml-2 text-gray-700">
              I agree to the <span className="text-[#afd42a]">Terms & Conditions</span>
            </label>
          </div>
          
          <button className="btn btn-primary w-full mb-8">Create account</button>
          
          <div className="text-center text-gray-500 mb-4">or register with</div>
          
          <div className="flex justify-center gap-4">
            <button className="p-2 rounded-full border border-gray-200">
              <img src="/google.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full border border-gray-200">
              <img src="/apple.svg" alt="Apple" className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full border border-gray-200">
              <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
