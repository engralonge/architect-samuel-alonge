import { contactDetails } from "@/data/site";

export default function ContactDetails() {
  return (
    <div className="grid gap-3 text-sm leading-6">
      {contactDetails.email ? <a className="break-all underline-offset-4 hover:underline" href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> : null}
      {contactDetails.phone ? <a className="underline-offset-4 hover:underline" href={`tel:${contactDetails.phone}`}>{contactDetails.phoneDisplay || contactDetails.phone}</a> : null}
      {contactDetails.whatsapp ? <a className="underline-offset-4 hover:underline" href={`https://wa.me/${contactDetails.whatsapp}`}>WhatsApp</a> : null}
      {contactDetails.address ? <address className="not-italic">{contactDetails.address}</address> : null}
    </div>
  );
}
