import {
  ArrowLeftRight, BadgeCheck, Boxes, Briefcase, Building2, ChartColumn, CircleCheck, ClipboardList, Cloud, Code, Cog, Compass,
  Contact, Cpu, CreditCard, Database, DatabaseZap, Factory, FolderKanban, Funnel, GitBranch, Globe, GraduationCap, Handshake,
  HeartPulse, History, Hourglass, Landmark, Layers, LayoutDashboard, LifeBuoy, LogIn, type LucideIcon, MessageSquare,
  MessagesSquare, MonitorSmartphone, Package, PackagePlus, PenTool, Pill, Plug, Receipt, RefreshCw, Rocket, ScanBarcode, Search,
  Server, ShieldCheck, ShoppingBag, ShoppingCart, Sheet, SlidersHorizontal, Smartphone, Store, TabletSmartphone, Target,
  TrendingUp, Truck, Unplug, UserPlus, UserSearch, Users, Wallet, Warehouse, Workflow, Wrench,
} from "lucide-react";

/**
 * Icon lookup by content title, so content files stay plain data.
 * Unknown titles return undefined and components fall back to the brand arrow.
 */
const map: Record<string, LucideIcon> = {
  // Problems
  "Hiring is slowing delivery": Hourglass,
  "Specific skills, for a specific period": Target,
  "Agency capacity peaks": TrendingUp,
  "Overhead of a full in-house team": Wallet,
  "Spreadsheets have become the system": Sheet,
  "Tools don't talk to each other": Unplug,
  "An idea needs a first version": Rocket,
  "A legacy system is holding you back": History,
  // Roles
  "Frontend developers": MonitorSmartphone,
  "Backend developers": Server,
  "Full-stack developers": Layers,
  "Mobile app developers": Smartphone,
  "UI/UX designers": PenTool,
  "QA engineers": BadgeCheck,
  // Engagement models
  "Individual specialists": UserPlus,
  "Dedicated teams": Users,
  "Project-based support": FolderKanban,
  "White-label partnership": Handshake,
  "Staff augmentation": Users,
  "Project delivery": FolderKanban,
  "Ongoing development": RefreshCw,
  // Custom software
  "Web applications": Globe,
  "Custom business software": Briefcase,
  "SaaS product development": Cloud,
  "APIs & integrations": Plug,
  "Workflow automation": Workflow,
  "MVP & product engineering": Rocket,
  Modernisation: RefreshCw,
  "Maintenance & ongoing development": Wrench,
  "Custom software development": Code,
  // Mobile
  "iOS development": Smartphone,
  "Android development": TabletSmartphone,
  "Cross-platform apps": Layers,
  "UI/UX & prototyping": PenTool,
  "Backend & APIs": Server,
  "MVP development": Rocket,
  "Testing & app store launch": BadgeCheck,
  "Maintenance & improvements": Wrench,
  "Mobile app development": Smartphone,
  // CRM
  "CRM strategy": Compass,
  "Lead & pipeline management": Funnel,
  "Customer records": Contact,
  "Communication workflows": MessagesSquare,
  "Process automation": Workflow,
  "Reporting & visibility": ChartColumn,
  Integrations: Plug,
  "Data migration": DatabaseZap,
  "CRM development": Contact,
  // ERP
  "Business process management": GitBranch,
  "Operational workflows": Cog,
  "Sales & purchasing": ShoppingCart,
  "Departmental workflows": Building2,
  "Business data management": Database,
  "Custom modules & integrations": Plug,
  "Centralised business systems": LayoutDashboard,
  "ERP development": Building2,
  // Process
  Discover: Search,
  Plan: ClipboardList,
  Design: PenTool,
  Develop: Code,
  "Test & launch": Rocket,
  "Maintain & scale": TrendingUp,
  "Understand the need": MessageSquare,
  "Match the profiles": UserSearch,
  "Onboard into your workflow": LogIn,
  "Deliver and review": CircleCheck,
  // Inventory
  "Product & stock management": Package,
  "Inventory tracking": ScanBarcode,
  "Purchase records": Truck,
  "Sales records": Receipt,
  "Stock movement visibility": ArrowLeftRight,
  "Inventory reporting": ChartColumn,
  "Cloud-based access": Cloud,
  "Subscription access": CreditCard,
  "Set up your catalogue": PackagePlus,
  "Record purchases": Truck,
  "Record sales": Receipt,
  "Review and reorder": RefreshCw,
  Retail: Store,
  Wholesale: Boxes,
  Distributors: Truck,
  Warehouses: Warehouse,
  Manufacturing: Factory,
  Ecommerce: ShoppingBag,
  Pharmacies: Pill,
  "Other product businesses": Package,
  "Inventory management": Package,
  // Industries
  "Retail & ecommerce": ShoppingBag,
  "Logistics & distribution": Truck,
  Healthcare: HeartPulse,
  "Finance & fintech": Landmark,
  Education: GraduationCap,
  "Other business sectors": Building2,
  // Reasons & principles
  "Flexible engagement models": SlidersHorizontal,
  "The right technical expertise": Cpu,
  "Collaborative delivery": Users,
  "Scalable engineering support": TrendingUp,
  "Long-term product support": LifeBuoy,
  "Useful over impressive": Target,
  "Clear communication": MessagesSquare,
  "Ownership and care": ShieldCheck,
  "Long-term partnership": Handshake,
  // Insights
  "Product development": Rocket,
  "Mobile apps": Smartphone,
  "Business systems": LayoutDashboard,
};

export const iconFor = (title: string): LucideIcon | undefined => map[title];

type Props = { title: string; dark?: boolean; size?: "sm" | "md" | "lg"; className?: string };

/** Icon in a soft brand tile. Animates on parent `.group` hover. */
export function IconTile({ title, dark, size = "md", className = "" }: Props) {
  const Icon = map[title];
  if (!Icon) return null;
  const box = size === "lg" ? "size-14 rounded-2xl" : size === "sm" ? "size-9 rounded-lg" : "size-11 rounded-xl";
  const ico = size === "lg" ? "size-6" : size === "sm" ? "size-4" : "size-5";
  return (
    <span
      aria-hidden
      className={`icon-tile relative inline-grid shrink-0 place-items-center ${box} ${
        dark ? "bg-mint-400/10 text-mint-400 ring-1 ring-mint-400/25" : "bg-forest-900 text-mint-400"
      } ${className}`}
    >
      <Icon className={`${ico} transition-transform duration-500`} strokeWidth={1.75} />
    </span>
  );
}
