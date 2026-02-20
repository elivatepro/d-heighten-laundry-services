import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhlaundryservices.com"),
  title: {
    default: "D'heighten Laundry | Professional Laundry Services in Ilorin",
    template: "%s | D'heighten Laundry",
  },
  description:
    "Professional laundry and dry cleaning services in Ilorin, Kwara State. Quality service, affordable pricing, free pickup & delivery.",
  keywords: [
    "laundry", "dry cleaning", "Ilorin", "Kwara", "Nigeria",
    "wash and fold", "pickup delivery",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dhlaundryservices.com",
    siteName: "D'heighten Laundry",
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: "D'heighten Laundry" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
