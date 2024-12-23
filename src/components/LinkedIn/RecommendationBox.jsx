import balenImg from "/src/assets/images/balen.jpg";

import React from "react";

const RecommendationBox = () => {
  const recommendations = [
    {
      name: "Er. Balen Shah",
      description: "Structural Engineer/Rapper/ MAYOR - Kathmandu Metropolitan City",
    },
    {
      name: "Riya Shrestha",
      description:
        "Brand and Marketing Consultant specializing in Social Media | Certified...",
    },
    {
      name: "Anupama Sangraula",
      description:
        "Chartered Accountant | Content Creator | Co Founder- Bright Academy",
    },
  ];

  return (
    <div className="hidden md:w-[40vw] md:block h-[fit-content] border border-[#ddd] rounded-lg p-4 bg-white font-sans">
      <h4 className="mb-4 text-[16px] font-semibold text-[#333]">Add to your feed</h4>
      <div className="mb-4">
        {recommendations.map((person, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="w-[40px] h-[40px] rounded-full bg-[#ccc] flex justify-center items-center mr-3 text-[18px] text-white">
              <img src={balenImg} alt="" className="w-full h-full rounded-full" />
            </div>
            <div className="lg:w-1/2 sm:w-[80%]">
              <h5 className="m-0 text-[14px] font-semibold text-[#333]">{person.name}</h5>
              <p className="mt-1 text-[12px] text-[#555]">{person.description}</p>
            </div>
            <button className="lg:inline sm:hidden ml-auto bg-[#0073b1] text-white border-none rounded-md py-1 px-3 cursor-pointer text-[12px] font-semibold hover:bg-[#005f8d]">+ Follow</button>
          </div>
        ))}
      </div>
      <a href="#" className="text-[12px] text-[#0073b1] text-decoration-none block text-center hover:underline">
        View all recommendations →
      </a>
    </div>
  );
};

export default RecommendationBox;
