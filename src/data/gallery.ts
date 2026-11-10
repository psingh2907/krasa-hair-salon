import type { GalleryItem, ImageAsset } from "./types";

/**
 * GALLERY
 *
 * ⚠ DEMO IMAGERY. These are licensed stock photos used to show the layout.
 * They are NOT Krasa's work and must be replaced with the salon's own
 * photographs (with client permission) before launch.
 *
 * To replace: drop new photos into public/images/ (same file names, or
 * update `src`), rewrite `alt` to describe the new photo, remove `credit`
 * and set `status: "verified"`.
 */
function stock(
  src: string,
  alt: string,
  credit: NonNullable<ImageAsset["credit"]>,
  position?: string,
): ImageAsset {
  return { src, alt, credit, position, status: "demo" };
}

export const gallery: GalleryItem[] = [
  {
    id: "g01",
    category: "Bridal",
    image: stock(
      "/images/gallery-01.jpg",
      "Close-up of bridal eye makeup with a gold maang tikka",
      { author: "Manish", source: "Pexels", url: "https://www.pexels.com/photo/2498430/" },
      "50% 40%",
    ),
  },
  {
    id: "g02",
    category: "Salon",
    image: stock(
      "/images/gallery-02.jpg",
      "Salon styling stations with arched mirrors and marble floor",
      { author: "Tile Merchant Ireland", source: "Unsplash", url: "https://images.unsplash.com/photo-1706629505300-168aa1604912" },
    ),
  },
  {
    id: "g03",
    category: "Nails",
    image: stock(
      "/images/gallery-03.jpg",
      "Manicure in progress under a salon lamp",
      { author: "Kerim Eveyik", source: "Pexels", url: "https://www.pexels.com/photo/22668317/" },
    ),
  },
  {
    id: "g04",
    category: "Hair",
    image: stock(
      "/images/gallery-04.jpg",
      "Stylist curling a client's hair into soft waves",
      { author: "Giorgio Trovato", source: "Unsplash", url: "https://images.unsplash.com/photo-1629397685944-7073f5589754" },
      "60% 50%",
    ),
  },
  {
    id: "g05",
    category: "Bridal",
    image: stock(
      "/images/gallery-05.jpg",
      "Bride wearing heavy gold jewellery and a red outfit",
      { author: "Bharat Kuiper", source: "Pexels", url: "https://www.pexels.com/photo/36519701/" },
      "50% 30%",
    ),
  },
  {
    id: "g06",
    category: "Hair",
    image: stock(
      "/images/gallery-06.jpg",
      "Barber giving a haircut in a warmly lit grooming studio",
      { author: "Kawe Rodrigues", source: "Pexels", url: "https://www.pexels.com/photo/19664876/" },
    ),
  },
  {
    id: "g07",
    category: "Beauty",
    image: stock(
      "/images/gallery-07.jpg",
      "Aesthetician giving a client a facial treatment",
      { author: "Gustavo Fring", source: "Pexels", url: "https://www.pexels.com/photo/7446659/" },
    ),
  },
  {
    id: "g08",
    category: "Bridal",
    image: stock(
      "/images/gallery-08.jpg",
      "Bride with colourful eye makeup and traditional gold jewellery",
      { author: "Ravi Roshan", source: "Pexels", url: "https://www.pexels.com/photo/14062394/" },
      "50% 30%",
    ),
  },
  {
    id: "g09",
    category: "Nails",
    image: stock(
      "/images/gallery-09.jpg",
      "Nail artist painting fine details on a client's nails",
      { author: "Leeloothefirst", source: "Pexels", url: "https://www.pexels.com/photo/4677846/" },
    ),
  },
];
