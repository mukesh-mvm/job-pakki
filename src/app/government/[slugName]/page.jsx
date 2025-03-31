import TechnologyHome5 from "@/components/technology/technologyHome5";

export async function generateStaticParams() {
  return [
    { slugName: "railway" },
    { slugName: "defense" },
    { slugName: "upsc" },
    { slugName: "ministry" },
  ];
}
const page = ({ params }) => {
  return (
    <div>
      <TechnologyHome5 title={"Jobs In Govenment"} />
    </div>
  );
};

export default page;
