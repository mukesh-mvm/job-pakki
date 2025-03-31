import React from "react";
import JobCarousel from "./JobCarousel";
import Header from "../header/Header";
import Navbar from "../header/Navbar";

const technologyHome5 = ({ title }) => {
  const jobsData = {
    railway: [
      {
        title: "Medical Officer ",
        company: "Railways",
        logo: "/images/g1.png",
        salary: "76000 per month",
        profile: "Full-time",
        link: "https://wr.indianrailways.gov.in/view_section.jsp?lang=0&id=0,4,461,618",
      },
      {
        title: "South Eastern Railways Apprentices",
        company: "Railways",
        logo: "/images/g1.png",
        salary: "20000 per month",
        profile: "Full time",
        link: "https://secr.indianrailways.gov.in/",
      },

      {
        title: "IRCTC Consultant",
        company: "Railways",
        logo: "/images/g1.png",
        salary: "100000 per month",
        profile: "Full time",
        link: "https://irctc.com/",
      },

      {
        title: "IRCTC Apprentices",
        company: "Railways",
        logo: "/images/g1.png",
        salary: "15000 per month",
        profile: "Full time",
        link: "https://www.apprenticeshipindia.gov.in/",
      },

      {
        title: "DMRC Supervisor ",
        company: "Railways",
        logo: "/images/g1.png",
        salary: "54000 per month",
        profile: "Full time",
        link: "https://delhimetrorail.com/",
      },

     
    ],
    defence: [
      {
        title: "NCC ",
        company: "Defense",
        logo: "/images/g3.png",
        salary: "100000 per Month",
        profile: "Full time",
        link: "https://www.joinindianarmy.nic.in/default.aspx",
      },
      {
        title: "Constable",
        company: "Indo Tibetan Border Police Force",
        logo: "/images/g2.png",
        salary: "69100 per month",
        profile: "Full time",
        link: "https://recruitment.itbpolice.nic.in/rect/index.php",
      },

      {
        title: "Constable/Tradesman",
        company: "Central Industrial Security Force",
        logo: "/images/g4.png",
        salary: "69100 per  month",
        profile: "Full time",
        link: "https://cisfrectt.cisf.gov.in/",
      },

      {
        title: "NCB Inspector",
        company: "Defense (Narcotics Control Bureau)",
        logo: "/images/g5.png",
        salary: "45000 per month",
        profile: "Full time",
        link: "https://narcoticsindia.nic.in/",
      },

      {
        title: "CRPF Assistant Commandant (GD)",
        company: "Defense (Central Reserve Police Force)",
        logo: "/images/g6.png",
        salary: "100000 per month",
        profile: "Full time",
        link: "https://crpf.gov.in/",
      },
    ],
    upsc: [
      {
        title: "UPSC CSE",
        company: "UPSC",
        logo: "/images/u1.png",
        salary: "100000 per month",
        profile: "Full time",
        link: "https://upsc.gov.in/",
      },
      {
        title: "UPSC CDS",
        company: "UPSC",
        logo: "/images/u2.png",
        salary: "100000 per month",
        profile: "Full time",
        link: "https://upsc.gov.in/",
      },
      {
        title: "UPSC CMS",
        company: "UPSC",
        logo: "/images/u3.png",
        salary: "100000 per month",
        profile: "Full time",
        link: "https://upsc.gov.in/",
      },
      {
        title: "UPSC IES",
        company: "UPSC",
        logo: "/images/u4.png",
        salary: "85000 per month",
        profile: "Full time",
        link: "https://upsc.gov.in/",
      },

      {
        title: "UPSC ISS",
        company: "UPSC",
        logo: "/images/u2.png",
        salary: "100000 per month",
        profile: "Full time",
        link: "https://upsc.gov.in/",
      },
    ],

    AI_ML: [
      {
        title: "Medical Officer ",
        company: "Railways",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0oPq5vwRYg5yMu1e_wFOiEdC3V--DZHFVw&s",
        salary: "76000 per month",
        profile: "Full-time",
        link: "https://www.indgovtjobs.in/2025/03/western-railway-medical-officer.html",
      },
      {
        title: "South Eastern Railways Apprentices",
        company: "Railways",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0oPq5vwRYg5yMu1e_wFOiEdC3V--DZHFVw&s",
        salary: "20000 per month",
        profile: "Full time",
        link: "https://www.freejobalert.com/articles/south-east-central-railway-secr-act-apprentices-recruitment-2025-3001550",
      },

      {
        title: "IRCTC Consultant",
        company: "Railways",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0oPq5vwRYg5yMu1e_wFOiEdC3V--DZHFVw&s",
        salary: "100000 per month",
        profile: "Full time",
        link: "https://www.freejobalert.com/articles/irctc-consultant-recruitment-2025-3002968",
      },

      {
        title: "IRCTC Apprentices",
        company: "Railways",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0oPq5vwRYg5yMu1e_wFOiEdC3V--DZHFVw&s",
        salary: "15000 per month",
        profile: "Full time",
        link: "https://www.freejobalert.com/articles/irctc-apprentice-recruitment-2025-3002887",
      },

      {
        title: "DMRC Supervisor ",
        company: "Railways",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0oPq5vwRYg5yMu1e_wFOiEdC3V--DZHFVw&s",
        salary: "54000 per month",
        profile: "Full time",
        link: "https://www.freejobalert.com/articles/dmrc-supervisor-recruitment-2025-3002676#google_vignette",
      },
    ],
  };

  return (
    <div>
      <Header />
      <Navbar />

      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      <JobCarousel jobs={jobsData?.railway} title={"Latest Railway Jobs in India 2025"} color={"blue"} />

      <JobCarousel jobs={jobsData?.defence} title={"Explore Latest Defense Jobs in India 2025"} color={"green"} />

      <JobCarousel
        jobs={jobsData?.upsc}
        title={"UPSC Exam Notifications 2025 – Latest Govt Jobs"}
        color={"orange"}
      />

      {/* <JobCarousel jobs={jobsData?.AI_ML} title={"Apply for Latest Ministry Jobs in India"} color={"purple"} /> */}
    </div>
  );
};

export default technologyHome5;
