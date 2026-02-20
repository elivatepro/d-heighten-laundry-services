import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description:
    "Simple, transparent pricing for D'heighten Laundry services. Monthly plans, pay-per-item rates, and express service options in Ilorin.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
