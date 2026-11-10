import { business } from "./business";
import type { Highlight } from "./types";

/**
 * "WHY CHOOSE US" POINTS
 *
 * Keep every point factual. Avoid unverifiable claims such as "best salon",
 * years of experience or satisfaction percentages unless the owner can prove them.
 */
const ratingHighlight: Highlight[] = business.rating
  ? [
      {
        icon: "star",
        title: `${business.rating.value.toFixed(1)}★ on Google`,
        description: `Rated ${business.rating.value.toFixed(1)} out of 5 across ${business.rating.count}+ Google reviews from local customers.`,
      },
    ]
  : [];

export const highlights: Highlight[] = [
  ...ratingHighlight,
  {
    icon: "family",
    // REPORTED — unisex salon (business name); listed as LGBTQ+ friendly on Google Maps.
    title: "Welcoming to everyone",
    description: "A unisex salon where every guest is welcome, listed as LGBTQ+ friendly on Google.",
  },
  {
    icon: "sparkle",
    // REPORTED — services mentioned in public reviews and listings; confirm the full menu.
    title: "Hair, skin, nails and bridal",
    description: "From a quick grooming visit to your wedding-day makeup, all under one roof.",
  },
  {
    icon: "pin",
    title: `Easy to find in ${business.address.area}`,
    description: `${business.address.line1}, ${business.address.landmark ?? business.address.city}.`,
  },
];
