export default function ProjectFacts({ project }) {
  const facts = [
    ["Type", project.keyFacts?.type || project.sector],
    ["Location", project.location],
    ["Capacity", project.keyFacts?.capacity],
    ["Floor area", project.keyFacts?.floorArea],
    ["Status", project.status]
  ].filter(([, value]) => value);
  if (!facts.length) return null;
  return (
    <aside className="relative border border-accl-line bg-white p-6 md:p-8" aria-labelledby="key-facts-title">
      <h2 id="key-facts-title" className="section-label">Key Facts</h2>
      <dl className="mt-6 grid gap-5">{facts.map(([label, value]) => <div key={label} className="border-t border-accl-line pt-4"><dt className="text-xs uppercase text-accl-muted">{label}</dt><dd className="mt-2 text-lg">{value}</dd></div>)}</dl>
    </aside>
  );
}
