import { logoVariants, type LogoVariant } from "@/lib/class-variants";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps {
  to: string;
  logoText: string;
  variant?: LogoVariant;
  className?: string;
  ariaLabel: string;
}

export const Logo = ({
  to,
  logoText,
  variant,
  className,
  ariaLabel,
}: LogoProps) => {
  return (
    <Link
      to={to}
      className={cn(logoVariants(variant), className)}
      aria-label={ariaLabel}
    >
      {logoText}
    </Link>
  );
};
