"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, projectCategories } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";

const PAGE_SIZE = 6;

export default function ProjectExplorer() {
  const [sector, setSector] = useState("All");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const filtered = projects.filter((project) => sector === "All" || project.sector === sector);
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-accl-line pb-6">
        <div role="group" aria-label="Filter projects by sector" className="flex flex-wrap gap-2">
          {projectCategories.map((category) => <button key={category} type="button" aria-pressed={sector === category} onClick={() => { setSector(category); setLimit(PAGE_SIZE); }} className={`min-h-11 rounded-full border px-5 py-3 text-sm transition-colors ${sector === category ? "border-accl-ink bg-accl-ink text-white" : "border-accl-line bg-white text-accl-ink hover:border-accl-brick"}`}>{category}</button>)}
        </div>
        <p role="status" aria-live="polite" aria-atomic="true" className="text-sm text-accl-muted">{filtered.length} {filtered.length === 1 ? "project" : "projects"}</p>
      </div>
      {filtered.length > 0 ? <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, limit).map((project, index) => <div key={project.slug} className={index % 5 === 0 ? "md:col-span-2" : ""}><ProjectCard project={project} featured={index % 5 === 0} /></div>)}
      </div> : <div className="py-20">
        <h2 className="font-display text-3xl">{sector}</h2>
        <p className="mt-4 text-accl-muted">No published projects in this sector yet.</p>
        <Link href="/#contact" className="mt-8 inline-block border-b border-accl-brick pb-2 text-sm text-accl-brick">Discuss your project</Link>
      </div>}
      {filtered.length > limit ? <div className="mt-12 text-center"><button type="button" onClick={() => setLimit((value) => value + PAGE_SIZE)} className="border border-accl-ink px-7 py-4 text-sm transition hover:bg-accl-ink hover:text-white">Show more</button></div> : null}
    </>
  );
}
