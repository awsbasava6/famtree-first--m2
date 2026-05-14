
import React from "react";

const ChildrenPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Children Page</h1>
      <p className="text-gray-600 mb-10 text-center max-w-2xl">
        This section will display children details and memories.
      </p>

      {/* Two parallel child detail sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Boy Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <img
            src="/images/boy.png"
            alt="Boy"
            className="w-24 h-24 mb-4 rounded-full object-cover shadow"
          />
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Boy Details</h2>
          <form className="w-full space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Father Name"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Mother Name"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Place of Birth"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Horoscope"
              className="w-full border p-2 rounded-lg"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
            >
              Save Details
            </button>
          </form>
        </div>

        {/* Girl Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <img
            src="/images/girl.png"
            alt="Girl"
            className="w-24 h-24 mb-4 rounded-full object-cover shadow"
          />
          <h2 className="text-xl font-semibold text-pink-700 mb-4">Girl Details</h2>
          <form className="w-full space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Father Name"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Mother Name"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Place of Birth"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Horoscope"
              className="w-full border p-2 rounded-lg"
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 w-full"
            >
              Save Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChildrenPage;

