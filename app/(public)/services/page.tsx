import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";
import { generateWhatsAppURL } from "@/lib/utils/whatsapp";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Our Laundry Services",
  description:
    "Explore D'heighten Laundry's full range of professional services — wash & fold, full laundry, pressing, shoe cleaning, wet cleaning, and free pickup & delivery in Ilorin.",
};

interface ServiceSection {
  id: string;
  title: string;
  badge?: string;
  description: string;
  included: string[];
  bestFor: string;
  pricing: string;
  pricingNote?: string;
  cta: { label: string; href: string };
  image: string;
  imageAlt: string;
}

const SERVICES: ServiceSection[] = [
  {
    id: "wash-fold",
    title: "Wash & Fold",
    description:
      "Your everyday clothes, washed with care and folded to perfection. We sort by colour, wash at the right temperature, and fold everything neatly so it's ready to go straight into your wardrobe. No ironing — just clean, fresh, and folded.",
    included: [
      "Colour-sorted washing",
      "Gentle machine wash at optimal temperature",
      "Fabric softener treatment",
      "Neat professional folding",
      "Packaged and ready for collection or delivery",
    ],
    bestFor: "Everyday casuals, t-shirts, joggers, gym clothes, and towels.",
    pricing: "\u20A68,500/month",
    pricingNote: "Up to 20 items per week",
    cta: { label: "Start Your Plan", href: generateWhatsAppURL("Hi! I'm interested in the Wash & Fold monthly plan.") },
    image: "/images/folded-towels.jpg",
    imageAlt: "Neatly folded towels",
  },
  {
    id: "full-laundry",
    title: "Full Laundry Service",
    badge: "Most Popular",
    description:
      "The complete package. We wash, iron, and fold your clothes to a crisp, professional finish. Whether it's your office shirts, traditional wear, or weekend fits — everything comes back looking brand new. This is the plan most of our customers love.",
    included: [
      "Colour-sorted washing",
      "Stain pre-treatment",
      "Professional pressing and ironing",
      "Expert folding or hanger-ready finish",
      "Individual garment inspection",
      "Packaged and ready for collection or delivery",
    ],
    bestFor: "Office wear, kaftans, gowns, traditional attire, and anyone who wants the full treatment.",
    pricing: "\u20A615,999/month",
    pricingNote: "Up to 20 items per week",
    cta: { label: "Get Started", href: generateWhatsAppURL("Hi! I'm interested in the Full Laundry Service plan.") },
    image: "/images/folded-shirts.jpg",
    imageAlt: "Professionally folded shirts",
  },
  {
    id: "pressing",
    title: "Pressing Only",
    description:
      "Already washed your clothes but they need that crisp, professional finish? Our pressing service handles everything from casual shirts to delicate fabrics. We use the right heat and technique for every fabric type, so your clothes always look sharp.",
    included: [
      "Steam and dry pressing",
      "Fabric-appropriate temperature settings",
      "Collar and cuff attention",
      "Crease-free finish",
      "Hanger-ready or folded to preference",
    ],
    bestFor: "Pre-washed clothes, office shirts, trousers, native wear, and event outfits.",
    pricing: "From \u20A6300/item",
    cta: { label: "Send Your Items", href: generateWhatsAppURL("Hi! I'd like to use your pressing service.") },
    image: "/images/clothesline.jpg",
    imageAlt: "Clothes on a line",
  },
  {
    id: "shoe-cleaning",
    title: "Shoe Cleaning",
    description:
      "Your kicks deserve the same care as your clothes. We deep clean sneakers, leather shoes, suede, and more — removing dirt, stains, and odours to bring them back to life. From your everyday trainers to your special-occasion shoes, we've got it handled.",
    included: [
      "Surface dirt and dust removal",
      "Deep sole cleaning",
      "Stain treatment for uppers",
      "Deodorising treatment",
      "Conditioning for leather and suede",
      "Air-dried to preserve shape",
    ],
    bestFor: "Sneakers, leather shoes, suede boots, canvas shoes, and designer footwear.",
    pricing: "Contact for quote",
    cta: { label: "Get a Quote", href: generateWhatsAppURL("Hi! I'd like a quote for shoe cleaning.") },
    image: "/images/clean-laundry.jpeg",
    imageAlt: "Clean laundry",
  },
  {
    id: "wet-cleaning",
    title: "Wet Cleaning",
    description:
      "An eco-friendly alternative to traditional dry cleaning. Our wet cleaning process uses water-based solutions and specialised equipment to gently clean delicate fabrics that can't handle regular washing. It's better for your clothes and better for the environment.",
    included: [
      "Eco-friendly water-based cleaning",
      "Specialised detergents for delicate fabrics",
      "Controlled moisture and temperature",
      "Gentle mechanical action",
      "Professional finishing and pressing",
      "Suitable for silk, wool, linen, and embroidered garments",
    ],
    bestFor: "Delicate fabrics, silk, wool, linen, embroidered garments, and items labelled 'dry clean only'.",
    pricing: "Contact for quote",
    cta: { label: "Get a Quote", href: generateWhatsAppURL("Hi! I'd like a quote for wet cleaning services.") },
    image: "/images/textiles.jpg",
    imageAlt: "Delicate textiles",
  },
  {
    id: "pickup-delivery",
    title: "Free Pickup & Delivery",
    description:
      "We come to you — no need to leave your home or office. Schedule a convenient pickup time, and we'll collect your laundry, clean it, and bring it back fresh and ready. It's completely free for all service plans within Ilorin city.",
    included: [
      "Schedule your pickup via WhatsApp or phone",
      "We arrive at your door at the agreed time",
      "Your items are tagged, sorted, and taken to our facility",
      "We clean, press, and package everything",
      "We deliver back to your doorstep — fresh and ready",
    ],
    bestFor: "Busy professionals, families, students, and anyone who values their time.",
    pricing: "FREE",
    pricingNote: "Included with all service plans",
    cta: { label: "Schedule a Pickup", href: generateWhatsAppURL("Hi! I'd like to schedule a free pickup.") },
    image: "/images/pickup.jpg",
    imageAlt: "Laundry pickup and delivery",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHeader
        title="Professional Care for Every Fabric"
        subtitle="From your everyday t-shirts to your finest kaftans — we've got you covered."
        backgroundImage="/images/folded-shirts.jpg"
      />

      {/* Service Sections */}
      {SERVICES.map((service, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-24 border-b border-brand-light-gray py-20 lg:py-28"
          >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div
                className={`flex flex-col gap-12 lg:items-start lg:gap-16 ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image */}
                <div className="w-full lg:sticky lg:top-28 lg:w-1/2 lg:self-start">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  {/* Badge */}
                  {service.badge && (
                    <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-yellow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                      <Sparkles size={14} />
                      {service.badge}
                    </span>
                  )}

                  {/* Title */}
                  <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {service.description}
                  </p>

                  {/* What's Included */}
                  <div className="mt-8">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
                      {service.id === "pickup-delivery" ? "How It Works" : "What\u2019s Included"}
                    </h3>
                    <ul className="space-y-3">
                      {service.included.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={20}
                            className="mt-0.5 shrink-0 text-[var(--color-success)]"
                          />
                          <span className="text-sm leading-relaxed text-text-secondary">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  {service.id !== "pickup-delivery" && (
                    <div className="mt-6">
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-primary">
                        Best For
                      </h3>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {service.bestFor}
                      </p>
                    </div>
                  )}

                  {/* Coverage Area (for pickup-delivery) */}
                  {service.id === "pickup-delivery" && (
                    <div className="mt-6 flex items-start gap-3">
                      <MapPin size={20} className="mt-0.5 shrink-0 text-brand-blue" />
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary">
                          Coverage Area
                        </h3>
                        <p className="mt-1 text-sm text-text-secondary">
                          All areas within Ilorin city, Kwara State. We&apos;re expanding soon!
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Pricing */}
                  <div className="mt-8 flex items-end gap-3">
                    <span className="text-3xl font-bold text-brand-yellow">
                      {service.pricing}
                    </span>
                    {service.pricingNote && (
                      <span className="mb-1 text-sm text-text-muted">
                        {service.pricingNote}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <a
                      href={service.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all hover:bg-brand-yellow-hover hover:scale-105"
                    >
                      {service.cta.label}
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="bg-[var(--color-dark-gray)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Which Service Is Right for You?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            Not sure which plan fits your needs? Chat with us and we&apos;ll help you find the
            perfect service for your wardrobe.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={generateWhatsAppURL("Hi! I need help choosing the right laundry service.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-105"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Chat on WhatsApp
            </a>
            <Link
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-8 py-4 text-sm font-semibold text-brand-blue transition-all hover:bg-brand-blue hover:text-white hover:scale-105"
            >
              <Phone size={18} />
              Call {SITE_CONFIG.phone}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
