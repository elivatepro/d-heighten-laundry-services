"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils/cn";

const galleryImages = [
  {
    src: "/images/facility.jpg",
    alt: "Heavy duty washing machines",
    caption: "Heavy duty washing machines",
  },
  {
    src: "/images/washing-machine.jpg",
    alt: "Commercial washing equipment",
    caption: "Commercial washing equipment",
  },
  {
    src: "/images/washing.jpg",
    alt: "Professional laundry care",
    caption: "Professional laundry care",
  },
  {
    src: "/images/stacked.jpeg",
    alt: "Stacked and ready to be packed",
    caption: "Stacked and ready to be packed",
  },
  {
    src: "/images/folded-towels.jpg",
    alt: "Freshly folded towels",
    caption: "Freshly folded towels",
  },
  {
    src: "/images/clean-laundry.jpeg",
    alt: "Fresh, clean laundry",
    caption: "Fresh, clean laundry",
  },
];

export function GallerySection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section className="bg-[var(--color-black)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="See Where The Magic Happens"
          subtitle="Professional equipment. Spotless facility. Real results."
        />

        {/* Image Grid */}
        <div
          ref={ref}
          className={cn(
            "grid gap-4 opacity-0 md:grid-cols-2 lg:grid-cols-3",
            isVisible && "animate-fade-in-up"
          )}
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-white">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-base font-semibold text-brand-blue transition-colors hover:text-brand-blue-hover"
          >
            View Full Gallery
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
