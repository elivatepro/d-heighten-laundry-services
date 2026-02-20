"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Award, Shirt } from "lucide-react";
import { getYearsOperating } from "@/lib/constants/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stats = [
  {
    icon: Award,
    value: `${getYearsOperating()}+`,
    label: "Years Serving Ilorin",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Customers",
  },
  {
    icon: Shirt,
    value: "100K+",
    label: "Clothes Cleaned",
  },
  {
    icon: Clock,
    value: "24-48hr",
    label: "Turnaround",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/front-load-washing-machine.jpg"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover scale-105"
          sizes="100vw"
        />
      </div>

      {/* Layered Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.80) 50%, rgba(0,180,216,0.30) 100%)",
        }}
      />
      {/* Bottom gradient for stat cards area */}
      <div
        className="absolute inset-x-0 bottom-0 h-72"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.95), transparent)",
        }}
      />

      {/* Decorative accent glow */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(0,180,216,0.6), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,215,0,0.5), transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-6 pt-24 sm:pb-8 sm:pt-32 lg:px-8 lg:pt-40">
        {/* Main content area */}
        <div className="max-w-3xl lg:max-w-2xl">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,180,216,0.3)] bg-[rgba(0,180,216,0.1)] px-4 py-1.5 text-xs font-medium tracking-wide text-[#00B4D8] backdrop-blur-sm md:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00B4D8] animate-pulse" />
              Ilorin&apos;s Trusted Laundry Service
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl lg:text-hero"
          >
            Your Wardrobe,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FFD700, #FFC107)",
              }}
            >
              Our Priority.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-3 max-w-xl text-sm leading-relaxed text-[#A0A0A0] sm:mt-6 sm:text-base md:text-lg"
          >
            Professional laundry care that gives you back your time. We pick up,
            clean, and deliver &mdash; so you can focus on what actually matters.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >
            <Link
              href="#pricing-calculator"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-all hover:bg-brand-yellow-hover hover:scale-105 sm:px-8 sm:py-4 md:text-base"
            >
              Get Your Free Quote
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[rgba(0,180,216,0.5)] bg-[rgba(0,180,216,0.08)] px-6 py-3 text-sm font-semibold text-[#00B4D8] backdrop-blur-sm transition-all hover:border-[#00B4D8] hover:bg-[rgba(0,180,216,0.15)] hover:scale-105 sm:px-8 sm:py-4 md:text-base"
            >
              See Our Pricing
            </Link>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 grid grid-cols-2 gap-2 sm:mt-16 sm:grid-cols-4 sm:gap-4 lg:mt-20 lg:max-w-4xl"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-3 backdrop-blur-md transition-all duration-300 hover:border-[rgba(255,215,0,0.25)] hover:bg-[rgba(255,255,255,0.07)] sm:p-6"
              >
                <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(255,215,0,0.1)] sm:mb-3 sm:h-10 sm:w-10 sm:rounded-xl">
                  <Icon size={16} className="text-brand-yellow" />
                </div>
                <p className="text-lg font-bold text-white sm:text-2xl md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-[#A0A0A0] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
