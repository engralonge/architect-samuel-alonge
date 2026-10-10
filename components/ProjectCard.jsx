import Image from "next/image";
import PhotoPending from "@/components/PhotoPending";
import Link from "next/link";

export default function ProjectCard({ project, featured = false, headingLevel = 3, priority = false }) {
  const Heading = `h${headingLevel}`;
  const photo = project.images?.[0];
  return (
    <article style={{ "--gallery-width": `${project.images?.[0]?.width || 721}px` }} className="native-gallery group overflow-hidden bg-white">
      <Link href={`/projects/${project.slug}`} className="block">
      <div style={{ aspectRatio: photo ? `${photo.width} / ${photo.height}` : featured ? "16 / 9" : "1.28 / 1" }} className="relative w-full overflow-hidden bg-accl-paper">
        {project.image ? <Image
          src={project.image}
          alt={project.images?.[0]?.alt || project.title}
          fill
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          sizes={`(max-width: ${(photo?.width || 721) + 40}px) calc(100vw - 40px), ${photo?.width || 721}px`}
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        /> : <PhotoPending />}
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />
        <span className="absolute left-4 top-4 bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accl-ink">
          {project.category}
        </span>
      </div>
      <div className="border-x border-b border-accl-line p-5">
        <div className="flex items-start justify-between gap-4">
          <Heading className="font-display text-2xl leading-tight">{project.title}</Heading>
          {project.year ? <span className="text-xs uppercase tracking-[0.18em] text-accl-muted">{project.year}</span> : null}
        </div>
        <p className="mt-4 text-sm text-accl-muted">{project.location}</p>
      </div>
      </Link>
    </article>
  );
}
