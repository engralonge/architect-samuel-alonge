export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden bg-white">
      <div className="relative aspect-[1.28/1] overflow-hidden bg-accl-paper">
        <img
          src={project.image}
          alt={`${project.title} architectural placeholder`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
        <span className="absolute left-4 top-4 bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accl-ink">
          {project.category}
        </span>
      </div>
      <div className="border-x border-b border-accl-line p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
          <span className="text-xs uppercase tracking-[0.18em] text-accl-muted">{project.year}</span>
        </div>
        <p className="mt-4 text-sm text-accl-muted">{project.location}</p>
      </div>
    </article>
  );
}
