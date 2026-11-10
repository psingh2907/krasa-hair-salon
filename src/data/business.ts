import type { Business } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  BUSINESS INFORMATION — the single place to edit salon details.
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  Values written as "{{TOKEN}}" are unknown. The website hides anything
 *  that is not configured, so nothing breaks while they are missing.
 *
 *  Sources (checked 15 Sep 2026): Google Maps listing "Krasa Unisex Salon | Satna"
 *  and the Justdial listing. See docs/business-research.md.
 */
export const business: Business = {
  // REPORTED — Google Maps listing name is "Krasa Unisex Salon | Satna".
  name: "KRASA UNISEX SALON",

  // DEMO — shortened brand name for tight spaces.
  shortName: "Krasa",

  // DEMO — suggested marketing copy, not an existing slogan.
  tagline: "Every Look. Perfectly Crafted.",

  // DEMO — suggested description, based on services mentioned in public reviews.
  description: "A modern unisex salon for hair, skin, nails and bridal makeup in Shakti Vihar, Satna.",

  // REPORTED — bridal makeup, waxing, hair smoothing, haircuts, beard grooming and
  // facials appear in Google reviews; Justdial lists Hair Spa and Facial and shows
  // bridal and nail-art photos. Confirm the full menu with the owner.
  serviceHighlights: {
    items: ["Hair", "Skin", "Nails", "Bridal"],
    status: "reported",
  },

  address: {
    line1: "1st Floor, Arjun Tower, above IDBI Bank", // REPORTED — Google Maps / Justdial
    landmark: "In front of Christ Jyoti School, Rewa Road", // REPORTED
    area: "Shakti Vihar", // REPORTED
    city: "Satna",
    state: "Madhya Pradesh",
    postalCode: "485001", // REPORTED — Google Maps
    country: "India",
    status: "reported",
  },

  // REPORTED — Google Maps showed 4.9 from 221 reviews on 15 Sep 2026.
  // (Justdial separately shows 5.0 from 221 ratings; the site uses Google's figure.)
  rating: {
    value: 4.9,
    count: 221,
    source: "Google",
    asOf: "2026-09",
    status: "reported",
  },

  contact: {
    phone: "074897 75452", // REPORTED — Google Maps and Justdial
    // UNCONFIRMED — assumed to be the same number: Justdial shows a WhatsApp button
    // for this listing. Confirm with the owner before launch.
    whatsapp: "+91 74897 75452",
    email: "{{EMAIL}}",
  },

  links: {
    googleMaps: "{{GOOGLE_MAPS_URL}}", // Google Maps → Share → Copy link
    googleReviews: "{{GOOGLE_REVIEWS_URL}}", // optional; falls back to the Maps link
    instagram: "https://www.instagram.com/krasa_unisex__salon/", // REPORTED — found via web search
    facebook: "https://www.facebook.com/krasabeautysalon/", // REPORTED — page titled "Krasa Unisex Salon | Satna"
  },

  // UNKNOWN — Google only showed "Opens 10 am". Do not guess daily hours.
  hours: [],
};
