import Hero from "@/components/Hero";
import PeopleSection from "@/components/PeopleSection";
import { selectedVisuals } from "@/data/site";

export const metadata = {
  title: "Studio | Architect Samuel Alonge"
};

export default function PeoplePage() {
  return (
    <main>
      <Hero
        eyebrow="Studio"
        title="Design leadership with trusted delivery partners."
        copy="A refined consultant-led model for design, advisory, and construction-stage clarity."
        image={selectedVisuals[1].image}
        align="center"
      />
      <PeopleSection />
    </main>
  );
}
