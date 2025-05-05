import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FamilyDashboard from "./pages/FamilyDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import NeighborDashboard from "./pages/NeighborDashboard";

// Protected route component
const ProtectedRoute = ({ element, allowedUserType }) => {
  const userType = localStorage.getItem("userType");
  
  // Check if user is logged in and has the correct user type
  if (!userType) {
    return <Navigate to="/" replace />;
  }
  
  // If allowedUserType is specified, check if user has permission
  if (allowedUserType && userType !== allowedUserType) {
    return <Navigate to="/" replace />;
  }
  
  return element;
};

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
          element={<ProtectedRoute element={<FamilyDashboard />} allowedUserType="family" />} 
        />
        <Route 
          path="/healthcare" 
          element={<ProtectedRoute element={<ProviderDashboard />} allowedUserType="provider" />} 
        />
        <Route 
          path="/neighbor" 
          element={<ProtectedRoute element={<NeighborDashboard />} allowedUserType="neighbor" />} 
        />
        
        {/* Fallback route for undefined paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;