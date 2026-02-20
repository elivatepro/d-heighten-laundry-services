import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage = "/images/facility.jpg",
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 lg:pt-44 lg:pb-28">
      {/* Background Image with blur */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover blur-sm scale-105"
          sizes="100vw"
          priority
        />
      </div>
      {/* Brand overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.82) 50%, rgba(0,180,216,0.20) 100%)",
        }}
      />

      {/* Content — hardcoded white text since this always sits on a dark overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h1 className="font-display text-hero-mobile font-bold tracking-tight text-white md:text-hero">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
