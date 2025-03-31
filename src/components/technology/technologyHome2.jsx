import React from "react";
import JobCarousel from "./JobCarousel";
import Header from "../header/Header";
import Navbar from "../header/Navbar";

const technologyHome2 = ({ title }) => {
  const jobsData = {
   primary: [
      {
        title: "Primary Teacher",
        company: "GD Goenka Public School",
        logo: "/images/p3.png",
        salary: "Not Disclosed",
        profile: "Full-time",
        link: "https://www.gdgoenkanoida.edu.in/vacancies.html",
      },
      {
        title: "Primary Teacher",
        company: "DLF Public Shool",
        logo: "/images/p4.png",
        salary: "20000-50000 per month",
        profile: "Full time",
        link: "https://www.dlps.co.in/applynow.aspx?CareerID=45",
      },

      {
        title: "Primary Teacher",
        company: "St. Mary’s Christian School",
        logo: "/images/p5.png",
        salary: "Not Disclosed",
        profile: "Full time",
        link: "https://www.smcs.co.in/jobs.php",
      },

      {
        title: "Pre Primary Teacher",
        company: "Wisdom World School",
        logo: "/images/p1.png",
        salary: "10000 per month",
        profile: "Full time",
        link: "https://www.wisdomworldschool.in/careers.php",
      },

      {
        title: "Primary Teacher",
        company: "Doon Public School",
        logo: "/images/p2.png",
        salary: "Not Disclosed",
        profile: "Full time",
        link: "https://doonpublicschool.in/pages/career.html",
      },


      


    ],
    senior: [
      {
        title: "Mathematics Teacher",
        company: "Pathways World School",
        logo: "/images/s4.png",
        salary: "4 Lacs P.A",
        profile: "Full time",
        link: "https://www.pws.edu.in/gurgaon/careers",
      },
      {
        title: "PGT English Teacher",
        company: "GAURS",
        logo: "/images/s5.png",
        salary: "70000",
        profile: "Full time",
        link: "https://gaursinternationalschool.com/greater-noida/careers",
      },

      {
        title: "Faculty for Maths/Physics/Chemistry",
        company: "Study Vault Education",
        logo: "/images/s1.png",
        salary: "5 Lacs P.A",
        profile: "Full time",
        link: "https://www.studyvault.in/Opportunity.html",
      },

      {
        title: "Online Teaher - Part Time",
        company: "Planet Spark",
        logo: "/images/s2.png",
        salary: "5.5 Lacs P.A",
        profile: "Full time",
        link:"https://www.planetspark.in/teacher"
        // link: "https://www.naukri.com/job-listings-online-teacher-tutor-part-time-planetspark-gurugram-1-to-5-years-110125004471?src=seo_srp&sid=17421805987746187&xp=1&px=1",
      },

      {
        title: "MPSSB Teacher ",
        company: "Teaching (Madhya Pradesh Staff Selection Board)",
        logo: "/images/s3.png",
        salary: "4 Lacs P.A",
        profile: "Full time",
        link: "https://esb.mponline.gov.in/Portal/Examinations/Vyapam/examsList.aspx#parentHorizontalTab1",
      },
    ],
    collage: [
      {
        title: "Assistant Professor Computer Applications ",
        company: "Institute of Innvation In Technology and Management",
        logo: "/images/c1.png",
        salary: "Salary as per norms",
        profile: "Full time",
        link:"https://iitmjp.ac.in/careers/"
        // link: "https://www.jobsineducation.net/job-details/Computer-Applications-Assistant-Professor-for-College-University-New-Delhi-JBID240600069617?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      },
      {
        title: "Assistant Professor/ Associate Professor/ Professor",
        company: "Jamia Millia Islamia",
        logo: "/images/c2.png",
        salary: "50000- 200000 per month",
        profile: "Full time",
        link: "https://jmi.ac.in/BULLETIN-BOARD/Jobs/Careers@JMI",
      },
      {
        title: "Post Graduate Teachers",
        company: "KR Mangalam World School",
        logo: "/images/c3.png",
        salary: "Salary as per norms",
        profile: "Full time",
        link: "https://krmangalamgk2.com/careers.php",
      },
      {
        title: "Assistant Professor",
        company: "Laxmi Bai College",
        logo: "/images/c4.png",
        salary: "Salary as per norms",
        profile: "Full time",
        link:"https://www.du.ac.in/index.php?mact=News,cntnt01,detail,0&cntnt01articleid=14452&cntnt01returnid=219"
        // link: "https://www.shine.com/jobs/professor-of-law/asian-law-college/16592024?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      },

      {
        title: "Assistant Professor",
        company: "Ramanujan College",
        logo: "/images/c5.png",
        salary: "Salary as per VII Pay Commission",
        profile: "Full time",
        link: "https://rec.uod.ac.in/",
      },
    ],

   
  };

  return (
    <div>
      <Header />
      <Navbar />

      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      <JobCarousel jobs={jobsData?.primary} title={"Best Primary Teacher Job Opportunities in India 2025"} color={"blue"} />

      <JobCarousel
        jobs={jobsData?.senior}
        title={"Latest Senior Teacher Job Openings in India 2025 "}
        color={"green"}
      />

      <JobCarousel
        jobs={jobsData?.collage}
        title={"Best College Professor Job Vacancies in India 2025"}
        color={"orange"}
      />
    </div>
  );
};

export default technologyHome2;
