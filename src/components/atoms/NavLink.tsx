import { Link, useMatch } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navLinkVariants, type NavLinkVariant } from "@/lib/class-variants";
import type React from "react";

type NavLinkProps = {
  to: string;
  variant?: NavLinkVariant;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const NavLink = ({
  to,
  variant,
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
      className={cn(navLinkVariants({ variant }), className)}
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};
