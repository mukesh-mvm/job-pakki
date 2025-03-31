import TechnologyHome6 from "@/components/technology/technologyHome6";

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
