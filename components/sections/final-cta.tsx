"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { generateWhatsAppURL } from "@/lib/utils/whatsapp";
import { SITE_CONFIG } from "@/lib/constants/site";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils/cn";

const reassuranceBadges = [
  "Free pickup & delivery",
  "No commitments",
  "Transparent pricing",
];

export function FinalCTA() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Gradient Background Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,180,216,0.12) 0%, rgba(18,18,18,1) 50%, rgba(255,215,0,0.12) 100%)",
        }}
      />

      <div
        ref={ref}
        className={cn(
          "relative z-10 mx-auto max-w-7xl px-4 text-center opacity-0 lg:px-8",
          isVisible && "animate-fade-in-up"
        )}
      >
        {/* Headline */}
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          Ready to Reclaim Your Time?
        </h2>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Stop spending your weekends doing laundry. Let us handle it while you
          handle life.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={generateWhatsAppURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-105 md:text-base"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[rgba(0,180,216,0.5)] px-8 py-4 text-sm font-semibold text-[#00B4D8] transition-all hover:scale-105 hover:bg-[#00B4D8] hover:text-white md:text-base"
          >
            Request a Callback
          </Link>
        </div>

        {/* Phone Number */}
        <p className="mt-8 text-base text-white/60">
          Or call us directly:{" "}
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="font-semibold text-white transition-colors hover:text-[#FFD700]"
          >
            0805 076 6253
          </a>
        </p>

        {/* Reassurance Badges */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {reassuranceBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="shrink-0 text-[#22C55E]"
              />
              <span className="text-sm font-medium text-white/70">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
