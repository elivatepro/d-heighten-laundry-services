"use client";

import { useState, useMemo } from "react";
import { Minus, Plus, Phone, MessageCircle, Zap } from "lucide-react";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
import { SectionHeader } from "@/components/shared/section-header";
import {
  PRICING_ITEMS,
  calculateLaundryPrice,
  formatNaira,
} from "@/lib/utils/pricing";
import type { PricingItem } from "@/lib/utils/pricing";
import { generateWhatsAppQuoteURL } from "@/lib/utils/whatsapp";
import { generateWhatsAppURL } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils/cn";

type Tab = "one-time" | "monthly" | "cleaning";

const TABS: { id: Tab; label: string }[] = [
  { id: "one-time", label: "One-Time Order" },
  { id: "monthly", label: "Monthly Plan" },
  { id: "cleaning", label: "Cleaning Service" },
];

const MONTHLY_PLANS = [
  {
    name: "Basic (Wash & Fold)",
    description: "Up to 20 items per month",
    price: "\u20A68,500/month",
  },
  {
    name: "Standard (Full Laundry)",
    description: "Up to 20 items \u2014 wash, iron & fold",
    price: "\u20A615,999/month",
  },
  {
    name: "Premium",
    description: "Up to 40 items \u2014 full laundry + special care",
    price: "\u20A628,999/month",
  },
  {
    name: "Family Plan",
    description: "Unlimited items for the whole family",
    price: "Contact for quote",
  },
];

export function PricingCalculator() {
  const [items, setItems] = useState<PricingItem[]>(
    () => PRICING_ITEMS.map((item) => ({ ...item }))
  );
  const [isExpress, setIsExpress] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("one-time");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const result = useMemo(
    () => calculateLaundryPrice(items, isExpress),
    [items, isExpress]
  );

  const groupedItems = useMemo(() => {
    const groups: Record<string, PricingItem[]> = {};
    for (const item of items) {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    }
    return groups;
  }, [items]);

  function updateQuantity(id: string, delta: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  }

  function handleWhatsAppQuote() {
    if (activeTab === "one-time") {
      const activeItems = items.filter((i) => i.quantity > 0);
      if (activeItems.length === 0) return;

      const url = generateWhatsAppQuoteURL({
        items: activeItems,
        total: result.total,
        isExpress,
        name: name || "Not provided",
        phone: phone || "Not provided",
      });
      window.open(url, "_blank", "noopener,noreferrer");
    } else if (activeTab === "monthly") {
      const message = `Hi D'heighten! I'm interested in your monthly laundry plans.\n\nName: ${name || "Not provided"}\nPhone: ${phone || "Not provided"}\n\nPlease share more details. Thank you!`;
      window.open(generateWhatsAppURL(message), "_blank", "noopener,noreferrer");
    } else {
      const message = `Hi D'heighten! I'd like to inquire about your cleaning services.\n\nName: ${name || "Not provided"}\nPhone: ${phone || "Not provided"}\n\nPlease let me know the options available. Thank you!`;
      window.open(generateWhatsAppURL(message), "_blank", "noopener,noreferrer");
    }
  }

  function handleCallback() {
    const message = `Hi D'heighten! I'd like to request a callback.\n\nName: ${name || "Not provided"}\nPhone: ${phone || "Not provided"}\n\nPlease call me at your earliest convenience. Thank you!`;
    window.open(generateWhatsAppURL(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="pricing-calculator" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Get Your Instant Quote"
          subtitle="See exactly what your laundry will cost. No surprises. No hidden fees."
        />

        <div className="mx-auto max-w-4xl rounded-3xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-6 sm:p-8">
          {/* Tab Buttons */}
          <div className="mb-8 flex gap-2 rounded-xl bg-[var(--color-dark-gray)] p-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-brand-yellow text-[#0A0A0A] shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* One-Time Order Tab */}
          {activeTab === "one-time" && (
            <div className="space-y-6">
              {Object.entries(groupedItems).map(([category, categoryItems]) => (
                <div key={category}>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {categoryItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between rounded-xl border border-brand-light-gray/50 bg-[var(--color-dark-gray)] px-4 py-3"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium text-text-primary">
                            {item.name}
                          </span>
                          <span className="ml-2 text-xs text-text-muted">
                            {formatNaira(item.price)}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity === 0}
                            className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
                              item.quantity === 0
                                ? "border-brand-light-gray/30 text-text-muted cursor-not-allowed"
                                : "border-brand-light-gray text-text-primary hover:border-brand-yellow hover:text-brand-yellow"
                            )}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-sm font-semibold text-text-primary tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-light-gray text-text-primary transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Express Toggle */}
              <div className="flex items-center justify-between rounded-xl border border-brand-light-gray/50 bg-[var(--color-dark-gray)] px-4 py-3">
                <div>
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-brand-yellow" />
                    <span className="text-sm font-medium text-text-primary">
                      Express Delivery (+50%)
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-text-muted">
                    Get your laundry back within 24 hours
                  </p>
                </div>
                <button
                  onClick={() => setIsExpress(!isExpress)}
                  className={cn(
                    "relative h-6 w-11 rounded-full transition-colors",
                    isExpress ? "bg-brand-yellow" : "bg-brand-light-gray"
                  )}
                  role="switch"
                  aria-checked={isExpress}
                  aria-label="Toggle express delivery"
                >
                  <span
                    className={cn(
                      "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform",
                      isExpress && "translate-x-5"
                    )}
                  />
                </button>
              </div>

              {/* Result Display */}
              <div className="rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 p-5 text-center">
                <p className="text-sm text-text-secondary">
                  Your Estimated Total
                </p>
                <p className="mt-1 font-mono text-4xl font-bold text-brand-yellow">
                  {result.formattedTotal}
                </p>
                {result.expressMarkup !== undefined && result.expressMarkup > 0 && (
                  <p className="mt-1 text-xs text-text-muted">
                    Includes {formatNaira(result.expressMarkup)} express fee
                  </p>
                )}
                <p className="mt-2 text-xs text-text-muted">
                  Final price confirmed at pickup
                </p>
              </div>
            </div>
          )}

          {/* Monthly Plan Tab */}
          {activeTab === "monthly" && (
            <div className="space-y-3">
              {MONTHLY_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className="flex items-center justify-between rounded-xl border border-brand-light-gray/50 bg-[var(--color-dark-gray)] px-4 py-4"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">
                      {plan.name}
                    </h4>
                    <p className="mt-0.5 text-xs text-text-muted">
                      {plan.description}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-brand-yellow whitespace-nowrap ml-4">
                    {plan.price}
                  </span>
                </div>
              ))}

              <div className="pt-2 text-center">
                <button
                  onClick={handleWhatsAppQuote}
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          )}

          {/* Cleaning Service Tab */}
          {activeTab === "cleaning" && (
            <div className="py-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow/10">
                <MessageCircle size={28} className="text-brand-yellow" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-text-primary">
                Tell us about your cleaning needs
              </h3>
              <p className="mb-6 text-sm text-text-secondary">
                Home cleaning, office cleaning, deep cleaning &mdash; we&apos;ve got you covered.
                Send us a message and we&apos;ll provide a custom quote.
              </p>
              <button
                onClick={handleWhatsAppQuote}
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </button>
            </div>
          )}

          {/* Contact Fields & Action Buttons */}
          <div className="mt-8 space-y-4 border-t border-brand-light-gray pt-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="quote-name"
                  className="mb-1.5 block text-xs font-medium text-text-secondary"
                >
                  Your Name
                </label>
                <input
                  id="quote-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aisha"
                  className="w-full rounded-lg border border-brand-light-gray bg-[var(--color-dark-gray)] px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-brand-yellow"
                />
              </div>
              <div>
                <label
                  htmlFor="quote-phone"
                  className="mb-1.5 block text-xs font-medium text-text-secondary"
                >
                  Phone Number
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0801 234 5678"
                  className="w-full rounded-lg border border-brand-light-gray bg-[var(--color-dark-gray)] px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-brand-yellow"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleWhatsAppQuote}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <WhatsAppIcon />
                Continue on WhatsApp
              </button>
              <button
                onClick={handleCallback}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-light-gray px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-brand-yellow hover:text-brand-yellow"
              >
                <Phone size={18} />
                Request Callback Instead
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
