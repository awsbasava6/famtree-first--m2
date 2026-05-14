
import React from "react";
import { useParams } from "react-router-dom";

const ComingSoon = () => {
  const { category } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-3xl font-bold mb-3 text-gray-800 capitalize">
        {category} Page
      </h1>
      <p className="text-gray-600">
        This section will display {category} details and memories.
      </p>
    </div>
  );
};

export default ComingSoon;
