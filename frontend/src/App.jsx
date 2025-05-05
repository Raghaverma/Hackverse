// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import { Header1 } from "./components/ui/Header1";
import HackathonsPage from "./pages/hackathons/HackathonsPage";
import CreateHackathonPage from "./pages/hackathons/CreateHackathonPage";
import ResourcesPage from "./pages/resources/ResourcesPage";

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<LandingPage />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/hackathons" element={<HackathonsPage />} />
    <Route path="/resources/*" element={<ResourcesPage />} />

    {/* Protected Routes */}
    <Route
      path="/home"
      element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <StudentDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/hackathons/create"
      element={
        <ProtectedRoute>
          <CreateHackathonPage />
        </ProtectedRoute>
      }
    />

    {/* Redirect any unknown routes to landing page */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const App = () => (
  <Router>
    <div className="min-h-screen bg-background">
      <Header1 />
      <AppRoutes />
    </div>
  </Router>
);

export default App;
