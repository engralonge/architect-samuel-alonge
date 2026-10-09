import Hero from "@/components/Hero";
import PeopleSection from "@/components/PeopleSection";
import { heroImage } from "@/data/site";

export const metadata = {
  title: "Studio | Architect Samuel Alonge"
};

export default function PeoplePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero
        eyebrow="Studio"
        title="Design leadership with trusted delivery partners."
        copy="A refined consultant-led model for design, advisory, and construction-stage clarity."
        image={heroImage}
        align="center"
      />
      <PeopleSection />
    </main>
  );
}
