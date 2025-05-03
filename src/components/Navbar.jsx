import React from "react";

const Navbar = () => (
  <nav className="flex items-center justify-between w-full px-10 py-3 bg-[#f6f6f6]">
    {/* Logo and Brand */}
    <div className="flex items-center gap-2">
      <img src="/logo.svg" alt="NexCare" className="w-50 h-18" />
      
    </div>

    {/* Right Side: Search and Icons */}
    <div className="flex items-center gap-6 h-20">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-40 md:w-56 rounded-full bg-white px-4 py-2 pr-10 text-sm shadow focus:outline-none"
        />
        <img
          src="/search.svg"
          alt="Search"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60"
        />
      </div>

      {/* Settings Icon */}
      <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d7f063] bg-white hover:bg-[#f1f9e3] transition-colors cursor-pointer">
        <img src="/settings.svg" alt="Settings" className="w-12 h-12" />
      </button>

      {/* Notification Icon */}
      <button className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d7f063] bg-white hover:bg-[#f1f9e3] transition-colors cursor-pointer relative">
        <img src="/notification.svg" alt="Notifications" className="w-12 h-12" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-[#afd42a] rounded-full"></span>
      </button>

      {/* User Avatar */}
      <img
        src="/Patient.svg"
        alt="User"
        className="w-12 h-12 rounded-full object-cover  border-[#afd42a]"
      />
    </div>
  </nav>
);

export default Navbar;
