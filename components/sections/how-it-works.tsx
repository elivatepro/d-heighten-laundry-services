"use client";

import { Smartphone, Truck, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { useIntersection } from "@/hooks/use-intersection";
import { generateWhatsAppURL } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils/cn";

const steps = [
  {
    number: 1,
    title: "Book Your Pickup",
    description:
      "Tell us what you need cleaned. WhatsApp us or use our calculator to get an instant quote. We\u2019ll schedule a pickup time that works for you.",
    icon: Smartphone,
  },
  {
    number: 2,
    title: "We Collect & Clean",
    description:
      "Our team picks up your laundry from anywhere in Ilorin. We wash, dry, iron, and fold with professional-grade equipment and genuine care.",
    icon: Truck,
  },
  {
    number: 3,
    title: "Fresh Delivery",
    description:
      "Your clothes come back clean, crisp, and ready to wear. Neatly folded or hung \u2014 exactly how you like them.",
    icon: Sparkles,
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useIntersection(0.1);

  return (
    <section className="bg-[var(--color-dark-gray)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Fresh Clothes in 3 Simple Steps"
          subtitle="No queues. No waiting. No stress. Here's how it works:"
        />

        {/* Steps Grid */}
        <div
          ref={ref}
          className="mt-4 grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "relative rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-8 opacity-0 transition-all",
                isVisible && "animate-fade-in-up"
              )}
              style={{
                animationDelay: isVisible ? `${index * 0.15}s` : undefined,
              }}
            >
              {/* Step Number */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-[#0A0A0A]">
                  {step.number}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-light-gray)]">
                  <step.icon size={24} className="text-brand-yellow" />
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-text-secondary">
                {step.description}
              </p>

              {/* Connector line (visible on md+ between cards) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-brand-light-gray md:block" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn(
            "mt-14 text-center opacity-0",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: isVisible ? "0.5s" : undefined }}
        >
          <a
            href={generateWhatsAppURL(
              "Hi D'heighten! I'd like to schedule my first laundry pickup."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all hover:bg-brand-yellow-hover hover:scale-105 md:text-base"
          >
            Start Your First Pickup
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
