
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import Register from "./pages/Register";
import SelectAccount from "./pages/SelectAccount";
import VerifyOtp from "./pages/VerifyOtp";
import Dashboard from "./pages/Dashboard";
import ChildrenPage from "./components/ChildrenPage";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-account" element={<SelectAccount />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/children" element={<ChildrenPage />} />
        <Route path="/:category" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
