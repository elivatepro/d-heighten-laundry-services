"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Crown,
  Star,
  Sparkles,
  Zap,
  Check,
  ShieldCheck,
  ArrowRight,
  Calculator,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { formatNaira, PRICING_ITEMS } from "@/lib/utils/pricing";
import { generateWhatsAppURL } from "@/lib/utils/whatsapp";
import { PageHeader } from "@/components/shared/page-header";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type PlanTab = "complete" | "washFold";

interface Plan {
  name: string;
  pieces: number;
  price: number;
  audience: string;
  featured?: boolean;
  icon: React.ReactNode;
}

const completeLaundryPlans: Plan[] = [
  {
    name: "Starter",
    pieces: 30,
    price: 15999,
    audience: "Perfect for individuals",
    icon: <Sparkles size={22} />,
  },
  {
    name: "Standard",
    pieces: 60,
    price: 30999,
    audience: "Great for couples & professionals",
    featured: true,
    icon: <Star size={22} />,
  },
  {
    name: "Family",
    pieces: 80,
    price: 42600,
    audience: "Ideal for small families",
    icon: <ShieldCheck size={22} />,
  },
  {
    name: "Premium",
    pieces: 100,
    price: 52999,
    audience: "Built for large families",
    icon: <Crown size={22} />,
  },
];

const completeLaundryFeatures = [
  "Free pickup & delivery",
  "Professional washing & ironing",
  "48-hour turnaround",
  "Careful fabric care",
];

const washFoldPlans: Plan[] = [
  {
    name: "Silver",
    pieces: 30,
    price: 8500,
    audience: "Light monthly load",
    icon: <Sparkles size={22} />,
  },
  {
    name: "Diamond",
    pieces: 60,
    price: 16999,
    audience: "Most popular choice",
    featured: true,
    icon: <Star size={22} />,
  },
  {
    name: "Gold",
    pieces: 80,
    price: 22500,
    audience: "Heavy monthly load",
    icon: <Crown size={22} />,
  },
];

const washFoldFeatures = [
  "Free pickup & delivery",
  "Premium washing & drying",
  "Neat folding",
  "48-hour turnaround",
];

// Group PRICING_ITEMS by category for the pay-per-item tables
const categoryLabels: Record<string, string> = {
  Tops: "Tops",
  Bottoms: "Bottoms",
  Special: "Native & Special Wear",
  Bedding: "Bedding",
  Accessories: "Accessories",
};

const categoryOrder = ["Tops", "Bottoms", "Special", "Bedding", "Accessories"];

function groupByCategory() {
  const groups: Record<string, typeof PRICING_ITEMS> = {};
  for (const item of PRICING_ITEMS) {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  }
  return groups;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function PlanCard({ plan, features }: { plan: Plan; features: string[] }) {
  const whatsAppMsg = `Hi D'heighten! I'm interested in the ${plan.name} plan (${plan.pieces} pieces/month at ${formatNaira(plan.price)}). Please share more details.`;

  return (
    <div
      className={cn(
        "relative flex min-w-[280px] flex-col rounded-2xl p-6 transition-transform hover:scale-[1.02]",
        plan.featured
          ? "border-2 border-brand-yellow bg-gradient-to-b from-[var(--color-medium-gray)] to-[var(--color-dark-gray)]"
          : "border border-brand-light-gray bg-[var(--color-medium-gray)]"
      )}
    >
      {/* Most Popular Badge */}
      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
            Most Popular
          </span>
        </div>
      )}

      {/* Icon & Name */}
      <div className="mb-4 flex items-center gap-3 pt-2">
        <div
          className={cn(
            "rounded-lg p-2",
            plan.featured
              ? "bg-brand-yellow/20 text-brand-yellow"
              : "bg-brand-blue/20 text-brand-blue"
          )}
        >
          {plan.icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary">{plan.name}</h3>
      </div>

      {/* Price */}
      <div className="mb-1">
        <span className="font-mono text-3xl font-bold text-brand-yellow">
          {formatNaira(plan.price)}
        </span>
        <span className="text-sm text-text-secondary">/month</span>
      </div>

      {/* Pieces */}
      <p className="mb-4 text-sm text-text-secondary">
        {plan.pieces} pieces per month
      </p>

      {/* Audience */}
      <p className="mb-6 text-sm text-text-muted">{plan.audience}</p>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
            <Check size={16} className="mt-0.5 shrink-0 text-brand-yellow" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={generateWhatsAppURL(whatsAppMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-105",
          plan.featured
            ? "bg-brand-yellow text-[#0A0A0A] hover:bg-brand-yellow-hover"
            : "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
        )}
      >
        Get This Plan
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}

function PricingTable({
  categoryKey,
  items,
}: {
  categoryKey: string;
  items: typeof PRICING_ITEMS;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)]">
      <div className="border-b border-brand-light-gray bg-[var(--color-dark-gray)] px-6 py-4">
        <h3 className="text-lg font-bold text-text-primary">
          {categoryLabels[categoryKey] ?? categoryKey}
        </h3>
      </div>
      <div className="divide-y divide-brand-light-gray">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-6 py-3.5 transition-colors hover:bg-[var(--color-dark-gray)]"
          >
            <span className="text-sm text-text-secondary">{item.name}</span>
            <span className="font-mono text-sm font-semibold text-brand-yellow">
              {formatNaira(item.price)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<PlanTab>("complete");
  const grouped = groupByCategory();

  const plans = activeTab === "complete" ? completeLaundryPlans : washFoldPlans;
  const features =
    activeTab === "complete" ? completeLaundryFeatures : washFoldFeatures;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <PageHeader
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. No surprises. Just quality laundry care at fair prices."
        backgroundImage="/images/folded-towels.jpg"
      />

      {/* ----------------------------------------------------------------- */}
      {/* Monthly Plans */}
      {/* ----------------------------------------------------------------- */}
      <section className="px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Save More With Monthly Plans
            </h2>
            <p className="mt-3 text-text-secondary">
              Subscribe monthly and enjoy significant savings over pay-per-item
              pricing.
            </p>
          </div>

          {/* Tabs */}
          <div className="mx-auto mb-12 flex max-w-md overflow-hidden rounded-full border border-brand-light-gray bg-[var(--color-dark-gray)] p-1">
            <button
              onClick={() => setActiveTab("complete")}
              className={cn(
                "flex-1 rounded-full px-4 py-3 text-sm font-semibold transition-all",
                activeTab === "complete"
                  ? "bg-brand-yellow text-[#0A0A0A]"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              <span className="hidden sm:inline">Complete Laundry</span>
              <span className="sm:hidden">Complete</span>
            </button>
            <button
              onClick={() => setActiveTab("washFold")}
              className={cn(
                "flex-1 rounded-full px-4 py-3 text-sm font-semibold transition-all",
                activeTab === "washFold"
                  ? "bg-brand-yellow text-[#0A0A0A]"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              <span className="hidden sm:inline">Wash &amp; Fold Only</span>
              <span className="sm:hidden">Wash &amp; Fold</span>
            </button>
          </div>

          {/* Tab label */}
          <p className="mb-6 text-center text-sm text-text-muted">
            {activeTab === "complete"
              ? "Wash + Iron + Fold — the full package"
              : "Wash & Fold Only — no ironing included"}
          </p>

          {/* Plan cards — horizontal scroll on mobile, grid on desktop */}
          <div
            className={cn(
              "flex gap-6 overflow-x-auto pb-4 md:grid md:overflow-visible lg:gap-6",
              activeTab === "complete"
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
            )}
          >
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} features={features} />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Pay Per Item */}
      {/* ----------------------------------------------------------------- */}
      <section className="border-t border-brand-light-gray bg-[var(--color-dark-gray)] px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Pay Per Item
            </h2>
            <p className="mt-3 text-text-secondary">
              Not ready for a plan? No problem. Pay per item with our standard
              pricing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {categoryOrder.map((catKey) => {
              const items = grouped[catKey];
              if (!items || items.length === 0) return null;
              return (
                <PricingTable key={catKey} categoryKey={catKey} items={items} />
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Express Service */}
      {/* ----------------------------------------------------------------- */}
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-brand-light-gray bg-gradient-to-br from-[var(--color-medium-gray)] to-[var(--color-dark-gray)]">
            <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:p-12">
              {/* Icon */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow/20">
                <Zap size={40} className="text-brand-yellow" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
                  Need It Faster?
                </h2>
                <p className="mt-3 text-text-secondary">
                  Our express service delivers your laundry within{" "}
                  <strong className="text-text-primary">24 hours</strong>{" "}
                  instead of the standard 48 hours. A{" "}
                  <strong className="text-brand-yellow">
                    50% express markup
                  </strong>{" "}
                  applies to all items.
                </p>

                {/* Example Calculation */}
                <div className="mt-6 inline-block rounded-xl border border-brand-light-gray bg-[var(--color-dark-gray)] px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Example
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    5 Coloured Tops &times; {formatNaira(300)} ={" "}
                    <span className="font-mono text-text-primary">
                      {formatNaira(1500)}
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    + 50% express fee ={" "}
                    <span className="font-mono font-semibold text-brand-yellow">
                      {formatNaira(2250)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Bottom CTA */}
      {/* ----------------------------------------------------------------- */}
      <section className="border-t border-brand-light-gray bg-[var(--color-dark-gray)] px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-text-secondary">
            Choose a plan or calculate your custom quote. We&apos;re just a
            message away.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={generateWhatsAppURL(
                "Hi D'heighten! I'd like to get started with a laundry plan. Can you help me choose the right one?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all hover:scale-105 hover:bg-brand-yellow-hover md:text-base"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-8 py-4 text-sm font-semibold text-brand-blue transition-all hover:scale-105 hover:bg-brand-blue hover:text-white md:text-base"
            >
              <Calculator size={18} />
              Price Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
