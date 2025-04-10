"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import JobCard from "./JobCard"; // Ensure JobCard is correctly imported
import { useRef, useState } from "react";

const JobCarousel = ({ jobs, title, color,data }) => {

  const [showAll, setShowAll] = useState(false);
    const handleToggle = () => {
      setShowAll((prev) => !prev);
    };


  const sliderRef = useRef(null); // Create a reference for the slider

  const settings = {
    dots: false, // Hide default dots
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative flex justify-center py-4">
      <div className=" w-[83%] lg:w-[95%] relative">
        <h2
          className={`text-2xl font-bold text-center mb-2 rounded-2xl bg-blue-400 text-white`}
        >
          {title}
        </h2>


{
  data?(<>
   <div className=" w-[60%] mx-auto flex flex-col ">
       {(showAll ? data : [data[0]]).map((item, index) => (
        <p key={index} className="text-xl text-black mb-4 text-justify">
          {item.title}
        </p>
      ))}

      <button
        onClick={handleToggle}
        className="text-blue-600 underline mt-2 "
      >
        {showAll ? "Read Less" : "Read More"}
      </button>
    </div>
  </>):""
}
       

        {/* Left Button (Outside the carousel) */}
        <button
          className=" cursor-pointer absolute -left-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Right Button (Outside the carousel) */}
        <button
          className=" cursor-pointer absolute -right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight size={20} />
        </button>

        <Slider ref={sliderRef} {...settings}>
          {jobs?.map((job, index) => (
            <div key={index} className="px-2">
              <JobCard {...job} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default JobCarousel;
