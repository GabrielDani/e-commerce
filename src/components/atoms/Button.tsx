import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";
import { Spinner } from "./Spinner";

const buttonVariants = cva(
  "flex justify-center items-center gap-2 w-full text-primary transition-colors transition-300 hover:cursor-pointer",
  {
    variants: {
      variant: {
        ["add-cart"]:
          "bg-background-button-add-cart hover:bg-background-button-add-cart-hover",
        ["remove-cart"]:
          "bg-background-button-remove-cart hover:bg-background-button-remove-cart-hover",
        ghost: "border border-ghost",
      },
      size: {
        sm: "p-3 text-xs",
        md: "p-2 text-sm",
        lg: "p-6 text-base",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "add-cart",
      size: "md",
      rounded: "md",
    },
  }
);

interface ButtonProps {
  variant?: VariantProps<typeof buttonVariants>;
  Icon?: LucideIcon;
  iconPosition?: "left" | "right";
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  variant,
  Icon,
  iconPosition = "left",
  text,
  onClick,
  type = "button",
  ariaLabel = "botão",
  isLoading = false,
  disabled = false,
}: ButtonProps) => {
  const renderIcon = Icon && !isLoading && <Icon className="w-4 h-4" />;
  const spinner = isLoading && <Spinner />;

  return (
    <button
      className={cn(
        buttonVariants(variant),
        (disabled || isLoading) && "bg-transparent hover:bg-transparent"
      )}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      disabled={isLoading || disabled}
    >
      {iconPosition === "left" && (spinner || renderIcon)}
      {text}
      {iconPosition === "right" && renderIcon}
    </button>
  );
};

Button.displayName = "Button";
