import { cva, type VariantProps } from "class-variance-authority";

export type IconPositionNavLink = "left" | "right";

export const navLinkVariants = cva(
  "inline-flex items-center gap-1 transition-colors text-sm md:text-base data-[active=true]:font-bold",
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
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "default",
      iconPosition: "left",
    },
  }
);

export type NavLinkVariant = VariantProps<typeof navLinkVariants>;

export const logoVariants = cva("font-bold", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-2xl",
      lg: "text-3xl",
    },
    color: {
      default: "text-primary dark:text-primary-dark",
      inverse: "text-inverse dark:text-inverse-dark",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
});

export type LogoVariant = VariantProps<typeof logoVariants>;

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary hover:bg-primary/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90",
        secondary:
          "bg-secondary text-inverse hover:bg-secondary/90 dark:bg-secondary-dark dark:hover:bg-secondary-dark/90",
        ghost:
          "bg-transparent hover:bg-neutral/20 dark:hover:bg-neutral-dark/20",
        outline:
          "border border-border text-primary hover:bg-neutral/10 dark:text-primary-dark dark:border-border-dark",
        danger:
          "bg-accent text-inverse hover:bg-accent/80 dark:bg-accent-dark dark:hover:bg-accent-dark/80",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export type ButtonVariant = VariantProps<typeof buttonVariants>;
