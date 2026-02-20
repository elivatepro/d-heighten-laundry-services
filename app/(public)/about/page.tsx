import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Scissors, Globe, Briefcase, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getYearsOperating } from "@/lib/constants/site";
import { generateWhatsAppURL } from "@/lib/utils/whatsapp";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "About D'heighten Laundry",
  description:
    "Learn about D'heighten Laundry — our story, values, and commitment to professional laundry care in Ilorin, Kwara State. Serving the community with excellence for over " +
    (new Date().getFullYear() - 2022) +
    " years.",
};

interface ValueCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUES: ValueCard[] = [
  {
    icon: Star,
    title: "Excellent Service",
    description:
      "We don't cut corners. Every garment is treated with the same level of care and attention, whether it's a pair of socks or a wedding gown. Quality isn't negotiable — it's our standard.",
  },
  {
    icon: Scissors,
    title: "Fabric Care",
    description:
      "Different fabrics need different treatment. We understand the science behind fabric care — the right temperature, the right detergent, the right technique. Your clothes are safe with us.",
  },
  {
    icon: Globe,
    title: "Keep Africa Clean",
    description:
      "We believe in a cleaner Africa — starting with your wardrobe. Our eco-friendly processes and responsible practices reflect our commitment to the environment and our community.",
  },
  {
    icon: Briefcase,
    title: "Professional Service",
    description:
      "From the moment you reach out to the moment you receive your clothes, every interaction is professional, prompt, and friendly. We run a tight operation because you deserve nothing less.",
  },
];

export default function AboutPage() {
  const yearsOperating = getYearsOperating();

  return (
    <div>
      {/* Hero Section */}
      <PageHeader
        title="The Story Behind the Clean"
        subtitle="We started with a simple mission: make professional laundry accessible to everyone in Ilorin."
        backgroundImage="/images/stacked.jpeg"
      />

      {/* Who We Are */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            {/* Image */}
            <div className="w-full lg:sticky lg:top-28 lg:w-1/2 lg:self-start">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/facility.jpg"
                  alt="D'heighten Laundry facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                Who We Are
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-base leading-relaxed text-text-secondary">
                  D&apos;heighten Laundry is a professional laundry and cleaning service based in
                  Ilorin, Kwara State. For over {yearsOperating} years, we&apos;ve been helping
                  individuals, families, and businesses keep their wardrobes clean, sharp, and
                  ready to wear &mdash; without the stress.
                </p>
                <p className="text-base leading-relaxed text-text-secondary">
                  What started as a small operation has grown into a trusted name in Ilorin&apos;s
                  laundry industry. We invested in the right equipment, trained our team to handle
                  every fabric with expertise, and built a service that people can rely on week
                  after week. From everyday casuals to delicate traditional wear, we treat every
                  item like it&apos;s our own.
                </p>
                <p className="text-base leading-relaxed text-text-secondary">
                  Our customers keep coming back because we deliver on our promise: your clothes
                  come back clean, fresh, and looking their best. No excuses, no shortcuts. Just
                  honest, professional work &mdash; every single time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="border-y border-brand-light-gray bg-[var(--color-dark-gray)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
              Our values aren&apos;t just words on a wall. They guide everything we do &mdash; from
              how we handle your clothes to how we treat our customers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-8 transition-all duration-300 hover:border-brand-yellow hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/10">
                    <Icon size={24} className="text-brand-yellow" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-start lg:gap-16">
            {/* Image */}
            <div className="w-full lg:sticky lg:top-28 lg:w-1/2 lg:self-start">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/stacked.jpeg"
                  alt="Stacked clean laundry"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                Our Goal
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                To keep your wardrobe clean, smart, ready to wear, and excellently organized. So
                you can focus on living your life.
              </p>
              <div className="mt-12">
                <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
                  Why We Do It
                </h2>
                <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                  We enjoy extending our value to others. There&apos;s genuine satisfaction in
                  seeing someone pick up their clothes and knowing we&apos;ve made their week a
                  little easier. That&apos;s why we show up every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-dark-gray)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Want to Experience D&apos;heighten?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            Join hundreds of satisfied customers in Ilorin who trust us with their wardrobes. Get
            started today &mdash; it only takes a message.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={generateWhatsAppURL("Hi! I'd like to learn more about D'heighten Laundry services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-105"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Chat on WhatsApp
            </a>
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all hover:bg-brand-yellow-hover hover:scale-105"
            >
              Get a Free Quote
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
