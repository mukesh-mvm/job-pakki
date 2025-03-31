import React from "react";
import JobCarousel from "./JobCarousel";
import Header from "../header/Header";
import Navbar from "../header/Navbar";

const technologyHome4 = ({ title }) => {
  const jobsData = {
    marketing: [
      {
        title: "Digital Marketing Executive",
        company: "MG Makeovers Services",
        logo: "/images/mm1.png",
        salary: "33000 Per Month",
        profile: "Full Time",
        // link: "https://www.naukri.com/job-listings-marketing-executive-kgn-infotech-llp-noida-1-to-2-years-030325016745?src=seo_srp&sid=17417778035606496&xp=14&px=1",
       link:"https://www.mgmakeovers.com/jobs/digital-marketing-executive-job?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
      {
        title: "Marketing Manager",
        company: "Abbott",
        logo: "/images/mm2.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        // link: "https://www.naukri.com/job-listings-marketing-manager-rarr-technologies-noida-15-to-24-years-120325502182?src=seo_srp&sid=17417778035606496_1&xp=19&px=2",
      link:"https://www.jobs.abbott/us/en/job/31107216/Marketing-Manager-India-Emerging-Asia?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Marketing Head",
        company: "Michael Page",
        logo: "/images/mm3.png",
        salary: "Not Disclosed",
        profile: "Remote",
        // link: "https://cutshort.io/job/Manager-Growth-Marketing-Noida-LambdaTest-TjmjW6at?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      link:"https://www.michaelpage.co.in/job-detail/marketing-head-fmcg-7-years-noida/ref/jn-122024-6622125?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Digital Marketing",
        company: "Capital Placement Services",
        logo: "/images/mm4.png",
        salary: "4-6.5 Lacs P.A",
        profile: "Full Time",
        // link: "https://www.naukri.com/job-listings-urgent-hiring-marketing-head-gurgaon-cars24-cars24-gurugram-8-to-11-years-070325020830?src=seo_srp&sid=17418506076981657&xp=5&px=1",
      link:"https://www.capitalplacement.in/job-openings-for-digital-marketing-executive-delhi-1113838.htm?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Marketing Senior Executive ",
        company: "Sopra Steria",
        logo: "/images/mm5.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        // link: "https://www.naukri.com/job-listings-marketing-manager-nestle-gurugram-4-to-8-years-040325920463?src=seo_srp&sid=17418515988090&xp=17&px=1",
      link:"https://careers.soprasteria.com/job/marketing-senior-executive-in-noida-uttar-pradesh-india-jid-3333?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },
    ],
    Sales: [
      {
        title: "Associate Sales Consultant",
        company: "PolicyBazaar",
        logo: "/images/ms1.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        // link: "https://img.naukimg.com/logo_images/groups/v1/10096884.gif",
      link:"https://www.policybazaar.com/careers/"
      },

      {
        title: "Expert Sales Operation Manager",
        company: "Haleon",
        logo: "/images/ms2.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        // link: "https://www.naukri.com/job-listings-sales-manager-it-software-adroithr-management-services-noida-delhi-ncr-2-to-4-years-050325021542?src=seo_srp&sid=17417787427632832&xp=9&px=1",
      link:"https://careers.haleon.com/careers/job/563705879400639-expert-sales-operations-manager-gurgaon-haryana-india?domain=haleon.com&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
      },

      {
        title: "Product Feild Sales Executive",
        company: "Rentokil Initial",
        logo: "/images/ms3.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"https://careers.rentokil-initial.com/job/product-field-sales-executive-delhi-exp-min-2-yrs-ex-in-delhi-india-jid-1107?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.naukri.com/job-listings-international-sales-executive-nri-sales-policybazaar-gurugram-0-to-3-years-120325009494?src=seo_srp&sid=17418520192155303&xp=7&px=1",
      },

      {
        title: "Executive N - Project Sales",
        company: "Asian Paints",
        logo: "/images/ms4.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"https://careers.asianpaints.com/job/Delhi-EXECUTIVE-N-PROJECT-SALES-DL/1240029500/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.naukri.com/job-listings-assistant-manager-deputy-sales-manager-corporate-sales-info-edge-noida-gurugram-delhi-ncr-1-to-4-years-080125010954?src=seo_srp&sid=17418520192155303&xp=2&px=1",
      },

      {
        title: "Feild Sales",
        company: "Apna",
        logo: "/images/ms5.png",
        salary: "Not Disclosed",
        profile: "Remote",
       link:"https://careers.apna.co/_/j/E0752160AC/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.naukri.com/job-listings-primary-teacher-f-gd-goenka-noida-greater-noida-3-to-5-years-230617504435?src=seo_srp&sid=17421402981823722&xp=2&px=1",
      },
    ],
    finance: [
      {
        title: "Consultant Finance",
        company: "Randstad",
        logo: "/images/mf1.png",
        salary: "Not Disclosed",
        profile: "Full Time",
       link:"https://www.randstad.in/jobs/consultant-finance_gurugram_86dbbc8a-9019-497c-a659-432727cd1f2e/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.glassdoor.co.in/job-listing/senior-finance-specialist-contract-to-billing-jones-lang-lasalle-JV_IC2921225_KO0,45_KE46,64.htm?jl=1009670788368&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      },
      {
        title: "Finance Plan & Analysis Specialist",
        company: "Accenture",
        logo: "/images/mf2.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"https://www.accenture.com/in-en/careers/jobdetails?id=AIOC-S481049_en&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.naukri.com/job-listings-financial-analyst-american-express-company-gurugram-0-to-5-years-060325502356?src=seo_srp&sid=17418524573953137&xp=1&px=1",
      },
      {
        title: "Finance Analyst",
        company: "Boston Consulting Group",
        logo: "/images/mf3.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"https://careers.bcg.com/global/en/job/51640/Finance-Analyst-Global-RTR-process?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.naukri.com/job-listings-accounts-and-finance-manager-aye-finance-gurugram-4-to-9-years-110325019290?src=seo_srp&sid=17418524573953137&xp=13&px=1",
      },
      {
        title: "Finance Associate",
        company: "Internshala",
        logo: "/images/mf4.png",
        salary: "4-5 Lacs P.A",
        profile: "Full Time",
        link:"https://internshala.com/job/detail/finance-associate-job-in-gurgaon-at-internshala1742813813"
        // link: "https://www.naukri.com/job-listings-manager-financial-planning-analysis-mastercard-gurugram-16-to-20-years-070325501776?src=seo_srp&sid=17418524573953137_1&xp=9&px=2",
      },

      {
        title: "Senior Accountant",
        company: "Mastercard",
        logo: "/images/mf5.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"https://careers.mastercard.com/us/en/job/R-238003/Senior-Accountant"
        // link: "https://www.naukri.com/job-listings-finance-manager-gunnebo-entrance-control-gurugram-7-to-12-years-110325014453?src=seo_srp&sid=17418524573953137_1&xp=12&px=2",
      },
    ],

    business: [
      {
        title: "Business Development Manager",
        company: "Thermo Fisher Scientific",
        logo: "/images/mb1.png",
        salary: "Not Disclosed",
        profile: "Full Time",
       link:"https://jobs.thermofisher.com/global/en/job/TFSCGLOBALR01305555EXTERNALENGLOBAL/Business-Development-Manager?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.glassdoor.co.in/job-listing/business-sales-activation-lead-google-JV_IC2921225_KO0,30_KE31,37.htm?jl=1009670798749&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      },
      {
        title: "Business Development Executive",
        company: "Bhaarat Wealth Group",
        logo: "/images/mb2.png",
        salary: "6-10 Lacs P.A",
        profile: "Full Time",
        link:"https://bhaaratwealthgroup.com/"
        // link: "https://www.naukri.com/job-listings-central-bd-hiring-executive-lenskart-solutions-private-limited-gurugram-1-to-3-years-150325903311?src=seo_srp&sid=17421381661785975&xp=1&px=1",
      },
      {
        title: "Business Development",
        company: "Michael Page",
        logo: "/images/mb3.png",
        salary: "20-24 Lacs P.A",
        profile: "Full Time",
        link:"https://www.michaelpage.co.in/job-detail/sales-business-development-acoustics-gurgaon/ref/jn-012025-6647397?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.naukri.com/job-listings-business-development-executive-wizemen-technologies-llp-gurugram-3-to-4-years-100325009151?src=seo_srp&sid=17421381661785975&xp=8&px=1",
      },
      {
        title: "Business Development Associate",
        company: "Testbook",
        logo: "/images/mb4.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"https://testbook.hire.trakstar.com/jobs/fk0p69x?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
        // link: "https://www.glassdoor.co.in/job-listing/business-development-manager-noida-60k-enterslice-JV_IC4477468_KO0,38_KE39,49.htm?jl=1008827817860&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      },

      {
        title: "Senior Business Development Executive",
        company: "DHL Group",
        logo: "/images/mb5.png",
        salary: "Not Disclosed",
        profile: "Full Time",
        link:"https://careers.dhl.com/global/en/job/DPDHGLOBALAV282924ENGLOBALEXTERNAL/Senior-Business-Development-Executive-DCC?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic#skipToMainContent"
        // link: "https://www.jobhai.com/sales-business-development-business-development-officer-job-in-just-dial-limited-sector-16-noida-0-to-4-years-1737465062-5353142-jid?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      },



    ],
  };

  return (
    <div>
      <Header />
      <Navbar />

      <h1 className=" text-2xl font-bold text-center mb-2 pt-8">{title}</h1>
      <JobCarousel
        jobs={jobsData?.marketing}
        title={"Find the Best Marketing Jobs in India 2025"}
        color={"blue"}
      />

      <JobCarousel jobs={jobsData?.Sales} title={"Best Sales Job Opportunities in India 2025"} color={"green"} />

      <JobCarousel
        jobs={jobsData?.finance}
        title={"Find the Best Finance Jobs in India 2025 "}
        color={"orange"}
      />

      <JobCarousel
        jobs={jobsData?.business}
        title={"Top Business Development Job Openings in India 2025"}
        color={"purple"}
      />
    </div>
  );
};

export default technologyHome4;
