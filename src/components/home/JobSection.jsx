
"use client";
import Link from "next/link";

const jobsData = {
  topJobs: [
    // {
    //   title: "Software Development Engineer",
    //   company: "Adobe",
    //   logo: "/images/h1.png",
    //   salary: "Not Disclosed",
    //   profile: "Full-time",
    //   // link: "https://www.foundit.in/job/professional-software-development-engineering-fiserv-india-private-limited-noida-34121010?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    // link:"https://www.adobe.com/"
    // },
    // {
    //   title: "Senior Software Engineer",
    //   company: "Insta Safe",
    //   logo: "/images/h2.png",
    //   salary: "5-7.5 Lacs P.A",
    //   profile: "Full time",
    //   // link: "https://www.naukri.com/job-listings-software-developer-capline-services-noida-1-to-3-years-210225016648?src=seo_srp&sid=17417682183862455_1&xp=1&px=2",
    //    link:"https://www.instahyre.com/job-337579-senior-software-engineer-at-instasafe-meerut/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
    // },



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
  ],
  featuredJobs: [
//     {
    //   title: "Senior Data Analyst",
    //   company: "Hitachi",
    //   logo: "/images/h3.png",
    //   salary: "Not Disclosed",
    //   profile: "Full time",
    //   // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
    // link:"https://careers.hitachi.com/jobs/15816699-senior-data-analyst-irc260044?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
    // },
    // {
    //   title: "Marketing Manager",
    //   company: "Abbott",
    //   logo: "/images/h4.png",
    //   salary: "Not Disclosed",
    //   profile: "Full-time",
    //   // link: "https://www.naukri.com/job-listings-project-manager-thomson-digital-noida-0-to-3-years-220125005658?src=seo_srp&sid=17417758418463907&xp=1&px=1",
    // link:"https://www.jobs.abbott/us/en/job/31107216/Marketing-Manager-India-Emerging-Asia?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
    // },


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
        title: "Project Scientist ‘B’ & ‘C’",
        company: "Aeronautical Development Agency (ADA)",
        logo: "/images/Ng4.png",
        salary: "90789 - 108073",
        profile: "Full time",
          // link: "https://www.naukri.com/job-listings-hiring-telecaller-for-real-estate-developer-gurgaon-ctc-8-lpa-cybernetic-management-professionals-gurugram-1-to-4-years-220125013042?src=jddesktop&sid=17417748483259534&xp=1&px=1",
        link:"https://ada.gov.in/adv_130/Registration"
        },
  ],
  recentJobs: [
    // {
    //   title: "Project Manager Specialist",
    //   company: "Ge Vernova",
    //   logo: "/images/h5.png",
    //   salary: "Not Disclosed",
    //   profile: "Remote",
    //   // link: "https://www.naukri.com/job-listings-software-developer-java-python-c-etl-r-systems-international-noida-3-to-8-years-170225014052?src=cluster&sid=17417682183862455_6&xp=2&px=1",
    //   link:"https://careers.gevernova.com/global/en/job/GVXGVWGLOBALR3787836EXTERNALENGLOBAL/Project-Management-Specialist-PCA?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
    // },
    // {
    //   title: "Head AI/ ML",
    //   company: "RGF Professional Recruitment",
    //   logo: "/images/h6.png",
    //   salary: "Not Disclosed",
    //   profile: "Full time",
    //   // link: "https://www.naukri.com/job-listings-project-manager-cloudsheer-consulting-noida-1-to-3-years-040325012513?src=seo_srp&sid=17417765374131176&xp=1&px=1",
    // link:"https://www.india.rgf-professional.com/jobs/14624-head-ai-ml-gurgaon-gurugram?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
    // },
    // {
    //   title: "Business Development Associate",
    //   company: "Testbook",
    //   logo: "/images/mb4.png",
    //   salary: "Not Disclosed",
    //   profile: "Full time",
    //   // link: "https://cutshort.io/job/Frontend-Developer-Immediate-Joiner-Noida-NCR-Delhi-Gurgaon-Noida-Crescerance-oIzYGwU2?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    // link:"https://testbook.hire.trakstar.com/jobs/fk0p69x?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
    // },
    // {
    //   title: "Senior Accountant",
    //   company: "Mastercard",
    //   logo: "/images/mf5.png",
    //   salary: "Not Disclosed",
    //   profile: "Full Time",
    //   link:"https://careers.mastercard.com/us/en/job/R-238003/Senior-Accountant"
    //   // link: "https://www.naukri.com/job-listings-finance-manager-gunnebo-entrance-control-gurugram-7-to-12-years-110325014453?src=seo_srp&sid=17418524573953137_1&xp=12&px=2",
    // },


    {
      title: "Associate Support Engineer",
      company: "Edifecs",
      logo: "/images/Ns1.png",
      salary: "Not Disclosed",
      profile: "Full Time",
      link:"https://jobs.jobvite.com/edifecs/job/oJdEvfwP?jvst=Job%2520Board"
      // link: "https://www.naukri.com/job-listings-finance-manager-gunnebo-entrance-control-gurugram-7-to-12-years-110325014453?src=seo_srp&sid=17418524573953137_1&xp=12&px=2",
    },


    {
      title: "Software Engineer",
      company: "Confluent ",
      logo: "/images/Ns2.png",
      salary: "Not Disclosed",
      profile: "Full Time",
      link:"https://www.amazonconservation.org/take-action/donate/?did=10665&cid=a7f973a0-bdc5-4add-5589-3e85019be1c7&ezoic=ezoic"
      // link: "https://www.naukri.com/job-listings-finance-manager-gunnebo-entrance-control-gurugram-7-to-12-years-110325014453?src=seo_srp&sid=17418524573953137_1&xp=12&px=2",
    },


    {
      title: "The Associate, Service Operations",
      company: "Aristocrat",
      logo: "/images/Nm1.png",
      salary: "Not Disclosed",
      profile: "Full Time",
      link:"https://aristocrat.wd3.myworkdayjobs.com/AristocratExternalCareersSite/job/Noida-UP-IN/Associate-I---People---Culture-Service-Operations_R0017873?rx_a=1&rx_c=india&rx_ch=jobp4p&rx_group=402090&rx_job=R0017873&rx_medium=cpc&rx_r=none&rx_source=Indeed&rx_ts=20250402T040617Z&rx_vp=cpc&source=Indeed_Sponsored&rx_p=HA56CGAZ0Y&rx_viewer=3e65507f0f9b11f0b2b91f773aa3c01428a97e641e65410eaa5726656f01826b"
      // link: "https://www.naukri.com/job-listings-finance-manager-gunnebo-entrance-control-gurugram-7-to-12-years-110325014453?src=seo_srp&sid=17418524573953137_1&xp=12&px=2",
    },

    {
      title: "Business Development Associate",
      company: "BIG BELL TECHNOLOGIES PRIVATE LIMITED",
      logo: "/images/Nm2.png",
      salary: "Not Disclosed",
      profile: "Full Time",
      link:"https://www.indiafilings.com/search/big-bell-technologies-private-limited-cin-U72200TG2022PTC161392"
      // link: "https://www.naukri.com/job-listings-finance-manager-gunnebo-entrance-control-gurugram-7-to-12-years-110325014453?src=seo_srp&sid=17418524573953137_1&xp=12&px=2",
    },
  ],
};

const JobCard = ({ title, company, logo, salary, profile, link }) => (
  <div className="bg-white hover:bg-amber-50 shadow-lg rounded-lg p-5 w-full min-h-[360px] flex flex-col">
    <div className="flex flex-col items-center text-center flex-grow">
      

      <div className="h-[40px]">
      <img src={logo} alt={company} className="w-45  h-14 object-contain" />
      </div>
      
      <h3 className="text-xl h-[80px] text-black font-semibold mt-3 break-words pt-2">{title}</h3>
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

const JobSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-[20px]">
        {/* Job Sections Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Jobs Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4  bg-green-500 rounded-2xl text-white text-center">
            Best Job in 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobsData.topJobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>

          {/* Featured Jobs Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4 bg-orange-400 text-white rounded-2xl text-center">
            Featured Jobs in 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobsData.featuredJobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Jobs Section (4 Cards in Row) */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 bg-purple-500 text-white rounded-2xl text-center">
          Recent Job Vacancy in 2025
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jobsData.recentJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSection;

