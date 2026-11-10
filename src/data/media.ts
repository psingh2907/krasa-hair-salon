import type { SalonData } from "./types";

/**
 * SITE IMAGERY (hero + salon interior)
 *
 * ⚠ DEMO IMAGERY — licensed stock photos, not Krasa. Replace with the
 * salon's own photographs in public/images/ before launch.
 *
 * Tips for the hero photo: at least 1600px on the long side, portrait or
 * square, subject slightly off-centre. Adjust `position` to control the crop.
 */
export const hero: SalonData["hero"] = {
  image: {
    src: "/images/hero.jpg",
    alt: "Makeup artist adjusting a bride's jewellery before a ceremony",
    position: "55% 30%",
    credit: { author: "Rajat Sahu Photography", source: "Pexels", url: "https://www.pexels.com/photo/30193762/" },
    status: "demo",
  },
  interior: {
    src: "/images/salon-interior.jpg",
    alt: "Salon interior with ornate mirrors, warm lights and styling chairs",
    position: "50% 50%",
    credit: { author: "Benyamin Bohlouli", source: "Unsplash", url: "https://images.unsplash.com/photo-1633681122703-3ce20f1e978d" },
    status: "demo",
  },
};
