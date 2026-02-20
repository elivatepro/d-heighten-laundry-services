# D'heighten Laundry

Professional laundry and cleaning service based in Ilorin, Kwara State, Nigeria. This is the official website for D'heighten Laundry — built to showcase services, pricing, and make it easy for customers to get instant quotes and place orders via WhatsApp.

**Live site:** [dhlaundryservices.com](https://dhlaundryservices.com)

## Features

- **Instant Price Calculator** — customers select items, toggle express delivery, and see their total in real time
- **Monthly Plan Pricing** — complete laundry and wash & fold plans with tiered options
- **Pay-Per-Item Pricing** — full breakdown of individual item costs
- **WhatsApp Integration** — one-tap order placement and callback requests via WhatsApp
- **Dark & Light Theme** — automatic theme switching with brand-consistent styling
- **Responsive Design** — optimized for mobile, tablet, and desktop
- **Gallery** — before/after showcase of laundry work
- **Testimonials** — customer reviews with mobile-friendly snap carousel
- **Contact Form** — direct inquiry form with validation

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS custom properties for theming
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, services, calculator, testimonials, FAQ |
| `/services` | Detailed service offerings |
| `/pricing` | Monthly plans + pay-per-item pricing tables |
| `/calculator` | Standalone price calculator |
| `/about` | Company story and mission |
| `/contact` | Contact form and details |
| `/gallery` | Work showcase |
| `/blog` | Blog/updates |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Project Structure

```
app/
  (public)/          # Public-facing pages (services, pricing, about, etc.)
  page.tsx           # Homepage
components/
  layout/            # Header, footer, navigation
  sections/          # Page sections (hero, testimonials, pricing calculator, etc.)
  shared/            # Reusable components (page header, section header, etc.)
lib/
  constants/         # Site config, navigation links
  utils/             # Pricing logic, WhatsApp URL generation, helpers
hooks/               # Custom React hooks
public/images/       # Static assets
```

## Built With Precision

Designed and developed by [Boko Isaac](https://bokoisaac.pro)
