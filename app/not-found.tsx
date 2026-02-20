import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <p className="text-8xl md:text-9xl font-display font-bold text-brand-yellow mb-4">
          404
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
          Oops! Page Not Found
        </h1>

        {/* Subtitle */}
        <p className="text-text-secondary text-lg mb-8">
          Looks like this page got lost in the wash.
        </p>

        {/* Go Back Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          Go Back Home &rarr;
        </Link>
      </div>
    </div>
  );
}
