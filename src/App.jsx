import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FamilyDashboard from "./pages/FamilyDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import NeighborDashboard from "./pages/NeighborDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Dashboard Routes */}
        <Route 
          path="/family" 
          element={<FamilyDashboard />} 
        />
        <Route 
          path="/healthcare" 
          element={<ProviderDashboard />} 
        />
        <Route 
          path="/neighbor" 
          element={<NeighborDashboard />} 
        />
        
        {/* Fallback route for undefined paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;