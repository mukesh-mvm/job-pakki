import TechnologyHome2 from "@/components/technology/technologyHome2";

export async function generateStaticParams() {
  return [
    { slugName: "primary" },
    { slugName: "senior" },
    { slugName: "collage" },
  ];
}
const page = ({ params }) => {
  return (
    <div>
      <TechnologyHome2 title="Jobs In Teaching" />
    </div>
  );
};

export default page;
