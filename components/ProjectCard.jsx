import Image from "next/image";
import PhotoPending from "@/components/PhotoPending";
import Link from "next/link";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className="group overflow-hidden bg-white">
      {/* Phase 3 will replace the flagship anchor with the verified detail route. */}
      <Link href="/#work" className="block" aria-label={`Study ${project.title}`}>
      <div className={`relative overflow-hidden bg-accl-paper ${featured ? "aspect-[16/9]" : "aspect-[1.28/1]"}`}>
        {project.image ? <Image
          src={project.image}
          alt={project.images?.[0]?.alt || project.title}
          fill
          sizes={featured ? "(max-width: 1023px) 100vw, 66vw" : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"}
          className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
        /> : <PhotoPending />}
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
        <span className="absolute left-4 top-4 bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accl-ink">
          {project.category}
        </span>
      </div>
      <div className="border-x border-b border-accl-line p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
          {project.year ? <span className="text-xs uppercase tracking-[0.18em] text-accl-muted">{project.year}</span> : null}
        </div>
        <p className="mt-4 text-sm text-accl-muted">{project.location}</p>
      </div>
      </Link>
    </article>
  );
}
