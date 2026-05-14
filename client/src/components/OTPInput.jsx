
import React, { useState } from "react";

const OTPInput = ({ mobile, onVerify }) => {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    if (otp.length === 4) {
      alert("OTP Verified!");
      onVerify();
    } else {
      alert("Enter a 4-digit OTP");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Verify OTP</h2>
      <p className="text-gray-600 text-sm mb-5">
        Enter the 4-digit OTP sent to +91-{mobile}
      </p>
      <input
        type="number"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="w-full border-2 border-indigo-300 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 mb-5"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-medium"
      >
        Verify & Continue
      </button>
    </div>
  );
};

export default OTPInput;
