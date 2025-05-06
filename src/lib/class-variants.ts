import { cva, type VariantProps } from "class-variance-authority";

export const navLinkVariants = cva(
  "transition-colors text-sm md:text-base data-[active=true]:font-bold",
  {
    variants: {
      variant: {
        default: [
          "text-primary dark:text-primary-dark",
          "hover:text-hover-primary dark:hover:text-hover-primary-dark",
        ],
        ghost: [
          "text-ghost dark:text-ghost-dark",
          "hover:text-hover-ghost dark:hover:text-hover-ghost-dark",
        ],
        underline: [
          "text-primary dark:text-primary-dark",
          "hover:underline hover:text-hover-primary dark:hover:text-hover-primary-dark",
        ],
        accent: [
          "text-accent dark:text-accent-dark",
          "hover:underline hover:text-hover-accent dark:hover:text-hover-accent-dark",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type NavLinkVariant = VariantProps<typeof navLinkVariants>["variant"];

export const logoVariants = cva("font-bold", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-2xl",
      lg: "text-3xl",
    },
    color: {
      default: "text-text-primary dark:text-text-primary-dark",
      inverse: "text-inverse dark:text-inverse-dark",
      primary: "text-primary dark:text-primary-dark",
    },
  },
  defaultVariants: {
    size: "md",
    color: "inverse",
  },
});

export type LogoVariant = VariantProps<typeof logoVariants>;
