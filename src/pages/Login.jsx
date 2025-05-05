import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded user credentials
  const users = [
    { email: "family@example.com", password: "family123", type: "family", dashboard: "/family" },
    { email: "provider@example.com", password: "provider123", type: "provider", dashboard: "/healthcare" },
    { email: "neighbor@example.com", password: "neighbor123", type: "neighbor", dashboard: "/neighbor" }
  ];

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = () => {
    // Reset error message
    setError("");
    
    // Find user with matching credentials
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Store user type in localStorage for future reference
      localStorage.setItem("userType", user.type);
      localStorage.setItem("userEmail", user.email);
      
      // Redirect to the appropriate dashboard
      navigate(user.dashboard);
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };
 
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ededed]">
      <div className="bg-white rounded-2xl shadow-lg flex overflow-hidden max-w-4xl w-full">
        {/* Left: Welcome/Visual */}
        <div className="bg-[#9FC700] w-2/5 p-8 flex flex-col justify-between text-white">
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
          <div className="text-2xl font-medium text-center hover:text-[#f1f9e3] transition-colors duration-200">
            Your health<br />is our priority.
          </div>
        </div>

        {/* Right: Login Form */}
        <div className="w-3/5 p-8">
          <div className="flex items-center mb-6">
            <img
              src="/Union.svg"
              alt="NexCare"
              className="w-10 h-10 hover:rotate-[360deg] transition-transform duration-500"
            />
            <span className="ml-2 text-3xl font-bold hover:text-[] transition-colors duration-200">
              NexCare
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-2 hover:underline transition-all duration-200">
            Log in
          </h2>
          <p className="text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-200">
            Welcome back! Please fill your email & password to log into your account.
          </p>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#84A500] hover:shadow-md transition-shadow duration-200"
            />
          </div>

          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-[#84A500] hover:shadow-md transition-shadow duration-200"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-200"
            >
              <img
                src={showPassword ? "/eye-off.svg" : "/eye.svg"}
                className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity duration-200"
              />
            </button>
          </div>

          <div className="flex items-center justify-end mb-7">
            <a
              href="/forgot-password"
              className="text-[#84A500] text-sm hover:underline transition-all duration-200"
            >
              Forgot password?
            </a>
          </div>

          {/* Log In Button */}
          <button 
            onClick={handleLogin} 
            className="w-full bg-[#84A500] text-white py-2 rounded-lg text-sm font-bold hover:bg-[#9fc700] hover:scale-105 transition-all duration-200"
          >
            Log in
          </button>

          {/* Sign Up Button */}
          <button
            onClick={handleSignUpClick}
            className="w-full bg-white text-[#84A500] py-2 rounded-lg text-sm font-bold border border-[#84A500] mt-2 hover:bg-[#f1f9e3] hover:scale-105 transition-all duration-200"
          >
            Sign up
          </button>

          <div className="text-center text-gray-500 my-4 hover:text-gray-700 transition-colors duration-200">
            or log in with
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

          {/* Demo Credentials Box */}
          <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm font-bold text-gray-700 mb-2">Demo Credentials:</p>
            <div className="text-xs space-y-1">
              <p><span className="font-medium">Family Member:</span> family@example.com / family123</p>
              <p><span className="font-medium">Healthcare Provider:</span> provider@example.com / provider123</p>
              <p><span className="font-medium">Neighbor:</span> neighbor@example.com / neighbor123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;