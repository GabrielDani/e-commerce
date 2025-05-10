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
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-background-button text-primary hover:bg-hover-background-button dark:bg-background-button-dark dark:hover:bg-hover-background-button-dark",
        secondary:
          "bg-background-secondary text-inverse hover:bg-secondary/90 dark:bg-secondary-dark dark:hover:bg-secondary-dark/90",
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
        icon: "p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export type ButtonVariant = VariantProps<typeof buttonVariants>;

export const cardVariants = cva(
  "rounded-lg shadow-xl border-2 transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-surface dark:bg-surface-dark shadow-neutral dark:shadow-neutral-dark border-border dark:border-border-dark",
        subtle: "bg-background text-primary border-border",
      },
      size: {
        sm: "w-48 p-2",
        md: "w-64 p-4",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export type CardVariant = VariantProps<typeof cardVariants>;

export const filterButtonVariants = cva(
  "bg-background-button hover:bg-hover-background-button cursor-pointer py-1 px-4 transition-colors",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        left: "rounded-l-lg",
        right: "rounded-r-lg",
        both: "rounded-lg",
        all: "rounded-lg",
      },
      selected: {
        true: "bg-selected-radio text-white hover:bg-selected-radio-dark",
        false: "",
      },
    },
    defaultVariants: {
      rounded: "all",
      selected: false,
    },
  }
);

export type FilterButtonProps = VariantProps<typeof filterButtonVariants>;
