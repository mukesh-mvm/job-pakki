import TechnologyHome1 from "@/components/technology/TechnologyHome1"; // Capitalized component name

export const metadata = {
    title: 'Technology Jobs in India 2025 – IT, Software & Developer Vacancies',
    description: 'Explore the latest IT & software jobs in India. Find openings for software developers, AI engineers, data scientists & more.',
    metadataBase: new URL('https://jobkityaari.com'),
    alternates: {
      canonical: './',
    },
}
const Page = () => {
  return (
    <div>
      <TechnologyHome1 title={"Latest Technology Jobs in India 2025"} />{" "}
      {/* Capitalized component usage */}
    </div>
  );
};

export default Page;
