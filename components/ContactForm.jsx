"use client";

import { useState } from "react";
import { consultationTypes, contactDetails } from "@/data/site";
import { prepareConsultation } from "@/lib/consultation";

export default function ContactForm() {
  const [draft, setDraft] = useState(null);
  const [message, setMessage] = useState("");
  function submit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    const links = prepareConsultation(fields, contactDetails);
    setDraft(links);
    if (event.nativeEvent.submitter?.value === "whatsapp") {
      window.open(links.whatsapp, "_blank", "noopener,noreferrer");
      setMessage("WhatsApp draft opened. Review and send your enquiry there.");
    } else {
      window.location.href = links.email;
      setMessage("Email draft opened. Review and send it in your email app. You can also use the draft links below.");
    }
  }
  return (
    <form action="/api/contact" method="post" onSubmit={submit} className="grid gap-4 border border-accl-line bg-white p-6" aria-label="Consultation enquiry">
      <label className="field-label">Name<input className="field-input" name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
      <label className="field-label">Email or phone<input className="field-input" name="contact" required maxLength={200} placeholder="How should we reach you?" /></label>
      <label className="field-label">Location<input className="field-input" name="location" autoComplete="address-level2" maxLength={200} placeholder="City, state, or country" /></label>
      <label className="field-label">Project type<select className="field-input" name="projectType" required defaultValue=""><option value="" disabled>Select a project type</option>{consultationTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
      <label className="field-label">Project brief<textarea className="field-input min-h-36 resize-y" name="message" required maxLength={5000} placeholder="Tell us what you are planning." /></label>
      <div className="grid gap-3 sm:grid-cols-2">
        <button className="bg-accl-ink px-5 py-4 text-sm font-semibold text-white transition hover:bg-accl-brick" type="submit" value="email">Prepare Consultation Brief</button>
        <button className="border border-accl-ink px-5 py-4 text-sm font-semibold text-accl-ink transition hover:bg-accl-paper" type="submit" value="whatsapp">Send via WhatsApp</button>
      </div>
      <p className="text-xs leading-6 text-accl-muted">We will open a draft in your email or WhatsApp app. Please review and send it there.</p>
      {draft ? <div className="flex flex-wrap gap-5 text-sm underline underline-offset-4"><a href={draft.email}>Open email draft</a><a href={draft.whatsapp} target="_blank" rel="noopener noreferrer">Open WhatsApp draft</a></div> : null}
      <noscript><p>Contact us at <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> or <a href={`https://wa.me/${contactDetails.whatsapp}`}>WhatsApp</a>.</p></noscript>
      <p role="status" aria-live="polite" aria-atomic="true" className="min-h-6 text-sm leading-6 text-accl-ink">{message}</p>
    </form>
  );
}
