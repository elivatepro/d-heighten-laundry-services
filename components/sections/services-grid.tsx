"use client";

import Link from "next/link";
import { Shirt, Sparkles, Flame, Footprints, Truck, Droplets } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils/cn";

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  href: string;
}

const SERVICES: ServiceCard[] = [
  {
    icon: Shirt,
    title: "Wash & Fold",
    description:
      "Clean, folded, ready to wear. Perfect for everyday clothes that need a refresh without the ironing.",
    price: "From \u20A68,500/month",
    href: "/services",
  },
  {
    icon: Sparkles,
    title: "Full Laundry Service",
    description:
      "The complete package. Washing, ironing, and expert folding. Your clothes come back looking brand new.",
    price: "From \u20A615,999/month",
    href: "/services",
  },
  {
    icon: Flame,
    title: "Pressing Only",
    description:
      "Already clean but wrinkled? We\u2019ll press your clothes to a crisp, professional finish.",
    price: "From \u20A6300/item",
    href: "/services",
  },
  {
    icon: Footprints,
    title: "Shoe Cleaning",
    description:
      "Restore your kicks to their former glory. Deep cleaning for sneakers, leather, and more.",
    price: "Contact for quote",
    href: "/services",
  },
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    description:
      "We come to you \u2014 anywhere in Ilorin city. Schedule at your convenience. It\u2019s free.",
    price: "FREE",
    href: "/services",
  },
  {
    icon: Droplets,
    title: "Wet Cleaning",
    description:
      "Eco-friendly cleaning for delicate fabrics. Gentle on clothes, tough on stains.",
    price: "Contact for quote",
    href: "/services",
  },
];

export function ServicesGrid() {
  const { ref, isVisible } = useIntersection();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Everything Your Wardrobe Needs"
          subtitle="From everyday essentials to special care items &mdash; we handle it all."
        />

        <div
          ref={ref}
          className={cn(
            "grid gap-6 md:grid-cols-2 lg:grid-cols-3 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          {SERVICES.map((service) => (
            <ServiceCardItem key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardItem({ service }: { service: ServiceCard }) {
  const Icon = service.icon;

  return (
    <div className="group rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-8 transition-all duration-300 hover:border-brand-yellow hover:-translate-y-1">
      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/10">
        <Icon size={24} className="text-brand-yellow" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold text-text-primary">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-text-secondary">
        {service.description}
      </p>

      {/* Price */}
      <p className="mb-4 text-sm font-semibold text-brand-yellow">
        {service.price}
      </p>

      {/* Link */}
      <Link
        href={service.href}
        className="inline-flex items-center text-sm font-medium text-text-secondary transition-colors group-hover:text-brand-yellow"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}
