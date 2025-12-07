import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-[#eef0f4] min-h-screen">
      <div className="bg-[#2c3e50] text-white p-10 rounded-2xl shadow-xl w-[380px]">
        
        <h2 className="text-3xl font-semibold text-center mb-6">Log in</h2>

        <div className="mb-5">
          <label className="text-sm mb-2 block">Email address</label>
          <div className="flex items-center border-b border-gray-300 pb-2">
            <span className="mr-2">Ì≥ß</span>
            <input
              type="email"
              placeholder="Enter email"
              className="bg-transparent outline-none w-full text-sm text-white"
            />
            <span>‚úîÔ∏è</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm mb-2 block">Password</label>
          <div className="flex items-center border-b border-gray-300 pb-2">
            <span className="mr-2">Ì¥í</span>
            <input
              type="password"
              placeholder="Enter password"
              className="bg-transparent outline-none w-full text-sm text-white"
            />
            <span>‚úîÔ∏è</span>
          </div>
        </div>

        <button className="w-full bg-[#05c4b4] py-3 rounded-xl text-white font-semibold text-sm hover:bg-[#04a89a] transition">
          Login to your account
        </button>

        <div className="flex justify-between items-center text-xs mt-5">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <Link to="/register" className="text-[#05c4b4] hover:underline">
            New here? <strong>Sign in!</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

