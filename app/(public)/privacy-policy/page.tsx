import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for D'heighten Laundry. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="mx-auto max-w-3xl px-4 py-20 lg:py-28">
        <div className="rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
            Coming Soon
          </h2>
          <p className="mt-4 text-text-secondary">
            Our privacy policy is currently being prepared and will be available
            shortly. Please check back soon.
          </p>
        </div>
      </section>
    </div>
  );
}
