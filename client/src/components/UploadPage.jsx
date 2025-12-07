import React from "react";
import { FaImage, FaVideo, FaFileAlt } from "react-icons/fa";

export default function UploadPage({ title, subtitle, bgImage }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-3">
        {title}
      </h1>
      <p className="text-white/90 text-lg mb-10 drop-shadow-md text-center max-w-3xl">
        {subtitle}
      </p>

      {/* Upload Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        
        {/* Images */}
        <div className="bg-white/90 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
          <FaImage className="text-blue-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Upload Images</h2>
          <p className="text-gray-700">Add photos and visual memories.</p>
        </div>

        {/* Videos */}
        <div className="bg-white/90 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
          <FaVideo className="text-red-600 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Upload Videos</h2>
          <p className="text-gray-700">Upload videos of precious moments.</p>
        </div>

        {/* Documents */}
        <div className="bg-white/90 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
          <FaFileAlt className="text-green-700 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Upload Documents</h2>
          <p className="text-gray-700">Certificates, report cards, and more.</p>
        </div>

      </div>
    </div>
  );
}

