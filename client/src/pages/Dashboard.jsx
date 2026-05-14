
import React from "react";

function Dashboard() {
  const phone = localStorage.getItem("userPhone");

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Digi-FamTree</h1>
        <p className="text-gray-700">Logged in as: {phone}</p>
      </div>
    </div>
  );
}

export default Dashboard;
