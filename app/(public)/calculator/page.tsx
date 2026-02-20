import { PageHeader } from "@/components/shared/page-header";
import { PricingCalculator } from "@/components/sections/pricing-calculator";

export const metadata = {
  title: "Price Calculator | D'heighten Laundry",
  description:
    "Calculate your laundry cost instantly. No hidden fees — see exactly what your order will cost before placing it.",
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Price Calculator"
        subtitle="See exactly what your laundry will cost. No surprises, no hidden fees."
        backgroundImage="/images/folded-towels.jpg"
      />
      <PricingCalculator />
    </div>
  );
}
