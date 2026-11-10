# Business Research — KRASA UNISEX SALON

_Last updated: 15 September 2026_

This document records what is known about the business, where it came from,
and how confident we are. **Nothing on the website should be more certain than
this document.**

## Status definitions

| Status | Meaning |
| --- | --- |
| **Verified** | Confirmed directly with the owner (or an authoritative source checked first-hand). |
| **Reported** | Seen on a public listing or supplied second-hand, not yet confirmed with the owner. |
| **Demo** | Prototype placeholder. Must be replaced before launch. |
| **Unknown** | Not available. Hidden on the website. |

> None of the facts below have been verified with the owner yet.

## Known facts (checked 15 Sep 2026)

| Fact | Value | Status | Source | Where it lives |
| --- | --- | --- | --- | --- |
| Business name | Krasa Unisex Salon \| Satna | Reported | Google Maps listing | `src/data/business.ts → name` |
| Address | 1st Floor, IDBI Bank ke Upar, Arjun Tower, Infront of Christ Jyoti School, Rewa Rd, Shakti Vihar, Jeevan Jyoti Colony, Satna, MP 485001 | Reported | Google Maps; Justdial shows the same address | `business.address` |
| Google rating | 4.9 / 5 from 221 reviews | Reported | Google Maps | `business.rating` |
| Justdial rating | 5.0 from 221 ratings | Reported | Justdial (not used on the site) | — |
| Phone | 074897 75452 | Reported | Google Maps and Justdial | `business.contact.phone` |
| WhatsApp | +91 74897 75452 | **Assumed** | Justdial shows a WhatsApp button; assumed same number. **Confirm.** | `business.contact.whatsapp` |
| Category | Beauty Parlour; listed as LGBTQ+ friendly | Reported | Google Maps | Highlights copy |
| Years in business | 4 years | Reported | Justdial (not used on the site) | — |
| Opening time | "Opens 10 am" (daily hours not shown) | Partial | Google Maps; Justdial says 10:30 am | Hidden |
| Instagram | instagram.com/krasa_unisex__salon | Reported | Web search | `links.instagram` |
| Facebook | facebook.com/krasabeautysalon ("Krasa Unisex Salon \| Satna") | Reported | Web search | `links.facebook` |
| Related business | Krasa Academy (training centre), same building and phone, 5.0 from 128 reviews | Reported | Google Maps | Not used on the site |
| Website on Google listing | 13designstreet.com | Unclear | Google Maps. May be a designer's site, not the salon's own. Check before pitching. | — |

### Services seen in public sources
| Service | Evidence |
| --- | --- |
| Bridal makeup | Google review topic "bridal makeup" (12); 8 bridal photos on Justdial |
| Waxing | Google review topic "waxing" (8) |
| Hair smoothing | Google review topic "hair smoothing" (3) |
| Haircut, beard grooming | Google reviews |
| Facial / skin care | Justdial "Facial"; Google review mentions facial cleaning and skin care |
| Hair spa | Justdial listing |
| Nail art / extensions | Justdial photos |

Services not seen anywhere but added to the prototype as `demo`: manicure & pedicure,
party & engagement makeup, bridal hair styling.

### Salon interior (used for the colour palette)
From the Justdial ambience photos: cream walls, beige marble floor, black leather
styling chairs, walnut wood slat partitions, brass crystal chandeliers, green plants.
Staff wear black T-shirts with a white "Krasa" logo.

Palette in `src/app/globals.css`: ink `#141210`, cream `#f6f1e9`, marble `#e8dccb`,
walnut `#6a4327`, deep walnut `#4a2e1b`, brass `#c79b55`.

## Deliberately not claimed
- "Best salon in Satna" (appears in a customer review, but is not used as a claim)
- Review quotes (no permission to display)
- Years in business, awards, certifications, prices, staff names

## Stock photography credits

All photos in `public/images/` are temporary stock images (Unsplash License / Pexels License).
They show other people and places, **not Krasa**.

| File | Photographer | Source |
| --- | --- | --- |
| hero.jpg | Rajat Sahu Photography | Pexels |
| salon-interior.jpg, og-image.jpg | Benyamin Bohlouli | Unsplash |
| service-hair.jpg | Nataliya Vaitkevich | Pexels |
| service-skin.jpg | cottonbro studio | Pexels |
| service-nails.jpg | Svliiim | Pexels |
| service-bridal.jpg | ImadClicks | Pexels |
| featured-bridal.jpg | SKG Photography | Pexels |
| featured-nails.jpg | Pexels contributor | Pexels |
| featured-grooming.jpg | Salah Regouane | Unsplash |
| gallery-01.jpg | Manish | Pexels |
| gallery-02.jpg | Tile Merchant Ireland | Unsplash |
| gallery-03.jpg | Kerim Eveyik | Pexels |
| gallery-04.jpg | Giorgio Trovato | Unsplash |
| gallery-05.jpg | Bharat Kuiper | Pexels |
| gallery-06.jpg | Kawe Rodrigues | Pexels |
| gallery-07.jpg | Gustavo Fring | Pexels |
| gallery-08.jpg | Ravi Roshan | Pexels |
| gallery-09.jpg | Leeloothefirst | Pexels |
