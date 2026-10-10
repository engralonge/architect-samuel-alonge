import NativeImage from "@/components/NativeImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectFacts from "@/components/ProjectFacts";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectSpecifications from "@/components/ProjectSpecifications";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return pageMetadata(`${project.title} | Architect Samuel Alonge`, project.summary, `/projects/${project.slug}`, project.images.slice(0, 1));
}
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const photo = project.images[0];
  const meta = [["Location", project.location], ["Year", project.year], ["Client", project.client], ["Status", project.status]].filter(([, value]) => value);
  const related = projects.filter((item) => item.slug !== slug && item.sector === project.sector).slice(0, 3);
  const enquiryHref = `/?project=${encodeURIComponent(project.slug)}#contact`;
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="bg-accl-ink px-5 pt-32 text-white md:px-8">
        <div className="mx-auto max-w-[1480px]">
          <Link href="/projects" className="text-sm text-accl-warm hover:text-white">All projects</Link>
          <p className="mt-10 text-xs uppercase tracking-[0.14em] text-accl-warm">{project.sector}</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-7xl">{project.title}</h1>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">{meta.map(([label, value]) => <div key={label}><dt className="text-xs uppercase text-white/70">{label}</dt><dd className="mt-2 text-sm">{value}</dd></div>)}</dl>
          {photo ? <NativeImage src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={`(max-width: ${photo.width}px) 100vw, ${photo.width}px`} priority fetchPriority="high" className="ml-auto mt-10" /> : null}
        </div>
      </section>
      <section className="bg-accl-paper px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="order-2 pt-12 lg:order-1 lg:pt-16">
            <p className="section-label">Project Overview</p>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">{project.title}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-accl-muted">{project.summary}</p>
            {project.body.map((paragraph, index) => <p key={index} className="mt-5 max-w-3xl leading-8 text-accl-muted">{paragraph}</p>)}
            <ProjectSpecifications project={project} />
            <Link href={enquiryHref} className="mt-10 inline-block bg-accl-ink px-6 py-4 text-sm text-white hover:bg-accl-brick">Make an enquiry</Link>
          </div>
          <div className="order-1 -mt-10 self-start lg:order-2"><ProjectFacts project={project} /></div>
        </div>
      </section>
      {project.images.length ? <section className="bg-white px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1480px]"><h2 className="mb-10 font-display text-4xl">Gallery</h2><ProjectGallery images={project.images} title={project.title} /></div></section> : null}
      {related.length ? <section className="bg-accl-paper px-5 py-16 md:px-8"><div className="mx-auto max-w-[1480px]"><h2 className="mb-10 font-display text-4xl">Related projects</h2><div className="grid gap-6 md:grid-cols-3">{related.map((item) => <ProjectCard key={item.slug} project={item} />)}</div></div></section> : null}
      <section className="bg-accl-paper px-5 py-16 md:px-8"><div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-between gap-8 border-t border-accl-line pt-10"><h2 className="max-w-2xl font-display text-3xl md:text-4xl">Start with a clear architectural ambition.</h2><Link href={enquiryHref} className="border-b border-accl-brick py-3 text-accl-brick">Start a consultation</Link></div></section>
    </main>
  );
}
