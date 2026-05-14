import React from "react";
import { FaImages, FaVideo, FaFileAlt } from "react-icons/fa";

export default function Childhood() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Childhood Memories
      </h1>

      <p className="text-gray-600 mb-10 text-center max-w-2xl">
        Upload and preserve your childhood photos, videos, and documents.
      </p>

      {/* Options Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] max-w-6xl">

        {/* Upload Images */}
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center hover:shadow-2xl transition cursor-pointer">
          <FaImages size={60} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Upload Images</h3>
          <p className="text-gray-600 text-center text-sm">
            Add your childhood photos to keep your memories safe.
          </p>
        </div>

        {/* Upload Videos */}
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center hover:shadow-2xl transition cursor-pointer">
          <FaVideo size={60} className="text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Upload Videos</h3>
          <p className="text-gray-600 text-center text-sm">
            Upload videos of your precious childhood moments.
          </p>
        </div>

        {/* Upload Documents */}
        <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center hover:shadow-2xl transition cursor-pointer">
          <FaFileAlt size={60} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
          <p className="text-gray-600 text-center text-sm">
            Save report cards, certificates, and school memories.
          </p>
        </div>

      </div>
    </div>
  );
}

