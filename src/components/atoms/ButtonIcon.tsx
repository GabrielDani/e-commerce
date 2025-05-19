import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";

const buttonIconVariants = cva(
  "flex items-center justify-center relative transition-colors transition-300",
  {
    variants: {
      variant: {
        navlink:
          "text-navlink-button hover:text-navlink-button-hover hover:cursor-pointer",
        cart: "text-primary",
      },
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
      },
    },
    defaultVariants: {
      variant: "navlink",
      size: "md",
    },
  }
);

interface ButtonProps {
  variants?: VariantProps<typeof buttonIconVariants>;
  Icon: LucideIcon;
  onClick: () => void;
  ariaLabel?: string;
  showBadge?: boolean;
  countBadge?: number;
  disabled?: boolean;
}

export const ButtonIcon = ({
  variants = {},
  Icon,
  onClick,
  ariaLabel = "botão de navegação",
  showBadge = false,
  countBadge = 0,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonIconVariants(variants))}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <Icon />
      {showBadge && (
        <span
          className={cn(
            "absolute -top-4",
            countBadge > 9 ? "-right-4" : "-right-2",
            countBadge > 99 && "-right-5"
          )}
        >
          {countBadge}
        </span>
      )}
    </button>
  );
};

ButtonIcon.displayName = "ButtonIcon";
