import {
  Home,
  Sparkles,
  Tag,
  Users,
  Phone,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Sparkles },
  { label: "Pricing", href: "/pricing", icon: Tag },
  { label: "About", href: "/about", icon: Users },
  { label: "Contact", href: "/contact", icon: Phone },
];
