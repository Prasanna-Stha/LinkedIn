import React from "react";

const GuidanceRecommendation = () => {
  return (
    <div className="w-[20vw] border rounded-lg p-4 bg-white shadow-sm border-[#dfdeda]">
      <h3 className="text-lg font-bold text-gray-800">Job seeker guidance</h3>
      <p className="text-sm text-gray-600 mt-2">
        Recommended based on your activity
      </p>
      <div className="mt-4">
        <h4 className="text-sm font-bold text-blue-600">
          I want to improve my resume
        </h4>
        <p className="text-sm text-gray-600 mt-1">
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </p>
        <button className="text-sm text-blue-600 mt-4 hover:underline">
          Show more →
        </button>
      </div>
    </div>
  );
};

export default GuidanceRecommendation;
