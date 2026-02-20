import { SITE_CONFIG } from "@/lib/constants/site";

interface QuoteDetails {
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
  isExpress: boolean;
  name: string;
  phone: string;
  address?: string;
}

export function generateWhatsAppQuoteURL(quote: QuoteDetails): string {
  const itemsList = quote.items
    .map((i) => `• ${i.name} x${i.quantity} = ₦${(i.price * i.quantity).toLocaleString()}`)
    .join("\n");

  const message = `Hi D'heighten! 👋

I'd like to place a laundry order:

*Items:*
${itemsList}

*Total:* ₦${quote.total.toLocaleString()}${quote.isExpress ? " (Express)" : ""}

*My Details:*
Name: ${quote.name}
Phone: ${quote.phone}
${quote.address ? `Address: ${quote.address}` : ""}

Please confirm availability. Thank you!`.trim();

  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppURL(message?: string): string {
  const defaultMessage =
    "Hi D'heighten! I'd like to inquire about your laundry services.";
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message || defaultMessage)}`;
}
