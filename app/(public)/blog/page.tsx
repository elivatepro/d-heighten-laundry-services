import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Laundry Tips & News",
  description:
    "Stay up to date with the latest laundry tips, tricks, and news from D'heighten Laundry. Learn how to care for your clothes like a pro.",
};

const blogPosts = [
  {
    title: "5 Laundry Mistakes You're Probably Making (And How to Fix Them)",
    excerpt:
      "From overloading your machine to using too much detergent, these common mistakes could be damaging your clothes. Here's what to do instead.",
    image: "/images/washing.jpg",
    date: "Feb 15, 2026",
    slug: "#",
  },
  {
    title: "How to Keep Your White Clothes Actually White",
    excerpt:
      "Tired of dingy whites? Discover professional-grade tips for maintaining bright, crisp white garments wash after wash.",
    image: "/images/folded-shirts.jpg",
    date: "Feb 10, 2026",
    slug: "#",
  },
  {
    title: "Laundry vs. Dry Cleaning: What Goes Where?",
    excerpt:
      "Not sure which clothes need dry cleaning and which can be machine washed? Our guide breaks down everything you need to know.",
    image: "/images/textiles.jpg",
    date: "Feb 5, 2026",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHeader
        title="The D'heighten Blog"
        subtitle="Tips, tricks, and insights to keep your wardrobe looking its best."
        backgroundImage="/images/textiles.jpg"
      />

      {/* Blog Posts Grid */}
      <section className="px-4 py-20 max-w-7xl mx-auto lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.slug}
              className="group bg-[var(--color-medium-gray)] rounded-2xl overflow-hidden border border-brand-light-gray transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Post Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{post.date}</time>
                </div>

                {/* Title */}
                <h2 className="text-lg font-display font-semibold text-text-primary mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-2 text-brand-yellow text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
