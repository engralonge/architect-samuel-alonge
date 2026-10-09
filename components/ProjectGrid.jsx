import { projects } from "@/data/site";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ limit, category = "All" }) {
  const visibleProjects = projects
    .filter((project) => category === "All" || project.category === category)
    .slice(0, limit ?? projects.length);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {visibleProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
