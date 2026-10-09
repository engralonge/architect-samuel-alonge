import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import {
  gloryDomeImages,
  heroImage,
  insights,
  processSteps,
  sectors,
  selectedVisuals,
  services
} from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <Hero
        eyebrow="Architecture consulting for buildings that must carry meaning"
        title="Landmark architectural vision, led by Architect Samuel Alonge."
        copy="Crystal Stairs Ltd shapes timeless, functional spaces through disciplined design, meticulous construction thinking, and a clear path from concept to built reality."
        image={heroImage}
        primaryCta={{ label: "Start a Consultation", href: "#contact" }}
        secondaryCta={{ label: "Study the Work", href: "#work" }}
      />

      <section id="profile" className="bg-white px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="section-label">Profile</p>
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                A calm architectural mind for high-stakes buildings.
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-accl-muted">
                Samuel Alonge's public brand is built around award-level design, meticulous craftsmanship,
                and buildings that balance presence with practical function. The consulting offer is simple:
                help clients make better decisions before drawings, budgets, contractors, and site pressure
                lock the project in place.
              </p>
            </div>
            <aside className="border border-accl-line bg-accl-paper p-8">
              <div className="mb-10 grid h-20 w-20 place-items-center rounded-full bg-accl-ink text-sm font-semibold uppercase tracking-[0.22em] text-white">
                SA
              </div>
              <p className="font-display text-2xl leading-snug">
                “Award-level Architectural Designs. Meticulous Craftsmanship in Construction. Timeless Spaces,
                Functional Beauty.”
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section id="insights" className="bg-accl-paper px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">Insights & Advisory</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              Design decisions should be backed by evidence, not just taste.
            </h2>
            <p className="mt-8 text-lg leading-8 text-accl-muted">
              This advisory layer helps clients test the brief, understand long-term value, and make smarter
              decisions about land, form, movement, maintenance, and experience.
            </p>
          </div>
          <div className="grid gap-px bg-accl-line md:grid-cols-3">
            {insights.map((item) => (
              <article key={item.title} className="min-h-80 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accl-warm">{item.number}</span>
                <h3 className="mt-16 font-display text-3xl leading-tight">{item.title}</h3>
                <p className="mt-6 leading-7 text-accl-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-white px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-4">
            <img className="aspect-[16/9] w-full object-cover" src={gloryDomeImages[0].src} alt={gloryDomeImages[0].alt} />
            <div className="grid gap-4 md:grid-cols-2">
              {gloryDomeImages.slice(1).map((image) => (
                <img key={image.src} className="aspect-[16/9] w-full object-cover" src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
          <div>
            <p className="section-label">Flagship Proof Point</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">Dunamis Glory Dome</h2>
            <p className="mt-8 text-lg leading-8 text-accl-muted">
              A 100,000+ seat, pillar-free sanctuary in Abuja and a landmark expression of worship architecture.
              Its scale demands architectural clarity around movement, visibility, structure, dignity,
              maintenance, and long-term value.
            </p>
            <div className="mt-10 grid gap-4">
              {[
                ["Landmark Scale", "A high-capacity worship environment with strong civic and spiritual presence."],
                ["Movement & Visibility", "Arrival, circulation, congregation flow, and sightlines shape the experience."],
                ["Long-Term Value", "Early design decisions protect dignity, maintenance, and construction intent."]
              ].map(([title, copy]) => (
                <article key={title} className="border border-accl-line bg-accl-paper p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accl-warm">{title}</h3>
                  <p className="mt-3 leading-7 text-accl-muted">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accl-ink px-5 py-20 text-white md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="max-w-3xl">
            <p className="section-label text-accl-warm">Project Sectors</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              Focused where architecture must perform and inspire.
            </h2>
          </div>
          <div className="mt-12 grid border border-white/15 md:grid-cols-4">
            {sectors.map((sector) => (
              <article key={sector.title} className="border-b border-white/15 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accl-warm">{sector.title}</h3>
                <p className="mt-5 leading-7 text-white/68">{sector.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-accl-paper px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.32fr_1fr]">
          <p className="section-label">Services</p>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="min-h-[420px] border border-accl-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accl-warm">{service.number}</span>
                <h3 className="mt-16 font-display text-3xl leading-tight">{service.title}</h3>
                <p className="mt-6 leading-7 text-accl-muted">{service.copy}</p>
                <ul className="mt-8 grid gap-3 border-t border-accl-line pt-6 text-sm text-accl-muted">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 max-w-4xl">
            <p className="section-label">Selected Visual Language</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              Monumental scale, warm detail, disciplined form.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {selectedVisuals.map((visual) => (
              <figure key={visual.title} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-accl-paper">
                  <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={visual.image} alt={visual.title} />
                </div>
                <figcaption className="mt-4 text-sm text-accl-muted">{visual.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accl-paper px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.32fr_1fr]">
          <p className="section-label">Process</p>
          <ol className="grid gap-0 border-t border-accl-line">
            {processSteps.map((step, index) => (
              <li key={step.title} className="grid gap-5 border-b border-accl-line py-8 md:grid-cols-[90px_0.45fr_1fr]">
                <span className="font-display text-4xl text-accl-warm">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="leading-8 text-accl-muted">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.86fr_1fr]">
          <div>
            <p className="section-label">Private Consultation</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              Prepare a clear project brief before the first conversation.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-accl-muted">
              Use the form to structure your inquiry. It can be connected to email, phone, WhatsApp,
              or Instagram once the preferred contact channel is confirmed.
            </p>
            {/* Replace with confirmed Instagram link when needed. */}
            <a className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-accl-warm transition hover:text-accl-ink" href="https://www.instagram.com/crystalstairs_ltd/">
              Continue on Instagram
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
