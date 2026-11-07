// Company details collected from the original janasenaproperties.com and public business listings.
export const SITE = {
  name: "Janasena Properties",
  legalName: "Janasena Properties Private Limited",
  tagline: "A Name You Can Trust",
  since: 2015,
  url: "https://www.janasenaproperties.com",
  cin: "U45309KA2018PTC112981",
  phoneDisplay: "+91 99808 20954",
  phoneE164: "+919980820954",
  whatsappNumber: "919980820954",
  salesPhoneDisplay: "+91 96063 66179",
  salesPhoneE164: "+919606366179",
  address: {
    line1: "1st Floor, No. 290, 15th A Cross Road",
    line2: "Yelahanka Satellite Town, Yelahanka New Town",
    city: "Bengaluru",
    state: "Karnataka",
    pin: "560064",
  },
  hours: "Mon – Sun · 9:30 AM – 7:00 PM",
  mapQuery: "Janasena Properties Private Limited, 15th A Cross Rd, Yelahanka Satellite Town, Bengaluru 560064",
  social: {
    facebook: "https://www.facebook.com/janasenaproperties",
  },
} as const;

export const fullAddress = `${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.pin}`;

export function mapEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
}

export function mapLinkUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Builds a wa.me deep link that opens WhatsApp with a prefilled message. */
export function whatsappLink(message?: string, number: string = SITE.whatsappNumber) {
  const digits = number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Enquiry = {
  name: string;
  phone: string;
  project?: string;
  visitDate?: string;
  visitTime?: string;
  message?: string;
  kind: "enquiry" | "site-visit";
};

/** Formats an enquiry or site-visit request into a WhatsApp message for the sales team. */
export function formatEnquiry(e: Enquiry) {
  const lines = [
    e.kind === "site-visit" ? "Site visit request – Janasena Properties" : "New enquiry – Janasena Properties",
    `Name: ${e.name.trim()}`,
    `Phone: ${e.phone.trim()}`,
  ];
  if (e.project) lines.push(`Project: ${e.project}`);
  if (e.visitDate) lines.push(`Preferred date: ${e.visitDate}`);
  if (e.visitTime) lines.push(`Preferred time: ${e.visitTime}`);
  if (e.message?.trim()) lines.push(`Message: ${e.message.trim()}`);
  return lines.join("\n");
}

/** Indian mobile: optional +91 / 0 prefix, then 10 digits starting 6–9. */
export function isValidIndianPhone(input: string) {
  const digits = input.replace(/[\s-]/g, "");
  return /^(?:\+?91|0)?[6-9]\d{9}$/.test(digits);
}
