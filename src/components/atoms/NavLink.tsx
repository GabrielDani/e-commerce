import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const navLinkVariants = cva("transition-colors duration-200", {
  variants: {
    variant: {
      default: "text-navlink-button hover:text-navlink-button-hover",
    },
    size: {
      sm: "w-4 h-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});

type NavLinkProps = {
  to: string;
  ariaLabel: string;
  variant?: VariantProps<typeof navLinkVariants>;
  icon: LucideIcon;
  iconClassName?: string;
  onClick?: () => void;
};

export const NavLink = ({
  to,
  ariaLabel,
  variant,
  icon: Icon,
  onClick,
}: NavLinkProps) => {
  return (
    <Link to={to} onClick={onClick} aria-label={ariaLabel}>
      <Icon className={cn(navLinkVariants(variant))} />
    </Link>
  );
};
