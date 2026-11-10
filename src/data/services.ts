import type { FeaturedService, ServiceCategory } from "./types";

/**
 * SERVICES
 *
 * `reported` = mentioned in Krasa's public Google reviews or Justdial listing
 * (checked 15 Sep 2026). `demo` = a likely service added for the prototype.
 * Confirm the full menu with the owner, then set each `status` to "verified".
 *
 * Prices are intentionally not shown.
 * Images: public/images/ are temporary stock photos (see `credit`).
 */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    name: "Hair",
    summary: "Cuts, smoothing and grooming",
    image: {
      src: "/images/service-hair.jpg",
      alt: "Stylist applying hair colour in foils",
      position: "50% 35%",
      credit: { author: "Nataliya Vaitkevich", source: "Pexels", url: "https://www.pexels.com/photo/8468125/" },
      status: "demo",
    },
    services: [
      {
        id: "haircut",
        name: "Haircut & Styling",
        description: "Cuts and finishes for men and women, shaped around your face and routine.",
        status: "reported", // Google review: haircut
      },
      {
        id: "beard-grooming",
        name: "Beard & Grooming",
        description: "Sharp beard shaping and neat everyday grooming for men.",
        status: "reported", // Google review: beard service, grooming
      },
      {
        id: "hair-smoothing",
        name: "Hair Smoothing",
        description: "For frizz-free, softer hair that is easier to manage every day.",
        status: "reported", // Google review topic: hair smoothing
      },
      {
        id: "hair-spa",
        name: "Hair Spa",
        description: "A relaxing treatment that leaves hair feeling nourished and refreshed.",
        status: "reported", // Justdial listing: Hair Spa
      },
    ],
  },
  {
    id: "skin",
    name: "Skin",
    summary: "Facials, clean-ups and waxing",
    image: {
      src: "/images/service-skin.jpg",
      alt: "Client smiling during a gentle facial treatment",
      position: "40% 50%",
      credit: { author: "cottonbro studio", source: "Pexels", url: "https://www.pexels.com/photo/7581075/" },
      status: "demo",
    },
    services: [
      {
        id: "facial",
        name: "Facial & Clean-up",
        description: "Deep cleansing and a fresh glow, suited to your skin type.",
        status: "reported", // Justdial: Facial; Google review: facial cleaning
      },
      {
        id: "waxing",
        name: "Waxing",
        description: "Clean, careful waxing for face, arms, legs and more.",
        status: "reported", // Google review topic: waxing
      },
      {
        id: "skin-care",
        name: "Skin Care",
        description: "Treatments that help your skin look healthy, even and cared for.",
        status: "reported", // Google review: skin care treatment
      },
    ],
  },
  {
    id: "nails",
    name: "Nails",
    summary: "Nail art and extensions",
    image: {
      src: "/images/service-nails.jpg",
      alt: "Hand with a glossy French manicure against a dark background",
      position: "50% 45%",
      credit: { author: "Svliiim", source: "Pexels", url: "https://www.pexels.com/photo/34997566/" },
      status: "demo",
    },
    services: [
      {
        id: "nail-art",
        name: "Nail Art",
        description: "From subtle shine to festive designs, finished in detail.",
        status: "reported", // Justdial photos: nail art
      },
      {
        id: "nail-extensions",
        name: "Nail Extensions",
        description: "Longer, shapely nails that suit your style and your occasion.",
        status: "reported", // Justdial photos: extended nails
      },
      {
        id: "manicure-pedicure",
        name: "Manicure & Pedicure",
        description: "Neatly shaped, cleaned and polished hands and feet.",
        status: "demo",
      },
    ],
  },
  {
    id: "bridal",
    name: "Bridal",
    summary: "Makeup for the wedding and every celebration",
    image: {
      src: "/images/service-bridal.jpg",
      alt: "Bride with a maang tikka and green-gold eye makeup",
      position: "50% 30%",
      credit: { author: "ImadClicks", source: "Pexels", url: "https://www.pexels.com/photo/11742214/" },
      status: "demo",
    },
    services: [
      {
        id: "bridal-makeup",
        name: "Bridal Makeup",
        description: "Wedding-day makeup planned around your outfit, jewellery and rituals.",
        status: "reported", // Google review topic: bridal makeup; Justdial bridal photos
      },
      {
        id: "party-makeup",
        name: "Party & Engagement Makeup",
        description: "Polished looks for engagements, receptions, sangeet and festivals.",
        status: "demo",
      },
      {
        id: "bridal-hair",
        name: "Bridal Hair Styling",
        description: "Styles made to hold dupattas, flowers and jewellery all day.",
        status: "demo",
      },
    ],
  },
];

/**
 * FEATURED SERVICES — promoted in the editorial section.
 * `serviceId` must match an id above.
 */
export const featuredServices: FeaturedService[] = [
  {
    id: "featured-bridal",
    eyebrow: "Bridal",
    title: "Your wedding-day glow",
    description: "Makeup planned with you, around your outfit, jewellery and every ritual.",
    serviceId: "bridal-makeup",
    image: {
      src: "/images/featured-bridal.jpg",
      alt: "Smiling bride in a red lehenga with green and gold jewellery",
      position: "50% 25%",
      credit: { author: "SKG Photography", source: "Pexels", url: "https://www.pexels.com/photo/29368877/" },
      status: "demo",
    },
  },
  {
    id: "featured-nails",
    eyebrow: "Nail art",
    title: "Nails that finish the look",
    description: "Festive sparkle or clean everyday shine, done with attention to detail.",
    serviceId: "nail-art",
    image: {
      src: "/images/featured-nails.jpg",
      alt: "Gold glitter nails holding a sparkling star decoration",
      position: "50% 40%",
      credit: { author: "Pexels contributor", source: "Pexels", url: "https://www.pexels.com/photo/10632142/" },
      status: "demo",
    },
  },
  {
    id: "featured-grooming",
    eyebrow: "For him",
    title: "Grooming, done right",
    description: "Clean cuts and sharp beard styling for every day and every event.",
    serviceId: "beard-grooming",
    image: {
      src: "/images/featured-grooming.jpg",
      alt: "Barber styling a man's hair with a comb and scissors",
      position: "50% 35%",
      credit: { author: "Salah Regouane", source: "Unsplash", url: "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6" },
      status: "demo",
    },
  },
];
