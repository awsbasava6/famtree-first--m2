import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaImage, FaVideo, FaFileAlt } from "react-icons/fa";

const UploadCard = ({
  icon,
  title,
  accept,
  gradient,
  iconColor,
  buttonColor,
}) => {
  const [fileName, setFileName] = useState("");

  return (
    <div
      className={`w-[320px] h-[220px] rounded-2xl shadow-lg 
      backdrop-blur-xl border border-white/30
      flex flex-col items-center justify-center
      transition hover:scale-[1.02]
      ${gradient}`}
    >
      {/* ICON */}
      <div className={`text-4xl mb-3 ${iconColor}`}>
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {title}
      </h3>

      {/* UPLOAD */}
      <label className="cursor-pointer">
        <div
          className={`px-6 py-2 rounded-lg text-sm font-medium
          text-white shadow-md backdrop-blur-md
          hover:opacity-90 transition
          ${buttonColor}`}
        >
          Choose Files
        </div>

        <input
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) =>
            setFileName(e.target.files?.[0]?.name || "")
          }
        />
      </label>

      {fileName && (
        <p className="mt-2 text-xs text-gray-700 truncate max-w-[240px]">
          {fileName}
        </p>
      )}
    </div>
  );
};

export default function CategoryPage() {
  const { type } = useParams();
  const title = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
        {title} Memories
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Upload and preserve your {title.toLowerCase()} photos, videos, and documents.
      </p>

      <div className="flex justify-center gap-10">
        {/* IMAGES */}
        <UploadCard
          icon={<FaImage />}
          title="Upload Images"
          accept="image/*"
          gradient="bg-gradient-to-br from-pink-100/70 via-rose-100/70 to-pink-200/70"
          iconColor="text-violet-700"
          buttonColor="bg-gradient-to-r from-pink-500 to-rose-500"
        />

        {/* VIDEOS */}
        <UploadCard
          icon={<FaVideo />}
          title="Upload Videos"
          accept="video/*"
          gradient="bg-gradient-to-br from-purple-100/70 via-indigo-100/70 to-purple-200/70"
          iconColor="text-cyan-600"
          buttonColor="bg-gradient-to-r from-indigo-500 to-purple-500"
        />

        {/* DOCUMENTS */}
        <UploadCard
          icon={<FaFileAlt />}
          title="Upload Documents"
          accept=".pdf,.doc,.docx"
          gradient="bg-gradient-to-br from-emerald-100/70 via-teal-100/70 to-emerald-200/70"
          iconColor="text-slate-700"
          buttonColor="bg-gradient-to-r from-emerald-500 to-teal-500"
        />
      </div>
    </div>
  );
}

