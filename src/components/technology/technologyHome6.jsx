import React from "react";
import JobCarousel from "./JobCarousel";
import Header from "../header/Header";
import Navbar from "../header/Navbar";

const technologyHome6 = ({ title }) => {
  const jobsData = {
    software: [
      {
        title: "Personal Banker",
        company: "Barclays",
        logo: "/images/b2.png",
        salary: "Not Disclosed",
        profile: "Full-time",
        link:"https://search.jobs.barclays/job/noida/personal-banker/13015/69503597856?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"     
        // link: "https://www.naukri.com/job-listings-service-relationship-manager-affluent-banking-indusind-bank-new-delhi-2-to-7-years-170125019072?src=seo_srp&sid=17421811359297659&xp=8&px=1",
      },
      {
        title: "Virtual Relationship Manager NRI",
        company: "Axis Bank",
        logo: "/images/b3.png",
        salary: "Not Disclosed",
        profile: "Full-time",
        link:"https://www.axistrustee.in/jobs?slug=assistant-manager---client-servicing--operations-"
        // link: "https://www.naukri.com/job-listings-virtual-relationship-manager-nri-axis-bank-axis-bank-noida-kolkata-2-to-7-years-040325015181?src=seo_srp&sid=17421811359297659&xp=10&px=1",
      },

      {
        title: "Associate Relationship Manager",
        company: "HSBC",
        logo: "/images/b4.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"https://mycareer.hsbc.com/en_GB/external/PipelineDetail/Relationship-Manager-Associate-Acquisition/253039"
        // link: "https://www.naukri.com/job-listings-vp-associate-relationship-manager-business-banking-hsbc-electronic-data-processing-india-pvt-ltd-gurugram-8-to-9-years-130325502432?src=seo_srp&sid=17421811359297659&xp=12&px=1",
      },

      {
        title: "Office Assistant, House Faculty",
        company: "Bank Of Baroda",
        logo: "/images/b5.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"https://www.bankofbaroda.in/career/current-opportunities/training-institutes-on-contract-basis-for-rseti-patan-18-03  "
        // link: "https://www.glassdoor.co.in/job-listing/branch-operations-manager-branch-banking-branch-banking-kotak-mahindra-JV_IC2921225_KO0,55_KE56,70.htm?jl=1008002766946&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      },

      {
        title: "Area Head Government Banking",
        company: "IDFC First Bank",
        logo: "/images/b1.png",
        salary: "12 Lacs P.A",
        profile: "Full Time",
        link:"https://careers.idfcfirstbank.com/in/en/job/P-101921/Banker-Customer-Experience?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.jobleads.com/in/job/area-head-government-banking--gurugram-district--efe0751ad98d4af5c6a196236244a26f4?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      },

      
    ],
    Software_testing: [
      {
        title: "Insurance Officer",
        company: "TATA AIA Life Insurance",
        logo: "https://tse2.mm.bing.net/th?id=OIP.YHdN9Q1cXzgTngDXUIIxpQAAAA&pid=Api&P=0&h=180",
        salary: "75000 per month",
        profile: "Full Time",
        link:"#"
        // link: "https://www.workindia.in/jobs/insurance_officer-sector_15_gurgaon-delhi-6761323/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      },
      {
        title: "Assistant Manager- Insurance",
        company: "Delhivery",
        logo: "https://img.naukimg.com/logo_images/groups/v1/509622.gif",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"#"
        // link: "https://www.naukri.com/job-listings-assistant-manager-insurance-delhivery-gurugram-5-to-8-years-170325008651?src=seo_srp&sid=17422714244834615&xp=1&px=1",
      },

      {
        title: "GN-Insurance Manager",
        company: "Accenture",
        logo: "https://img.naukimg.com/logo_images/groups/v1/10476.gif",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"#"
        // link: "https://www.naukri.com/job-listings-gn-insurance-manager-accenture-solutions-pvt-ltd-gurugram-2-to-7-years-070325912224?src=seo_srp&sid=17422714244834615&xp=4&px=1",
      },

      {
        title: "State Insurance Officer",
        company: "PNB Metlife",
        logo: "https://img.naukimg.com/logo_images/groups/v1/893890.gif",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"#"
        // link: "https://www.naukri.com/job-listings-state-insurance-officer-pnb-metlife-india-insurance-co-ltd-gurugram-1-to-3-years-260225909313?src=seo_srp&sid=17422714244834615&xp=14&px=1",
      },

      {
        title: "Process Associate, Insurance Claims",
        company: "Genpact",
        logo: "https://img.naukimg.com/logo_images/groups/v1/42932.gif",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"#"
        // link: "https://www.naukri.com/job-listings-process-associate-insurance-claims-genpact-gurugram-0-to-2-years-120325013692?src=seo_srp&sid=17422714244834615_1&xp=18&px=2",
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
      <JobCarousel jobs={jobsData?.software} title={"Latest Banking Job Openings in India 2025 "} color={"blue"} />

      <JobCarousel
        jobs={jobsData?.Software_testing}
        title={"Best Insurance Job Opportunities in India 2025"}
        color={"green"}
      />
    </div>
  );
};

export default technologyHome6;
