import { profile, services } from "@/data/site";

export default function AboutSection() {
  return (
    <section className="bg-white px-5 py-20 md:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="section-label">Profile</p>
        </div>
        <div>
          <h2 className="max-w-5xl font-display text-4xl leading-tight md:text-6xl">
            A calm architectural mind for high-stakes buildings.
          </h2>
          <div className="mt-10 grid gap-8 text-lg leading-8 text-accl-muted md:grid-cols-2">
            <p>
              {profile.copy}
            </p>
            <p>
              {profile.brandLine}
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-accl-line md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-accl-paper p-6 text-sm uppercase tracking-[0.18em]">
                {service.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
