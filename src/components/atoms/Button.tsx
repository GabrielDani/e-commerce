import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonVariant } from "@/lib/class-variants";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariant {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      iconPosition = "left",
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    const renderIcon = icon && !isLoading && (
      <span className={cn(iconPosition === "left" ? "mr-2" : "ml-2")}>
        {icon}
      </span>
    );

    const spinner = isLoading && (
      <svg
        className="animate-spin h-4 w-4 mr-2 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {iconPosition === "left" && (spinner || renderIcon)}
        {children}
        {iconPosition === "right" && renderIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
