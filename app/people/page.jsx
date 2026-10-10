import Hero from "@/components/Hero";
import PeopleSection from "@/components/PeopleSection";
import { heroImage } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Studio | Architect Samuel Alonge", "Architect Samuel Alonge leads Crystal Stairs Ltd's architectural design and consulting practice.", "/people");

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
