import React, { useState } from "react";

import axios from "axios";

import {
  FaImage,
  FaVideo,
  FaFileAlt,
} from "react-icons/fa";

export default function UploadPage({
  title,
  subtitle,
  bgImage,
}) {

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [uploadedUrl, setUploadedUrl] =
    useState("");

  /* HANDLE IMAGE UPLOAD */

  const handleImageUpload =
    async () => {

    if (!selectedImage) {

      alert(
        "Please select image"
      );

      return;
    }

    const formData =
      new FormData();

    formData.append(
      "image",
      selectedImage
    );

    try {

      const response =
        await axios.post(

          "http://localhost:5000/api/upload",

          formData,

          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      console.log(response.data);

      setUploadedUrl(
        response.data.imageUrl
      );

      alert(
        "Upload Successful"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Upload Failed"
      );
    }
  };

  return (

    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-10"
      style={{
        backgroundImage:
          `url(${bgImage})`,
      }}
    >

      <h1 className="text-4xl font-bold text-white mb-3">
        {title}
      </h1>

      <p className="text-lg mb-10 text-center">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

        {/* IMAGE UPLOAD */}

        <div className="bg-white/90 p-8 rounded-2xl shadow-xl text-center">

          <FaImage className="text-blue-600 text-5xl mx-auto mb-4" />

          <h2 className="text-xl font-semibold mb-4">
            Upload Images
          </h2>

          {/* FILE SELECT */}

          <input
            type="file"

            onChange={(e) =>
              setSelectedImage(
                e.target.files[0]
              )
            }

            className="mb-4"
          />

          {/* UPLOAD BUTTON */}

          <button

            onClick={
              handleImageUpload
            }

            className="bg-blue-600 text-white px-5 py-2 rounded-lg"

          >
            Upload
          </button>

          {/* SHOW IMAGE */}

          {uploadedUrl && (

            <div className="mt-5">

              <img

                src={uploadedUrl}

                alt="uploaded"

                className="rounded-lg"

              />

            </div>

          )}

        </div>

        {/* VIDEO */}

        <div className="bg-white/90 p-8 rounded-2xl shadow-xl text-center">

          <FaVideo className="text-red-600 text-5xl mx-auto mb-4" />

          <h2 className="text-xl font-semibold mb-2">
            Upload Videos
          </h2>

          <p>
            Upload videos of precious moments.
          </p>

        </div>

        {/* DOCUMENT */}

        <div className="bg-white/90 p-8 rounded-2xl shadow-xl text-center">

          <FaFileAlt className="text-green-700 text-5xl mx-auto mb-4" />

          <h2 className="text-xl font-semibold mb-2">
            Upload Documents
          </h2>

          <p>
            Certificates, report cards, and more.
          </p>

        </div>

      </div>

    </div>
  );
}
