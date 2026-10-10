import { contactDetails } from "@/data/site";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="grid gap-3 text-sm leading-6">
      {contactDetails.email ? <a className="flex min-h-11 items-center gap-3 underline-offset-4 hover:underline" href={`mailto:${contactDetails.email}`}><Mail size={18} className="shrink-0" aria-hidden="true" /><span className="break-all">{contactDetails.email}</span></a> : null}
      {contactDetails.phone ? <a className="flex min-h-11 items-center gap-3 underline-offset-4 hover:underline" href={`tel:${contactDetails.phone}`}><Phone size={18} className="shrink-0" aria-hidden="true" />{contactDetails.phoneDisplay || contactDetails.phone}</a> : null}
      {contactDetails.whatsapp ? <a className="flex min-h-11 items-center gap-3 underline-offset-4 hover:underline" href={`https://wa.me/${contactDetails.whatsapp}`}><MessageCircle size={18} className="shrink-0" aria-hidden="true" />WhatsApp</a> : null}
      {contactDetails.address ? <address className="not-italic">{contactDetails.address}</address> : null}
    </div>
  );
}
