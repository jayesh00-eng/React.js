import React from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}