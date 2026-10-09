import { contactDetails } from "@/data/site";

export default function ContactDetails() {
  return (
    <div className="grid gap-3 text-sm leading-6">
      {contactDetails.email ? <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> : <p>TODO: verified email</p>}
      {contactDetails.phone ? <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a> : <p>TODO: verified phone</p>}
      {contactDetails.whatsapp ? <a href={`https://wa.me/${contactDetails.whatsapp}`}>WhatsApp</a> : <p>TODO: verified WhatsApp</p>}
      {contactDetails.address ? <address className="not-italic">{contactDetails.address}</address> : <p>TODO: verified office address</p>}
    </div>
  );
}
