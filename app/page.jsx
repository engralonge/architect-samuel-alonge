import ContactForm from "@/components/ContactForm";
import HeroSlideshow from "@/components/HeroSlideshow";
import Image from "next/image";
import ContactDetails from "@/components/ContactDetails";
import {
  gloryDomeImages,
  insights,
  processSteps,
  sectors,
  selectedVisuals,
  services
} from "@/data/site";
import { flagship, profile } from "@/data/site";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSlideshow />

      <section id="profile" className="bg-white px-5 pb-20 pt-8 md:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="section-label">Profile</p>
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                A calm architectural mind for high-stakes buildings.
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-accl-muted">
                {profile.copy}
              </p>
            </div>
            <aside className="border border-accl-line bg-accl-paper p-8">
              {profile.portrait ? <div className="relative mb-6 aspect-[4/5]"><Image src={profile.portrait} alt="Architect Samuel Alonge" fill sizes="(max-width: 1023px) 80vw, 296px" className="object-cover object-top" /></div> : null}
              <p className="font-display text-2xl leading-snug">
                {profile.brandLine}
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

      <section className="bg-white px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="order-2 grid gap-4 lg:order-1">
            {gloryDomeImages[0] ? <Image className="aspect-[16/9] w-full object-cover" src={gloryDomeImages[0].src} alt={gloryDomeImages[0].alt} width={gloryDomeImages[0].width} height={gloryDomeImages[0].height} sizes="(max-width: 1023px) 100vw, 50vw" /> : null}
            <div className="grid gap-4 md:grid-cols-2">
              {gloryDomeImages.slice(1).map((image) => (
                <Image key={image.src} className="aspect-[16/9] w-full object-cover" src={image.src} alt={image.alt} width={800} height={450} sizes="(max-width: 767px) 100vw, 25vw" />
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="section-label">Flagship Proof Point</p>
            <h2 id="work" tabIndex={-1} className="mt-5 font-display text-4xl leading-tight md:text-6xl">{flagship.title}</h2>
            <p className="mt-8 text-lg leading-8 text-accl-muted">
              {flagship.summary}
            </p>
            {/* TODO: approved project credits and Samuel's exact role. */}
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

      {selectedVisuals.length > 0 ? <section className="bg-white px-5 py-20 md:px-8 lg:py-28">
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
                  <Image className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={visual.image} alt={visual.title} width={800} height={1000} sizes="(max-width: 767px) 100vw, 33vw" />
                </div>
                <figcaption className="mt-4 text-sm text-accl-muted">{visual.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section> : null}

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
              Tell us about your project. Call us, send an email, or continue the conversation on WhatsApp.
            </p>
            <div className="mt-8"><ContactDetails /></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
