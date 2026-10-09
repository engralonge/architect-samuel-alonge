import { people } from "@/data/site";

export default function PeopleSection() {
  return (
    <section className="bg-accl-paper px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-12 max-w-3xl">
          <p className="section-label">People</p>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
            A collaborative culture behind every brief, drawing, and site decision.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {people.map((person) => (
            <article key={person.name} className="min-h-80 border border-accl-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-10 h-24 w-24 bg-accl-ink text-white">
                <div className="grid h-full w-full place-items-center text-xl font-semibold">
                  {person.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
                </div>
              </div>
              <h3 className="font-display text-2xl">{person.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-accl-warm">{person.role}</p>
              <p className="mt-6 leading-7 text-accl-muted">{person.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
