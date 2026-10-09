export function prepareConsultation(fields, contactDetails) {
  const subject = `Consultation enquiry: ${fields.projectType}`;
  const body = [
    "Consultation enquiry for Architect Samuel Alonge / Crystal Stairs Ltd",
    "", `Name: ${fields.name}`, `Email or phone: ${fields.contact}`,
    `Location: ${fields.location || "Not specified"}`, `Project type: ${fields.projectType}`,
    "", "Project brief:", fields.message
  ].join("\n");
  return {
    email: `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    whatsapp: `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`
  };
}
