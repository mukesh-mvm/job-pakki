import React from "react";
import JobCarousel from "./JobCarousel";
import Header from "../header/Header";
import Navbar from "../header/Navbar";
import Head from "next/head";
const TechnologyHome1 = ({ title }) => {
  const jobsData = {
    software: [
      {
        title: "Software Development Engineer",
        company: "Adobe",
        logo: "/images/h1.png",
        salary: "Not Disclosed",
        profile: "Full-time",
        // link: "https://www.foundit.in/job/professional-software-development-engineering-fiserv-india-private-limited-noida-34121010?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://www.adobe.com/"
      },
      {
        title: "Senior Software Engineer",
        company: "Insta Safe",
        logo: "/images/h2.png",
        salary: "5-7.5 Lacs P.A",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-developer-capline-services-noida-1-to-3-years-210225016648?src=seo_srp&sid=17417682183862455_1&xp=1&px=2",
         link:"https://www.instahyre.com/job-337579-senior-software-engineer-at-instasafe-meerut/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Senior Data Analyst",
        company: "Hitachi",
        logo: "/images/h3.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
      link:"https://careers.hitachi.com/jobs/15816699-senior-data-analyst-irc260044?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Software Developement Engineer",
        company: "Wex",
        logo: "/images/ss1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-senior-software-developer-vbeyond-corporation-noida-gurugram-delhi-ncr-5-to-9-years-200225008623?src=cluster&sid=17417724579876687_1&xp=6&px=1",
     link:"https://careers.wexinc.com/us/en/job/R17708/Software-Development-Engineering-3?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Software Engineer",
        company: "Siemens",
        logo: "/images/ss2.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-developer-fmw-oracle-india-pvt-ltd-noida-0-to-5-years-110325500511?src=seo_srp&sid=17417731225361355&xp=1&px=1",
      link:"https://jobs.sw.siemens.com/noida-ind/software-engineer-c/7E1B6136A39D484DA12E4219D2D209B6/job/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Senior Software Developer",
        company: "Oracle",
        logo: "/images/ss3.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://careers.oracle.com/jobs/#en/sites/jobsearch/jobs/preview/279352/?keyword=Software+Engineer&latitude=28.6040046&location=Noida%2C+UP%2C+India&longitude=77.3597082&mode=geolocation&radius=25&radiusUnit=MI"
      },
    ],
    Software_testing: [
      {
        title: "Software Test Analysis Senior",
        company: "FIS",
        logo: "/images/tt1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-tester-vega6-webware-technologies-noida-1-to-4-years-030325015647?src=seo_srp&sid=1741779746742235_1&xp=4&px=2",
      link:"https://careers.fisglobal.com/us/en/job/FIGLUSJR0291148EXTERNAL/Software-Test-Analyst-Senior-Banking-Payments-domain?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "Python Automation Test Engineer",
        company: "EPAM",
        logo: "/images/tt2.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-tester-api-testing-morpheme-webnexus-greater-noida-1-to-6-years-210225920555?src=seo_srp&sid=1741779746742235_1&xp=7&px=2",
      link:"https://www.epam.com/careers/job-listings/job.epamgdo_blt9ac29c51d721080b_en-us_Gurgaon_India.python-automation-test-engineer_gurgaon_india?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Senior Test Analyst",
        company: "Citi",
        logo: "/images/tt4.png",
        salary: "6-8 Lacs P.A",
        profile: "Full time",
        // link: "https://www.glassdoor.co.in/job-listing/software-quality-engineer-2-adobe-JV_IC4477468_KO0,27_KE28,33.htm?jl=1009596913142&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://jobs.citi.com/job/gurgaon/senior-test-analyst-c11/287/72791637584?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Software Testing Engineer",
        company: "Digilantern",
        logo: "/images/tt5.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.glassdoor.co.in/job-listing/software-test-engineer-easemytrip-JV_IC4477468_KO0,22_KE23,33.htm?jl=1009323620412&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://www.digilantern.com/career/software-testing-engineer/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "QA Automation Engineer",
        company: "Iris",
        logo: "/images/tt6.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "/apply/meta",
        link:"https://careers.adobe.com/us/en/job/R153037/Machine-Learning-Engineer-3?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
    ],
    Project_Management: [
      {
        title: "Project Manager Specialist",
        company: "Ge Vernova",
        logo: "/images/h5.png",
        salary: "Not Disclosed",
        profile: "Remote",
        // link: "https://www.naukri.com/job-listings-software-developer-java-python-c-etl-r-systems-international-noida-3-to-8-years-170225014052?src=cluster&sid=17417682183862455_6&xp=2&px=1",
        link:"https://careers.gevernova.com/global/en/job/GVXGVWGLOBALR3787836EXTERNALENGLOBAL/Project-Management-Specialist-PCA?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "Project Manager, IT",
        company: "Gartner",
        logo: "/images/tp1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-cloudsheer-consulting-noida-1-to-3-years-040325012513?src=seo_srp&sid=17417765374131176&xp=1&px=1",
      link:"https://jobs.gartner.com/jobs/job/98315-project-manager-it/"
      },
      {
        title: "Project Manager",
        company: "Amazon",
        logo: "/images/tp2.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-toppersedge-com-india-noida-3-to-5-years-270225009962?src=seo_srp&sid=17417765374131176&xp=7&px=1",
      link:"https://www.amazon.jobs/en/jobs/2893905/product-manager-project-tez-amazon-now"
      },
      {
        title: "Project Manager, VP",
        company: "NatWest Group",
        logo: "/images/tp3.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-s-op-project-manager-teamware-solutions-gurugram-10-to-18-years-120325022743?src=seo_srp&sid=17418457896337070&xp=1&px=1",
      link:"https://jobs.natwestgroup.com/jobs/15796882-project-manager-vp?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "S&OP Project Manager",
        company: "McCain",
        logo: "/images/tp4.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-gurgaon-bharti-airtel-airtel-gurugram-4-to-9-years-070325023990?src=seo_srp&sid=17418457896337070&xp=8&px=1",
     link:"https://careers.mccain.com/us/en/job/35059/Project-Manager-Business-Transformation"
      },
    ],

    AI_ML: [
      {
        title: "Head AI/ ML",
        company: "RGF Professional Recruitment",
        logo: "/images/h6.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-cloudsheer-consulting-noida-1-to-3-years-040325012513?src=seo_srp&sid=17417765374131176&xp=1&px=1",
      link:"https://www.india.rgf-professional.com/jobs/14624-head-ai-ml-gurgaon-gurugram?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "Senior Machine Learning Engineer",
        company: "Adobe",
        logo: "/images/h1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-artificial-intelligence-engineer-premo-denim-noida-2-to-5-years-170225014898?src=seo_srp&sid=17417772944678170&xp=4&px=1",
      link:"https://careers.adobe.com/us/en/job/R154624/Senior-Machine-Learning-Engineer-5-5-Firefly?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "AI / ML Engineer",
        company: "Accenture",
        logo: "/images/ta1.png",
        salary: "7.5-12 Lacs P.A",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-project-manager-gurgaon-bharti-airtel-airtel-gurugram-4-to-9-years-070325023990?src=seo_srp&sid=17418457896337070&xp=8&px=1",
     link:"https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-4306245-S1819312_en&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "Artificial Intelligence Engineer",
        company: "BlackRock",
        logo: "/images/ta2.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.accenture.com/in-en/careers/jobdetails?id=ATCI-4417131-S1719368_en&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://careers.blackrock.com/job/gurgaon/artificial-intelligence-ai-engineer-associate/45831/78989707552?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Senior Machine Learning Engineer",
        company: "Adobe",
        logo: "/images/h1.png",
        salary: "Not Disclosed",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-artificial-intelligence-engineer-premo-denim-noida-2-to-5-years-170225014898?src=seo_srp&sid=17417772944678170&xp=4&px=1",
      link:"https://careers.adobe.com/us/en/job/R153037/Machine-Learning-Engineer-3?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
    ],
  };

  return (
    <div>
      <Header />
      <Navbar />

      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      <JobCarousel
        jobs={jobsData?.software}
        title={"Software Developer Jobs 2025 – Freshers & Experienced"}
        color={"blue"}
      />

      <JobCarousel
        jobs={jobsData?.Software_testing}
        title={"Software Testing Jobs (Manual & Automation) 2025"}
        color={"green"}
      />

      <JobCarousel
        jobs={jobsData?.Project_Management}
        title={"Project Management Jobs 2025 – IT & Tech Sector"}
        color={"orange"}
      />

      <JobCarousel jobs={jobsData?.AI_ML} title={"AI & ML Jobs in India 2025 – High-Paying Roles"} color={"purple"} />
    </div>
  );
};

export default TechnologyHome1;
