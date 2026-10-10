import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import { heroImage } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Profile | Architect Samuel Alonge", "Discover the disciplined design and construction thinking of Architect Samuel Alonge / Crystal Stairs Ltd.", "/about-us");

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero
        eyebrow="Profile"
        title="A calm architectural mind for high-stakes buildings."
        copy="We shape timeless, functional spaces with disciplined design and construction thinking."
        image={heroImage}
        align="center"
      />
      <AboutSection />
    </main>
  );
}
