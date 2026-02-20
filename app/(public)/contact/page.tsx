"use client";

import { useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils/cn";
import { SITE_CONFIG } from "@/lib/constants/site";
import { generateWhatsAppURL } from "@/lib/utils/whatsapp";
import { PageHeader } from "@/components/shared/page-header";

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(
      /^(\+234|0)[789]\d{9}$/,
      "Please enter a valid Nigerian phone number"
    ),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  serviceInterest: z.enum(["Laundry", "Cleaning", "Both"], {
    message: "Please select a service",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ContactMethodCard({
  icon,
  title,
  description,
  children,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <div className="relative flex flex-col items-center rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-8 text-center transition-transform hover:scale-[1.02]">
      {badge && (
        <span className="absolute -top-3 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
          {badge}
        </span>
      )}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/20 text-brand-blue">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-text-primary">{title}</h3>
      <p className="mb-6 text-sm text-text-secondary">{description}</p>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceInterest: undefined,
      message: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(_data: ContactFormData) {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    reset();
  }

  const inputStyles =
    "w-full bg-[var(--color-dark-gray)] border border-brand-light-gray rounded-lg p-4 text-text-primary placeholder:text-text-muted transition-colors focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <PageHeader
        title="Let's Talk"
        subtitle="Questions? Ready to book? We're here to help."
        backgroundImage="/images/clean-laundry.jpeg"
      />

      {/* ----------------------------------------------------------------- */}
      {/* Contact Method Cards */}
      {/* ----------------------------------------------------------------- */}
      <section className="px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {/* WhatsApp */}
          <ContactMethodCard
            icon={<MessageCircle size={28} />}
            title="WhatsApp"
            description="The fastest way to reach us"
            badge="Recommended"
          >
            <a
              href={generateWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
            >
              Open WhatsApp
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </ContactMethodCard>

          {/* Phone */}
          <ContactMethodCard
            icon={<Phone size={28} />}
            title="Phone Call"
            description="Prefer to talk? Call us directly"
          >
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="font-mono text-lg font-semibold text-brand-yellow transition-colors hover:text-brand-yellow-hover"
            >
              {SITE_CONFIG.phone}
            </a>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
              <Clock size={14} />
              <span>Mon &ndash; Sat, 8am &ndash; 6pm</span>
            </div>
          </ContactMethodCard>

          {/* Email */}
          <ContactMethodCard
            icon={<Mail size={28} />}
            title="Email"
            description="For detailed inquiries or business proposals"
          >
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm font-medium text-brand-blue break-all transition-colors hover:text-brand-blue-hover"
            >
              {SITE_CONFIG.email}
            </a>
          </ContactMethodCard>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Contact Form */}
      {/* ----------------------------------------------------------------- */}
      <section className="border-t border-brand-light-gray bg-[var(--color-dark-gray)] px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              Send Us a Message
            </h2>
            <p className="mt-3 text-text-secondary">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] px-8 py-16 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/20">
                <CheckCircle2 size={36} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                Message Sent!
              </h3>
              <p className="mt-3 max-w-md text-text-secondary">
                Thank you! We&apos;ve received your message and will respond
                within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue transition-all hover:scale-105 hover:bg-brand-blue hover:text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 rounded-2xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-8"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  Name <span className="text-error">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className={cn(
                    inputStyles,
                    errors.name && "border-error focus:border-error focus:ring-error"
                  )}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-error">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  Phone <span className="text-error">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="08012345678"
                  className={cn(
                    inputStyles,
                    errors.phone && "border-error focus:border-error focus:ring-error"
                  )}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-error">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  Email{" "}
                  <span className="text-text-muted text-xs">(optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={cn(
                    inputStyles,
                    errors.email && "border-error focus:border-error focus:ring-error"
                  )}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-error">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="serviceInterest"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  Service Interest
                </label>
                <select
                  id="serviceInterest"
                  className={cn(
                    inputStyles,
                    "appearance-none",
                    errors.serviceInterest &&
                      "border-error focus:border-error focus:ring-error"
                  )}
                  defaultValue=""
                  {...register("serviceInterest")}
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  <option value="Laundry">Laundry</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Both">Both</option>
                </select>
                {errors.serviceInterest && (
                  <p className="mt-1.5 text-xs text-error">
                    {errors.serviceInterest.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className={cn(
                    inputStyles,
                    "resize-y",
                    errors.message && "border-error focus:border-error focus:ring-error"
                  )}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-error">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all hover:scale-[1.02] hover:bg-brand-yellow-hover disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Location & Social */}
      {/* ----------------------------------------------------------------- */}
      <section className="px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Address */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-text-primary">
                Where to Find Us
              </h2>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">
                    {SITE_CONFIG.name}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">
                    Business Hours
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Monday &ndash; Saturday: 8:00 AM &ndash; 6:00 PM
                  </p>
                  <p className="text-sm text-text-muted">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-text-primary">
                Follow Us
              </h2>
              <p className="mb-6 text-text-secondary">
                Stay updated with our latest offers and behind-the-scenes
                content.
              </p>
              <div className="flex flex-col gap-4">
                {/* Instagram */}
                <a
                  href={`https://instagram.com/${SITE_CONFIG.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-4 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Instagram</p>
                    <p className="text-sm text-text-secondary">
                      @{SITE_CONFIG.instagram}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="ml-auto text-text-muted"
                  />
                </a>

                {/* Facebook */}
                <a
                  href={`https://facebook.com/${SITE_CONFIG.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-brand-light-gray bg-[var(--color-medium-gray)] p-4 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Facebook</p>
                    <p className="text-sm text-text-secondary">
                      @{SITE_CONFIG.facebook}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="ml-auto text-text-muted"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
