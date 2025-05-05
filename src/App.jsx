import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FamilyDashboard from "./pages/FamilyDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/family-dashboard" element={<FamilyDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
