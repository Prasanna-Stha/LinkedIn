import React from "react";
import GuidanceRecommendation from "./GuidanceRecommendation";
import JobCard from "./JobCard";
import {
  faSliders,
  faBookmark,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobList = () => {
  const jobs = [
    {
      jobTitle: "Stewarding Executive",
      company: "Hilton",
      location: "Kathmandu, Bagmati, Nepal (On-site)",
      time: "Promoted",
      easyApply: true,
      badge: "2 school alumni work here",
    },
    {
      jobTitle: "Frontend Developer (VueJs) - Contract",
      company: "Tekkon Nepal",
      location: "Kathmandu, Bagmati, Nepal (Hybrid)",
      time: "3 minutes ago",
      easyApply: true,
      badge: "Applicant review time is typically 3 days",
    },
    {
      jobTitle: "Senior Wordpress Developer (Remote WFH)",
      company: "Keller Executive Search",
      location: "Dharan, Kosi Zone, Nepal (Remote)",
      time: "1 month ago",
      easyApply: true,
      badge: "Be an early applicant",
    },
  ];

  return (
    <div className="flex w-[90vw] h-fit mx-auto mt-4 mb-8 space-x-8">
      {/* Sidebar */}
      <div className="w-[20%] h-fit">
        <div className="space-y-4">
          <ul className="space-y-4 bg-white py-6 px-4 rounded-lg border border-1 border-[#dfdeda]">
            {/* Preferences */}
            <li className="flex items-center text-gray-700 hover:text-sky-700 cursor-pointer">
              <FontAwesomeIcon icon={faSliders} className="mr-3 text-[rgb(64. 64, 64)] text-lg" />
              <span className="font-medium">Preferences</span>
            </li>

            {/* My Jobs */}
            <li className="flex items-center text-gray-700 cursor-pointer">
              <FontAwesomeIcon icon={faBookmark} className="mr-3 text-[rgb(64. 64, 64)]" />
              <span className="font-medium">My Jobs</span>
            </li>

            {/* My Career Insights */}
            <li className="flex items-center text-gray-700 hover:text-sky-700 cursor-pointer">
              <FontAwesomeIcon icon={faChartLine} className="mr-3 text-[rgb(64. 64, 64)]" />
              <span className="font-medium">My Career Insights</span>
            </li>
          </ul>
          <button className="w-full px-4 py-3 text-sm font-semibold text-blue-600 border border-blue-600 rounded-3xl hover:bg-blue-50">Start hiring with AI</button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="w-1/2 bg-white p-6 rounded-lg border border-[#dfdeda]">
        <h2 className="text-2xl font-bold text-gray-800">Top job picks for you</h2>
        <p className="text-sm text-gray-600 mt-2">
          Based on your profile, preferences, and activity like applies, searches, and saves
        </p>
        <div className="mt-4 space-y-4">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
          <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Show All
          </button>
        </div>
      </div>

      {/* Job Seeker Guidance */}
      <div className="w-1/4">
        <GuidanceRecommendation />
      </div>
    </div>
  );
};

export default JobList;
