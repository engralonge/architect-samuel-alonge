"use client";

import { useState } from "react";
import { consultationTypes } from "@/data/site";

export default function ContactForm() {
  const [state, setState] = useState("idle");
  const [message, setMessage] = useState("");
  async function submit(event) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    setState("sending");
    setMessage("Sending your enquiry...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your enquiry. Please try again.");
      setState("success");
      setMessage("Your enquiry has been sent. Thank you for getting in touch.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error.message || "Connection unavailable. Please try again.");
    }
  }
  return (
    <form action="/api/contact" method="post" onSubmit={submit} className="grid gap-4 border border-accl-line bg-white p-6" aria-label="Consultation enquiry">
      <label className="field-label">Name<input className="field-input" name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
      <label className="field-label">Email or phone<input className="field-input" name="contact" required maxLength={200} placeholder="How should we reach you?" /></label>
      <label className="field-label">Location<input className="field-input" name="location" autoComplete="address-level2" maxLength={200} placeholder="City, state, or country" /></label>
      <label className="field-label">Project type<select className="field-input" name="projectType" required defaultValue=""><option value="" disabled>Select a project type</option>{consultationTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
      <label className="field-label">Project brief<textarea className="field-input min-h-36 resize-y" name="message" required maxLength={5000} placeholder="Tell us what you are planning." /></label>
      <button disabled={state === "sending"} className="mt-2 bg-accl-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-accl-warm hover:text-accl-ink disabled:opacity-60" type="submit">{state === "sending" ? "Sending..." : "Prepare Consultation Brief"}</button>
      <p className="text-xs leading-6 text-accl-muted">TODO: inbox integration. Online delivery is not available yet; please contact us on Instagram.</p>
      <p role="status" aria-live="polite" aria-atomic="true" className="min-h-6 text-sm leading-6 text-accl-ink">{message}</p>
    </form>
  );
}
