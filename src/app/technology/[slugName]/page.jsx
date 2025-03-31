import TechnologyHome1 from "@/components/technology/TechnologyHome1"; // Capitalized component name

export async function generateStaticParams() {
  return [
    { slugName: "software-development" },
    { slugName: "software-testing" },
    { slugName: "project-managemet" },
    { slugName: "ai-ml" },
  ];
}
const Page = ({ params }) => {
  return (
    <div>
      <TechnologyHome1 title={"Jobs In Technology"} />{" "}
      {/* Capitalized component usage */}
    </div>
  );
};

export default Page;
