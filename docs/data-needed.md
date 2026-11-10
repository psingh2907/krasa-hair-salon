# Data Required Before Production — KRASA UNISEX SALON

Collect these from the salon owner. Each item lists the file to update.
When everything in **Critical** is done, set `NEXT_PUBLIC_PROTOTYPE_MODE=false`
and run `pnpm build`. The build lists anything still missing.

## Critical (the production build fails without these)

- [ ] **Confirm WhatsApp number**: currently assumed to be 074897 75452 → `src/data/business.ts → contact.whatsapp`
- [ ] **Confirm phone number** 074897 75452 → `contact.phone`
- [ ] **Google Maps link** (Google Maps → Krasa listing → Share → Copy link) → `links.googleMaps`
- [ ] **Confirm the address** and PIN code → `address`, then set `status: "verified"`
- [ ] **Verified service list**: confirm hair, skin, nails and bridal services, and remove anything not offered → `src/data/services.ts`
- [ ] **Salon photographs** replacing every stock image → `public/images/`
- [ ] **Live domain** → `NEXT_PUBLIC_SITE_URL`

## Important

- [ ] **Existing website?** The Google listing links to 13designstreet.com. Ask whether the salon already has a website.
- [ ] **Opening hours** for each day, including closed days → `business.hours`
- [ ] **Current Google rating and review count** → `business.rating`
- [ ] **Confirm Instagram and Facebook links** → `links.instagram`, `links.facebook`
- [ ] **Logo file** (the black-and-white "Krasa" logo seen on staff T-shirts) → `src/components/Brand.tsx`
- [ ] **Appointment process**: who replies on WhatsApp, and is advance booking needed for bridal?
- [ ] **Krasa Academy**: should the academy/classes appear on the salon website?
- [ ] **Tagline and description** approved by the owner → `business.tagline`, `business.description`

## Nice to have

- [ ] Real customer reviews the salon has permission to display → `src/data/reviews.ts`
- [ ] Photos of their bridal and nail-art work (with client consent)
- [ ] Email address → `contact.email`

## Permissions

- [ ] Owner's approval to publish the website
- [ ] Consent from any customer shown in photos
- [ ] Permission to display any reviews added as cards
