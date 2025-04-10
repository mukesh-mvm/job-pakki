'use client'
import React, { useState } from "react";
import JobCarousel from "./JobCarousel";
import Header from "../header/Header";
import Navbar from "../header/Navbar";

const technologyHome5 = ({ title,para }) => {


  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };
  const jobsData = {
   

    NewJobs: [
      {
        title: "Junior Stenographer",
        company: "National Environmental Engineering Research Institute",
        logo: "/images/Ng1.png",
        salary: "19900-81100 ",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-developer-capline-services-noida-1-to-3-years-210225016648?src=seo_srp&sid=17417682183862455_1&xp=1&px=2",
         link:"https://www.neeri.res.in/file_homes/85743336_Full%20&%20Final%20Advt%20for%20JSA-Jr%20Steno%20with%20Annexure%20and%20Proforma.pdf"
      },
  
      {
        title: "Junior Research Fellow",
        company: "ISRO Vikram Sarabhai Space Centre ",
        logo: "/images/Ng2.png",
        salary: "37,000 – 42,000",
        profile: "Full time",
        // link: "https://www.naukri.com/job-listings-software-developer-capline-services-noida-1-to-3-years-210225016648?src=seo_srp&sid=17417682183862455_1&xp=1&px=2",
         link:"https://docs.google.com/spreadsheets/u/5/d/1YfSknOCHLNWSHwqUAouwGlVvxOF3Ivlexe13Tv8WMHs/edit"
      },

      {
        title: "Counsellor/Art Master",
        company: "Bihar Govt Jobs",
        logo: "/images/Ng3.png",
        salary: "50000",
        profile: "Full time",
          // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
        link:"https://www.sainikschoolnalanda.edu.in/wp-content/uploads/2025/vac/APPLICATION.pdf"
        },
  

        {
          title: "Assistant Manager",
          company: "Assam Govt Jobs",
          logo: "/images/gn1.png",
          salary: "16400 - 46500",
          profile: "Full time",
            // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
          link:"https://bvfcljobs.eload.cloud/"
          },

          {
            title: "Junior Assistant",
            company: "Airports Authority of India",
            logo: "/images/gn1.png",
            salary: "31,000 – 92,000",
            profile: "Full time",
              // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
            link:"https://www.aai.aero/en/careers/recruitment"
            },


            {
              title: "TNPSC Group 1 ",
              company: "TNPSC",
              logo: "/images/gn3.png",
              salary: "56100- 205700",
              profile: "Full time",
                // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
              link:"https://apply.tnpscexams.in/secure?app_id=UElZMDAwMDAwMQ=="
              },


              {
                title: "Senior Analyst",
                company: "TN MRB",
                logo: "/images/gn4.png",
                salary: "56100- 205700",
                profile: "Full time",
                  // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
                link:"https://tnmrbsa25.onlineregistrationform.org/MRBSA/"
                },


                {
                  title: "Stenographer Grade III",
                  company: "High Court of Punjab ",
                  logo: "/images/gn6.png",
                  salary: "Not Disclose",
                  profile: "Full time",
                    // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
                  link:"https://phcjwr.formflix.org/"
                  },


                  {
                    title: "Graduate & Diploma Apprentice",
                    company: "Bharat Dynamics Limited",
                    logo: "/images/gn7.png",
                    salary: "8000 - 9000",
                    profile: "Full time",
                      // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
                    link:"https://nats.education.gov.in/student_type.php"
                    },

                    {
                      title: "Research Associate – I",
                      company: "ISRO",
                      logo: "/images/gn8.png",
                      salary: "37,000 – 58,000",
                      profile: "Full time",
                        // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
                      link:"https://www.isro.gov.in/URSCRecruitment2025_1.htmlhttps://www.isro.gov.in/URSCRecruitment2025_1.html"
                      },


                      {
                        title: "Assistant Master",
                        company: "RMS",
                        logo: "/images/gn9.png",
                        salary: "44900 - 142400",
                        profile: "Full time",
                          // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
                        link:"https://www.rashtriyamilitaryschools.edu.in/Attachments/recruit_ajm.pdf"
                        },


                        {
                          title: "Management Trainees",
                          company: "Engineers Indai Limited",
                          logo: "/images/gn10.png",
                          salary: "44900 - 142400",
                          profile: "Full time",
                            // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
                          link:"https://recruitment.eil.co.in/"
                          },
    
  
        
      
     
    ],


    railway: [

      {
        title: "Assistant/Junior Engineer",
        company: "Railways",
        logo: "/images/g1.png",
        salary: "18250 - 75850",
        profile: "Full-time",
        link: "https://ncrtc.in/elementor-39298/",
      },

      {
        title: "Apprentices",
        company: "Railways",
        logo: "/images/g1.png",
        salary: "5000 - 9000",
        profile: "Full-time",
        link: "https://www.apprenticeshipindia.gov.in/",
      },
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
        title: "Indian Navy Agniveer ",
        company: "Indian Army ",
        logo: "/images/gn5.png",
        salary: "37000",
        profile: "Full time",
          // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
        link:"https://www.joinindiannavy.gov.in/"
        },

      {
        title: "Junior Research Fellow",
        company: "DRDO Institute of Technology Management  ",
        logo: "/images/gn2.png",
        salary: "37000",
        profile: "Full time",
          // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
        link:"https://www.drdo.gov.in/drdo/career/walk-interview-junior-research-fellows-jrf-itm-mussoorie"
        },

      {
        title: "Project Scientist ‘B’ & ‘C’",
        company: "Aeronautical Development Agency (ADA)",
        logo: "/images/Ng4.png",
        salary: "90789 - 108073",
        profile: "Full time",
          // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
        link:"https://ada.gov.in/adv_130/Registration"
        },
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



  const data1 = [
    {
      id:1,
      title:"Explore the latest Indian Railways job openings in North, South, East, and West zones."
    },
    {
      id:2,
      title:"Get updates on roles like Ticket Collector, Loco Pilot, Station Master, Clerk, Section Engineer, Signal & Telecommunication Engineer, and Goods Guard. Higher-level positions like Deputy General Manager are also included."
    },
    {
      id:3,
      title:"We simplify official updates into easy-to-read formats. Check job requirements and eligibility to apply confidently. Stay updated here for the newest railway jobs across India."
    }
  ]


  const data2 = [
    {
      id:1,
      title:"Discover opportunities in the Indian Defence Services across diverse roles."
    },

    {
      id:2,
      title:"We cover job updates in sectors like Combat Arms, Engineers, Signals, Ordnance, and Medical Corps within the Indian Army. Additionally, explore Navy roles in Engineering and Electrical branches or Air Force opportunities in Flying and Ground Duty."
    },
    {
      id:3,
      title:"Find posts like Assistant Commandant, Inspector, and Sipahi in ITBP, Coast Guard, CISF, and BSF. All information is sourced directly from official sites for accuracy and clarity."
    }
  ]

  const data3 = [
    {
      id:1,
      title:"Stay informed with regular UPSC exam updates, including exam dates, format changes, admit card releases, and results."
    },
    {
      id:2,
      title:"We also track government job vacancies from various departments, providing updates on application deadlines, preparation resources, and final interviews."
    },

    {
      id:3,
      title:"Our platform ensures you have all the information needed to focus on your preparation. Check back here for the latest UPSC and government job notifications."
    },
  ]


  return (
    <div>
      <Header />
      <Navbar />

      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      

       <div className=" w-[90%] mx-auto">
       {(showAll ? para : [para[0]]).map((item, index) => (
        <p key={index} className="text-xl text-black mb-4">
          {item.title}
        </p>
      ))}

      <button
        onClick={handleToggle}
        className="text-blue-600 underline mt-2"
      >
        {showAll ? "Read Less" : "Read More"}
      </button>
    </div>
      <JobCarousel jobs={jobsData?.NewJobs} title={"Latest Govenment Job Opening 2025 - All Sectors"} color={"blue"} />
      <JobCarousel jobs={jobsData?.railway} title={"Latest Railway Jobs in India 2025"} color={"blue"}  data={data1}/>

      <JobCarousel jobs={jobsData?.defence} title={"Explore Latest Defense Jobs in India 2025"} color={"green"} data={data2} />

      <JobCarousel
        jobs={jobsData?.upsc}
        title={"UPSC Exam Notifications 2025 – Latest Govt Jobs"}
        color={"orange"}
        data={data3}
      />

      {/* <JobCarousel jobs={jobsData?.AI_ML} title={"Apply for Latest Ministry Jobs in India"} color={"purple"} /> */}
    </div>
  );
};

export default technologyHome5;
