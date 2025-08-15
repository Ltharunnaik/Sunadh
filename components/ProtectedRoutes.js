import React from "react";
import { Navigate } from "react-router-dom";

// ProtectedRoute to protect admin pages
const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
