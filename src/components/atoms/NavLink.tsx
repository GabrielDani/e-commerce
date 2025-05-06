import { Link, useMatch } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  navLinkVariants,
  type IconPositionNavLink,
  type NavLinkVariant,
} from "@/lib/class-variants";
import type React from "react";
import type { LucideIcon } from "lucide-react";

type NavLinkProps = {
  to: string;
  variant?: NavLinkVariant["variant"];
  icon?: LucideIcon;
  iconPosition?: IconPositionNavLink;
  iconClassName?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const NavLink = ({
  to,
  variant,
  icon: Icon,
  iconPosition = "left",
  iconClassName = "w-4 h-4",
  children,
  className,
  onClick,
}: NavLinkProps) => {
  const match = useMatch(to);
  const isActive = match?.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(navLinkVariants({ variant, iconPosition, className }))}
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
    >
      {Icon && <Icon className={cn(iconClassName)} aria-hidden="true" />}
      {children}
    </Link>
  );
};
