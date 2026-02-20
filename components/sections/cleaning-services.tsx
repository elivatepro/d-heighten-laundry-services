"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { generateWhatsAppURL } from "@/lib/utils/whatsapp";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils/cn";

const cleaningServices = [
  "Home Deep Cleaning",
  "Office Cleaning",
  "Move-in / Move-out Cleaning",
  "Regular Maintenance Plans",
];

export function CleaningServices() {
  const { ref, isVisible } = useIntersection();

  return (
    <section className="bg-[var(--color-dark-gray)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Need Deep Cleaning?"
          subtitle="Beyond laundry — we make spaces spotless too."
          centered={false}
        />

        <div
          ref={ref}
          className={cn(
            "grid items-start gap-12 opacity-0 lg:grid-cols-2 lg:gap-16",
            isVisible && "animate-fade-in-up"
          )}
        >
          {/* Text Content */}
          <div>
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              D&apos;heighten also offers professional cleaning services for
              homes and offices. Deep cleaning, move-in/out cleaning, and
              regular maintenance — we bring the same quality and care to your
              spaces that we bring to your clothes.
            </p>

            {/* Checklist */}
            <ul className="mt-8 space-y-4">
              {cleaningServices.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#22C55E]"
                  />
                  <span className="text-base font-medium text-text-primary">
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={generateWhatsAppURL(
                "Hi D'heighten! 👋 I'm interested in your cleaning services. Can you provide more information?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all hover:scale-105 hover:bg-brand-yellow-hover md:text-base"
            >
              Get a Cleaning Quote &rarr;
            </a>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/supplies.jpg"
              alt="Professional cleaning supplies and services"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
