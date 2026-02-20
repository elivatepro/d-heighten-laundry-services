import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look inside D'heighten Laundry. See our professional equipment, spotless facility, and the quality results we deliver every day.",
};

const galleryImages = [
  { src: "/images/facility.jpg", alt: "D'heighten Laundry facility" },
  { src: "/images/washing-machine.jpg", alt: "Professional washing machine" },
  { src: "/images/washing.jpg", alt: "Clothes being washed" },
  { src: "/images/stacked.jpeg", alt: "Neatly stacked laundry" },
  { src: "/images/folded-towels.jpg", alt: "Freshly folded towels" },
  { src: "/images/clean-laundry.jpeg", alt: "Clean laundry ready for pickup" },
  { src: "/images/folded-shirts.jpg", alt: "Perfectly folded shirts" },
  { src: "/images/textiles.jpg", alt: "Assorted textiles and fabrics" },
  { src: "/images/pickup.jpg", alt: "Laundry pickup and delivery" },
  { src: "/images/fresh-scent.jpeg", alt: "Fresh scented clean clothes" },
  { src: "/images/laundry-basket.jpg", alt: "Laundry basket with clothes" },
  { src: "/images/clothesline.jpg", alt: "Clothes drying on a line" },
  { src: "/images/supplies.jpg", alt: "Professional laundry supplies" },
];

export default function GalleryPage() {
  return (
    <div>
      {/* Hero Section */}
      <PageHeader
        title="See Where The Magic Happens"
        subtitle="Professional equipment. Spotless facility. Real results."
        backgroundImage="/images/washing-machine.jpg"
      />

      {/* Gallery Grid (Masonry with CSS Columns) */}
      <section className="px-4 py-20 max-w-7xl mx-auto lg:py-28">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <div className="relative overflow-hidden rounded-2xl group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
