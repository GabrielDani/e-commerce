import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

const cardVariants = cva("shadow-xl border transition-colors", {
  variants: {
    variant: {
      default:
        "group transition-all bg-background-card shadow-primary border-border-card hover:-translate-y-1",
    },
    size: {
      sm: "w-48 p-2",
      md: "w-64 p-4",
      full: "w-full",
      container: "w-full h-160",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
    rounded: "lg",
  },
});

export interface CardProps {
  variants?: VariantProps<typeof cardVariants>;
  className?: string;
  children: ReactNode;
}

export const Card = ({ variants, className, children }: CardProps) => {
  return (
    <div className={cn(cardVariants(variants), className)}>{children}</div>
  );
};
