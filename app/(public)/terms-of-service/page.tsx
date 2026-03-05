import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for D'heighten Laundry. Read our terms and conditions for using our laundry services.",
};

export default function TermsOfServicePage() {
  return (
    <div>
      <PageHeader
        title="Terms of Service"
        subtitle="The terms and conditions governing the use of our services."
      />

      <section className="mx-auto max-w-3xl px-4 py-20 lg:py-28">
        <div className="rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
            Coming Soon
          </h2>
          <p className="mt-4 text-text-secondary">
            Our terms of service are currently being prepared and will be
            available shortly. Please check back soon.
          </p>
        </div>
      </section>
    </div>
  );
}
