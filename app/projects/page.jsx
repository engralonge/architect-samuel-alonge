import ProjectExplorer from "@/components/ProjectExplorer";

export const metadata = {
  title: "Projects | Architect Samuel Alonge",
  description: "Explore the published work of Architect Samuel Alonge / Crystal Stairs Ltd by project sector.",
  openGraph: { title: "Projects | Architect Samuel Alonge", description: "Architecture for buildings that must carry meaning." }
};

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="bg-accl-paper px-5 pb-12 pt-36 md:px-8 md:pb-16">
        <div className="mx-auto max-w-[1480px]">
          <p className="section-label">Selected Work</p>
          <h1 className="mt-5 font-display text-5xl md:text-7xl">Architecture with meaning.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-accl-muted">Landmark scale. Human experience. Disciplined architectural thinking.</p>
        </div>
      </section>
      <section className="bg-white px-5 py-10 md:px-8 lg:py-16" aria-label="Project portfolio">
        <div className="mx-auto max-w-[1480px]"><ProjectExplorer /></div>
      </section>
    </main>
  );
}
