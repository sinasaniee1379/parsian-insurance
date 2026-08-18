import type { ComponentType } from "react";
import {
  Activity,
  Anchor,
  ArrowLeft,
  BriefcaseBusiness,
  CarFront,
  Check,
  Clock3,
  Fuel,
  HeartPulse,
  House,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  BadgePercent,
  Calculator,
  WalletCards,
  type LucideProps,
} from "lucide-react";

export type IconName =
  | "car"
  | "shield"
  | "heart"
  | "home"
  | "briefcase"
  | "plane"
  | "spark"
  | "box"
  | "activity"
  | "wrench"
  | "fuel"
  | "anchor"
  | "arrow"
  | "phone"
  | "check"
  | "menu"
  | "close"
  | "clock"
  | "pin"
  | "mail"
  | "send"
  | "calculator"
  | "wallet"
  | "percent";

interface IconProps extends LucideProps {
  name: IconName;
}

const icons = {
  car: CarFront,
  shield: ShieldCheck,
  heart: HeartPulse,
  home: House,
  briefcase: BriefcaseBusiness,
  plane: Plane,
  spark: Sparkles,
  box: Package,
  activity: Activity,
  wrench: Wrench,
  fuel: Fuel,
  anchor: Anchor,
  arrow: ArrowLeft,
  phone: Phone,
  check: Check,
  menu: Menu,
  close: X,
  clock: Clock3,
  pin: MapPin,
  mail: Mail,
  send: Send,
  calculator: Calculator,
  wallet: WalletCards,
  percent: BadgePercent,
} satisfies Record<IconName, ComponentType<LucideProps>>;

export function Icon({ name, strokeWidth = 1.8, ...props }: IconProps) {
  const LucideIcon = icons[name];

  return <LucideIcon aria-hidden="true" strokeWidth={strokeWidth} {...props} />;
}
