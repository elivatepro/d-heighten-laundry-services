"use client";

import Link from "next/link";
import { Trophy, Zap, Shield, Home, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils/cn";

const valueProps = [
  {
    icon: Trophy,
    title: "Quality You Can See",
    description:
      "Industrial-grade machines. Professional-grade care. Your clothes come back looking better than when they left. Every. Single. Time.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Standard delivery in 24-48 hours. Need it faster? Our express service gets your clothes back in 12-24 hours.",
  },
  {
    icon: Shield,
    title: "Your Clothes Are Safe",
    description:
      "We treat every item like it\u2019s our own. Careful handling, proper sorting, and attention to care labels. No mix-ups. No damage.",
  },
  {
    icon: Home,
    title: "We Come To You",
    description:
      "Free pickup and delivery across Ilorin city. Schedule when it works for you \u2014 morning, afternoon, or evening.",
  },
];

export function WhyChooseUs() {
  const { ref, isVisible } = useIntersection();

  return (
    <section className="bg-[var(--color-dark-gray)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Why Ilorin Trusts D'heighten"
          subtitle="We're not just another laundry service. Here's what makes us different:"
        />

        {/* Value Proposition Cards */}
        <div
          ref={ref}
          className={cn(
            "grid gap-6 opacity-0 md:grid-cols-2",
            isVisible && "animate-fade-in-up"
          )}
        >
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-8 transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow/10">
                <prop.icon size={28} className="text-brand-yellow" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                {prop.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all hover:scale-105 hover:bg-brand-yellow-hover md:text-base"
          >
            Experience the D&apos;heighten Difference
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
