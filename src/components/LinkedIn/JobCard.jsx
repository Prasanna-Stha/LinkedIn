import React from "react";

const JobCard = ({ jobTitle, company, location, time, badge, easyApply }) => {
  return (
    <div className="flex items-start p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold">{company[0]}</span>
      </div>
      <div className="ml-4 w-full">
        <h3 className="text-lg font-semibold text-sky-700">{jobTitle}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
        {badge && (
          <p className="text-sm text-gray-500 mt-2">{badge}</p>
        )}
        {easyApply && (
          <span className="inline-block px-2 py-1 mt-2 text-xs text-green-700 bg-green-100 rounded-full">
            Easy Apply
          </span>
        )}
      </div>
    </div>
  );
};

export default JobCard;
