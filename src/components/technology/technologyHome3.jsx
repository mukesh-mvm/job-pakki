import React from "react";
import JobCarousel from "./JobCarousel";
import Header from "../header/Header";
import Navbar from "../header/Navbar";

const technologyHome3 = ({ title }) => {
  const jobsData = {
    software: [
      {
        title: "Software Engineer",
        company: "Google",
        logo: "https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_1280.jpg",
        salary: "$120K",
        profile: "Full-time",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
      link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
    ],
    Software_testing: [
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
    ],
    Project_Management: [
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
    ],

    AI_ML: [
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },

      {
        title: "Frontend Developer",
        company: "Meta",
        logo: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
        salary: "$110K",
        profile: "Remote",
        link:"#"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
    ],
  };

  return (
    <div>
      <Header />
      <Navbar />

      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      <JobCarousel jobs={jobsData?.software} title={"ONGC Recruitment 2025 – Apply Now"} color={"blue"} />

      <JobCarousel
        jobs={jobsData?.Software_testing}
        title={"NTPC Careers – Latest Job Openings"}
        color={"green"}
      />

      <JobCarousel
        jobs={jobsData?.Project_Management}
        title={"GAIL Job Vacancies – Apply Today"}
        color={"orange"}
      />

      <JobCarousel
        jobs={jobsData?.AI_ML}
        title={"POWERGRID Recruitment – Freshers & Experienced"}
        color={"purple"}
      />

      <JobCarousel jobs={jobsData?.AI_ML} title={"BHEL Jobs 2025 – Best PSU Opportunities"} color={"purple"} />
    </div>
  );
};

export default technologyHome3;
