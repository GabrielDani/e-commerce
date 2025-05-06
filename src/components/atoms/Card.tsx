import { cardVariants } from "@/lib/class-variants";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: ReactNode;
}

export const Card = ({ className, variant, size, ...props }: CardProps) => {
  return (
    <div
      className={cn(cardVariants({ variant, size }), className)}
      {...props}
    />
  );
};
