import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import { heroImage } from "@/data/site";

export const metadata = {
  title: "Profile | Architect Samuel Alonge"
};

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
