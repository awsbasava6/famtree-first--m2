
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SelectAccount() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const phoneNumber = localStorage.getItem("userPhone");

  const handleCreateAccount = async () => {
    if (!phoneNumber) return alert("No phone number found!");
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/auth/send-otp", {
        phoneNumber,
      });
      if (res.data.success) navigate("/verify-otp");
    } catch {
      alert("Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-xl font-semibold mb-6">Select Account</h2>
        <button
          onClick={handleCreateAccount}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium text-lg disabled:bg-purple-300"
        >
          {loading ? "Sending OTP..." : "+ Create New Account"}
        </button>
      </div>
    </div>
  );
}

export default SelectAccount;
