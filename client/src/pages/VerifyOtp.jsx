
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const phoneNumber = localStorage.getItem("userPhone");

  const handleVerify = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        phoneNumber,
        otp,
      });
      if (res.data.success) {
        setMessage("✅ Verified successfully!");
        localStorage.setItem("userId", res.data.user._id);
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        setMessage("❌ Invalid OTP");
      }
    } catch {
      setMessage("❌ Error verifying OTP");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-xl font-semibold mb-4">Verify OTP</h2>
        <p className="text-gray-600 mb-4">Enter OTP sent to {phoneNumber}</p>
        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border-2 border-purple-300 rounded-lg p-2 text-center text-lg w-full mb-4 focus:outline-none focus:border-purple-500"
        />
        <button
          onClick={handleVerify}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium text-lg"
        >
          Verify
        </button>
        {message && <p className="mt-3 text-sm">{message}</p>}
      </div>
    </div>
  );
}

export default VerifyOtp;
