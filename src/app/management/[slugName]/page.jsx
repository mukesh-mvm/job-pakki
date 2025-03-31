import TechnologyHome4 from "@/components/technology/technologyHome4";

export async function generateStaticParams() {
  return [
    { slugName: "marketing" },
    { slugName: "sales" },
    { slugName: "finance" },
    { slugName: "development" },
  ];
}
const page = ({ params }) => {
  return (
    <div>
      <TechnologyHome4 title={"Jobs In Managements"} />
    </div>
  );
};

export default page;
