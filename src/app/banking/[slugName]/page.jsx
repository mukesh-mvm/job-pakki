import TechnologyHome6 from "@/components/technology/technologyHome6";


export const metadata = {
  title: 'About Us | Job Ki Tyaari - Your Career Guide',
  description: 'Job Ki Tyaari’s mission to help job seekers with career tips, exam updates, and study materials. Learn more about us',
  metadataBase: new URL('https://jobkityaari.com'),
  alternates: {
    canonical: './',
  },
   
  
}
export async function generateStaticParams() {
  return [{ slugName: "banking" }, { slugName: "insurance" }];
}
const page = ({ params }) => {
  return (
    <div>
      <TechnologyHome6 title={"Jobs In Finance"} />
    </div>
  );
};

export default page;
