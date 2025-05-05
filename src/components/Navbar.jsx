import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const avatarRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    navigate("/login");
  };

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between w-full px-10 py-3 bg-[#f6f6f6]">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="NexCare" className="w-50 h-18" />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6 h-20">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-40 md:w-56 focus:w-64 md:focus:w-96 hover:w-64 md:hover:w-96 rounded-full bg-white px-4 py-2 pr-10 text-sm shadow focus:outline-none focus:shadow-md hover:shadow-md transition-all duration-300"
          />
          <img
            src="/search.svg"
            alt="Search"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60"
          />
        </div>

        {/* Settings Icon */}
        <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d7f063] bg-white hover:bg-[#f1f9e3] transition-colors cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-200">
          <img src="/settings.svg" alt="Settings" className="w-12 h-12" />
        </button>

        {/* Notification Icon */}
        <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d7f063] bg-white hover:bg-[#f1f9e3] transition-colors cursor-pointer relative hover:scale-105 hover:shadow-md transition-all duration-200">
          <img src="/notification.svg" alt="Notifications" className="w-12 h-12" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#afd42a] rounded-full"></span>
        </button>

        {/* User Avatar + Menu */}
        <div className="relative" ref={avatarRef}>
          <img
            src="/Patient.svg"
            alt="User"
            className="w-12 h-12 rounded-full object-cover border-[#afd42a] hover:scale-105 transition-transform duration-200 cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white  rounded-lg shadow-lg z-50 py-2">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
