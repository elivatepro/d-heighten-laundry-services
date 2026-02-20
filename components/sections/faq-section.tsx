"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils/cn";

const faqItems = [
  {
    question: "How does pickup and delivery work?",
    answer:
      "Simple. You schedule a pickup time that works for you. Our team comes to collect your laundry — anywhere in Ilorin city. Once cleaned, we deliver it right back to your door. The best part? Pickup and delivery are completely free.",
  },
  {
    question: "How long does it take?",
    answer:
      "Standard turnaround is 24-48 hours from pickup to delivery. If you need it faster, our express service delivers in 12-24 hours for a 50% markup.",
  },
  {
    question: "What if something gets damaged?",
    answer:
      "We take extreme care with every item. In the rare case something goes wrong, we'll make it right. Your satisfaction is guaranteed.",
  },
  {
    question: "Do you handle delicate fabrics?",
    answer:
      "Absolutely. We're trained to handle everything from everyday cotton to delicate silk, lace, and special native wear. Just let us know about any special care instructions.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide pickup and delivery across all of Ilorin city, Kwara State.",
  },
  {
    question: "How do I pay?",
    answer:
      "Payment is collected at pickup or delivery. We accept bank transfers and cash.",
  },
  {
    question: "Can I subscribe monthly?",
    answer:
      "Yes! Our monthly plans give you a set number of pieces per month at a discounted rate. Perfect for individuals and families who need regular laundry care.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useIntersection();

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Got Questions?"
          subtitle="We've got answers."
        />

        <div
          ref={ref}
          className={cn(
            "mx-auto max-w-3xl opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-brand-light-gray"
            >
              {/* Question */}
              <button
                onClick={() => toggleIndex(index)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-brand-yellow"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 text-base font-semibold text-text-primary md:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "shrink-0 text-text-muted transition-transform duration-300",
                    openIndex === index && "rotate-180 text-brand-yellow"
                  )}
                />
              </button>

              {/* Answer */}
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-base leading-relaxed text-text-secondary">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
