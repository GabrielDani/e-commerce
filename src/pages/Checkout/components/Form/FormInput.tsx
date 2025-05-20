import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";

const formInputVariants = cva(
  "px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hover-primary transition-colors",
  {
    variants: {
      variant: {
        default: "text-sm border-none bg-background-primary",
        error: "text-sm border-accent bg-accent",
        success: "text-sm border-green-500 bg-green-50",
      },
      size: {
        full: "w-full",
        ["fixed-24"]: "w-24",
        ["fixed-32"]: "w-32",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "full",
    },
  }
);

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  variants?: VariantProps<typeof formInputVariants>;
  error?: string;
}

export const FormInput = ({
  id,
  label,
  variants = {},
  error,
  ...props
}: FormInputProps) => {
  return (
    <div className={cn("space-y-2")}>
      {label && (
        <label
          htmlFor={id}
          className={cn("block text-sm font-medium text-primary")}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(formInputVariants(variants), error && "border-accent")}
        {...props}
      />
      {error && <p className="text-sm text-accent mt-1">{error}</p>}
    </div>
  );
};

FormInput.displayName = "FormInput";
