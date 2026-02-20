"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils/cn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  const { ref, isVisible } = useIntersection();

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 opacity-0",
        centered && "text-center",
        isVisible && "animate-fade-in-up"
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-[2.25rem]">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base leading-relaxed text-text-secondary md:text-lg", centered && "mx-auto max-w-2xl")}>{subtitle}</p>
      )}
    </div>
  );
}
