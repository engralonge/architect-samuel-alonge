import { consultationTypes } from "@/data/site";

export default function ContactForm() {
  return (
    <form className="grid gap-4 border border-accl-line bg-white p-6 shadow-soft">
      <label className="field-label">
        Name
        <input className="field-input" type="text" name="name" placeholder="Your name" />
      </label>
      <label className="field-label">
        Email or phone
        <input className="field-input" type="text" name="contact" placeholder="How should we reach you?" />
      </label>
      <label className="field-label">
        Location
        <input className="field-input" type="text" name="location" placeholder="City, state, or country" />
      </label>
      <label className="field-label">
        Project type
        <select className="field-input" name="projectType" defaultValue={consultationTypes[0]}>
          {consultationTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="field-label">
        Project brief
        <textarea className="field-input min-h-36 resize-y" name="message" placeholder="Tell us what you are planning." />
      </label>
      <button className="mt-2 bg-accl-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-accl-warm hover:text-accl-ink" type="button">
        Prepare Consultation Brief
      </button>
      <p className="text-xs leading-6 text-accl-muted">
        Replace this placeholder form with an email, CRM, WhatsApp, or form-handler integration before production use.
      </p>
    </form>
  );
}
