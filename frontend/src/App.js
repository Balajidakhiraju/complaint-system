import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/common/Home";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";

import Complaint from "./components/user/Complaint";
import Status from "./components/user/Status";
import TrackStatus from "./components/user/TrackStatus";
import AdminHome from "./components/admin/AdminHome";
import AgentHome from "./components/agent/AgentHome";

function App() {
  return (
    <Router>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Complaint />} />

        {/* User Flow */}
        <Route path="/dashboard" element={<Complaint />} />
        <Route path="/status" element={<Status />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/track-status" element={<TrackStatus />} />
        {/* Admin & Agent */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/agent" element={<AgentHome />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
