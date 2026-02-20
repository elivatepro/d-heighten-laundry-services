export interface PricingItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export interface CalculatorResult {
  items: PricingItem[];
  subtotal: number;
  expressMarkup?: number;
  total: number;
  formattedTotal: string;
}

export function calculateLaundryPrice(
  items: PricingItem[],
  isExpress: boolean = false,
  expressMarkupPercentage: number = 50
): CalculatorResult {
  const activeItems = items.filter((i) => i.quantity > 0);
  const subtotal = activeItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const expressMarkup = isExpress
    ? subtotal * (expressMarkupPercentage / 100)
    : 0;
  const total = subtotal + expressMarkup;

  return {
    items: activeItems,
    subtotal,
    expressMarkup: isExpress ? expressMarkup : undefined,
    total,
    formattedTotal: formatNaira(total),
  };
}

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export const PRICING_ITEMS: PricingItem[] = [
  { id: "coloured-top", name: "Coloured Top", price: 300, quantity: 0, category: "Tops" },
  { id: "white-top", name: "White Top", price: 400, quantity: 0, category: "Tops" },
  { id: "coloured-shirt", name: "Coloured Shirt", price: 400, quantity: 0, category: "Tops" },
  { id: "white-shirt", name: "White Shirt", price: 500, quantity: 0, category: "Tops" },
  { id: "sweat-shirt", name: "Sweat Shirt", price: 400, quantity: 0, category: "Tops" },
  { id: "denim-trouser", name: "Denim/Jean Trouser", price: 500, quantity: 0, category: "Bottoms" },
  { id: "joggers", name: "Joggers", price: 400, quantity: 0, category: "Bottoms" },
  { id: "kaftan-coloured", name: "Kaftan (Coloured)", price: 800, quantity: 0, category: "Special" },
  { id: "kaftan-white", name: "Kaftan (White)", price: 1000, quantity: 0, category: "Special" },
  { id: "gown", name: "Gown", price: 500, quantity: 0, category: "Special" },
  { id: "garment", name: "Garment", price: 1500, quantity: 0, category: "Special" },
  { id: "wedding-gown", name: "Wedding Gown", price: 5000, quantity: 0, category: "Special" },
  { id: "bedspread", name: "Bedspread Only", price: 500, quantity: 0, category: "Bedding" },
  { id: "bedspread-pillow", name: "Bedspread & Pillow Cases", price: 700, quantity: 0, category: "Bedding" },
  { id: "duvet", name: "Duvet Only", price: 1000, quantity: 0, category: "Bedding" },
  { id: "duvet-family", name: "Duvet Only (Family Size)", price: 1500, quantity: 0, category: "Bedding" },
  { id: "complete-duvet", name: "Complete Duvet", price: 1500, quantity: 0, category: "Bedding" },
  { id: "complete-duvet-family", name: "Complete Duvet (Family Size)", price: 3000, quantity: 0, category: "Bedding" },
  { id: "socks", name: "Socks (Pair)", price: 300, quantity: 0, category: "Accessories" },
  { id: "towel-small", name: "Towel (Small)", price: 300, quantity: 0, category: "Accessories" },
  { id: "towel-large", name: "Towel (Large)", price: 400, quantity: 0, category: "Accessories" },
];
