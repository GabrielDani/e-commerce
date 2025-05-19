import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const logoVariants = cva("font-bold", {
  variants: {
    variant: {
      default: "text-primary",
    },
    size: {
      sm: "text-lg",
      md: "text-2xl",
      lg: "text-3xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface LogoProps {
  to: string;
  ariaLabel: string;
  logoText: React.ReactNode;
  variant?: VariantProps<typeof logoVariants>;
}

export const Logo = ({ to, logoText, variant, ariaLabel }: LogoProps) => {
  return (
    <Link to={to} className={cn(logoVariants(variant))} aria-label={ariaLabel}>
      {logoText}
    </Link>
  );
};
