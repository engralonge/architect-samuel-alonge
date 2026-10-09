import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import { gloryDomeImages, projectCategories } from "@/data/site";

export const metadata = {
  title: "Work | Architect Samuel Alonge"
};

export default function ProjectsPage() {
  return (
    <main>
      <Hero
        eyebrow="Work"
        title="Landmark architecture, worship spaces, residences, and advisory work."
        image={gloryDomeImages[0].src}
        align="center"
      />
      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-10 flex flex-wrap gap-3">
            {projectCategories.map((category) => (
              <span key={category} className="border border-accl-line px-4 py-3 text-xs uppercase tracking-[0.18em] text-accl-muted">
                {category}
              </span>
            ))}
          </div>
          <ProjectGrid />
        </div>
      </section>
    </main>
  );
}
