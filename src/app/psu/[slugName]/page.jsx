import TechnologyHome3 from "@/components/technology/technologyHome3";

export async function generateStaticParams() {
  return [
    { slugName: "ongc" },
    { slugName: "ntpc" },
    { slugName: "gail" },
    { slugName: "power-grid" },
    { slugName: "bhel" },
  ];
}
const page = ({ params }) => {
  return (
    <div>
      <TechnologyHome3 title={"Jobs In PSU"} />
    </div>
  );
};

export default page;
