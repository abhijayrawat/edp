import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex h-screen bg-gray-50 items-center justify-center p-4">
      <div className="flex w-full max-w-[880px] bg-white rounded-[20px] shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Left Section */}
        <div className="w-[400px] bg-[#95C11E] p-8 text-white flex flex-col relative rounded-l-[20px] overflow-hidden">
          <h1 className="text-[40px] font-medium mb-auto relative z-10 animate-fadeIn">Welcome!</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative overflow-hidden">
              <img 
                src="/hands-illustration.svg" 
                alt="Caring hands illustration" 
                className="absolute w-[160%] h-[160%] object-cover -left-[30%] -top-[30%] animate-float"
                style={{
                  filter: 'contrast(0.8) brightness(1.1)',
                  mixBlendMode: 'soft-light'
                }}
              />
            </div>
          </div>
          <div className="text-center relative z-10 mt-auto animate-fadeIn">
            <h2 className="text-[32px] font-medium">Your health</h2>
            <p className="text-[32px] font-medium">is our priority.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-8 bg-white">
          <div className="max-w-[360px] mx-auto">
            {/* Logo */}
            <div className="mb-12 transform hover:scale-105 transition-transform">
              <img src="/nex-care.png" alt="NexCare Logo" className="h-7" />
            </div>

            {/* Form Header */}
            <h2 className="text-2xl font-medium mb-2">Create an account</h2>
            <p className="text-sm text-gray-600 mb-6">
              Already have an account?{' '}
              <Link to="/login" className="text-[#95C11E] hover:underline font-medium transition-colors hover:text-[#86AE1B]">
                Log in
              </Link>
            </p>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-100 rounded-lg border-2 border-transparent focus:border-[#95C11E] focus:bg-white focus:outline-none transition-all duration-300"
                  />
                </div>
                <div className="flex-1 group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-100 rounded-lg border-2 border-transparent focus:border-[#95C11E] focus:bg-white focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-100 rounded-lg border-2 border-transparent focus:border-[#95C11E] focus:bg-white focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="relative group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-100 rounded-lg border-2 border-transparent focus:border-[#95C11E] focus:bg-white focus:outline-none transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="rounded text-[#95C11E] focus:ring-[#95C11E] transition-colors"
                />
                <label htmlFor="agreeToTerms" className="text-sm group-hover:text-gray-700">
                  I agree to the{' '}
                  <Link to="/terms" className="text-[#95C11E] hover:text-[#86AE1B] hover:underline transition-colors">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !formData.agreeToTerms}
                className="w-full bg-[#95C11E] text-white py-2.5 rounded-lg font-medium hover:bg-[#86AE1B] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </span>
                ) : 'Create account'}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or register with</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                {[
                  { icon: FaGoogle, label: 'Google' },
                  { icon: FaApple, label: 'Apple' },
                  { icon: FaFacebook, label: 'Facebook' }
                ].map((provider) => (
                  <button
                    key={provider.label}
                    type="button"
                    className="p-2.5 rounded-full border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 transform hover:scale-110"
                    aria-label={`Sign up with ${provider.label}`}
                  >
                    <provider.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 