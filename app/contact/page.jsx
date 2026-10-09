import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { heroImage } from "@/data/site";

export const metadata = {
  title: "Contact | Architect Samuel Alonge"
};

export default function ContactPage() {
  return (
    <main>
      <Hero
        eyebrow="Private Consultation"
        title="Prepare a clear project brief before the first conversation."
        copy="Start with the brief, the site, the need, or the question. The right conversation can shape the entire delivery path."
        image={heroImage}
        align="center"
      />
      <section className="bg-accl-paper px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[0.82fr_1fr]">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
              Send a project inquiry to Crystal Stairs Ltd.
            </h2>
            <div className="mt-10 space-y-5 text-lg leading-8 text-accl-muted">
              {/* Replace with verified email and phone number when available. */}
              <p>Email and phone details to be inserted once confirmed.</p>
              <a className="block text-accl-ink transition hover:text-accl-warm" href="https://www.instagram.com/crystalstairs_ltd/">
                Instagram: @crystalstairs_ltd
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
