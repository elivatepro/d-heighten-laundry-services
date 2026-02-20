"use client";

import { Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils/cn";

const testimonials = [
  {
    quote:
      "I was skeptical at first, but D\u2019heighten completely changed my weekends. No more hours doing laundry. My clothes come back perfectly pressed and folded. Worth every naira.",
    name: "Aisha M.",
    title: "Business Owner",
  },
  {
    quote:
      "As a medical student with zero free time, D\u2019heighten is a lifesaver. They pick up from my hostel and deliver right back. The quality is better than what I could do myself.",
    name: "David O.",
    title: "UNILORIN Student",
  },
  {
    quote:
      "Finally, a laundry service that actually understands fabric care. My kaftans and native wear always come back looking brand new. Highly recommend.",
    name: "Chief Balogun",
    title: "Entrepreneur",
  },
  {
    quote:
      "The express service saved me before an important meeting. 24 hours and my suit was back, perfectly pressed. D\u2019heighten delivers. Literally.",
    name: "Funke A.",
    title: "Corporate Professional",
  },
  {
    quote:
      "We use D\u2019heighten for our family of five. Their monthly plan is so convenient and actually saves us money compared to doing it ourselves. Great service!",
    name: "The Adeyemi Family",
    title: "",
  },
];

function StarRating() {
  return (
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-brand-yellow text-brand-yellow"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { ref, isVisible } = useIntersection();

  return (
    <section className="bg-[var(--color-dark-gray)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="What Our Customers Say"
          subtitle="Don't just take our word for it."
        />

        <div
          ref={ref}
          className={cn(
            "opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          {/* Mobile: horizontal scrolling carousel */}
          <div
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:hidden"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-[85vw] max-w-[320px] flex-shrink-0 snap-center"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              </div>
            ))}
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden gap-6 lg:grid lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="relative h-full rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-6 sm:p-8">
      {/* Large decorative quote mark */}
      <span
        className="pointer-events-none absolute left-5 top-3 select-none font-display text-6xl font-bold leading-none text-brand-yellow opacity-20 sm:left-6 sm:top-4 sm:text-7xl sm:opacity-30"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="relative z-10">
        <StarRating />
        <blockquote className="mb-6 text-sm leading-relaxed text-text-secondary">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div>
          <p className="font-semibold text-text-primary">{name}</p>
          {title && (
            <p className="text-sm text-text-muted">{title}</p>
          )}
        </div>
      </div>
    </div>
  );
}
