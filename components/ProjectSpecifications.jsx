export default function ProjectSpecifications({ project }) {
  const specifications = (project.specifications || []).filter((item) => item.label && item.value);
  const credits = [
    ...(project.role ? [{ label: "Samuel Alonge's role", value: project.role }] : []),
    ...(project.credits || [])
  ].filter((item) => item.label && item.value);
  // TODO: owner-approved specifications and credits; omit empty sections entirely.
  if (!specifications.length && !credits.length) return null;
  return (
    <div className="mt-12 border-t border-accl-line">
      {specifications.length ? <details className="border-b border-accl-line py-6"><summary className="cursor-pointer font-display text-3xl">Specifications</summary><dl className="mt-6 grid gap-4">{specifications.map((item) => <div key={item.label}><dt className="text-sm text-accl-muted">{item.label}</dt><dd className="mt-1">{item.value}</dd></div>)}</dl></details> : null}
      {credits.length ? <section className="py-8" aria-labelledby="credits-title"><h2 id="credits-title" className="font-display text-3xl">Credits</h2><dl className="mt-6 grid gap-4">{credits.map((item) => <div key={item.label}><dt className="text-sm text-accl-muted">{item.label}</dt><dd className="mt-1">{item.value}</dd></div>)}</dl></section> : null}
    </div>
  );
}
