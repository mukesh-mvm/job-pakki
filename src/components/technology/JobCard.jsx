import React from "react";
import Link from "next/link";
const JobCard = ({ title, company, logo, salary, profile, link }) => {
  return (
    <div className="bg-white hover:bg-amber-50 shadow-lg rounded-lg p-5 w-full min-h-[380px] flex flex-col">
      <div className="flex flex-col items-center text-center flex-grow">
        <img src={logo} alt={company} className="w-16  object-contain" />
        <h3 className="text-xl  text-black font-semibold mt-3 break-words">{title}</h3>
        <p className="text-gray-600">{company}</p>
        <p className="text-green-600 font-bold mt-2">{salary}</p>
        <p className="text-blue-500">{profile}</p>
      </div>
      <div className="mt-auto flex justify-center">
        <Link href={link} passHref legacyBehavior>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Apply Now
          </a>
        </Link>

      </div>
    </div>
  );
};

export default JobCard;
