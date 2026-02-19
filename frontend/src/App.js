import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
import Complaint from "./components/user/Complaint";
import Status from "./components/user/Status";
import AdminHome from "./components/admin/AdminHome";
import AgentHome from "./components/agent/AgentHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/status" element={<Status />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/agent" element={<AgentHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
