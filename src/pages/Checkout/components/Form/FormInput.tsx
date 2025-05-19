import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

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

interface FormInputProps {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "password" | "email";
  required?: boolean;
  variants?: VariantProps<typeof formInputVariants>;
  wrapperClassName?: string;
  labelClassName?: string;
  error?: string;
}

export const FormInput = ({
  id,
  label,
  placeholder,
  type,
  required = false,
  variants = {},
  wrapperClassName,
  labelClassName,
  error,
}: FormInputProps) => {
  return (
    <div className={cn("space-y-2", wrapperClassName)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "block text-sm font-medium text-primary",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={cn(
          formInputVariants({
            variant: variants.variant,
            size: variants.size,
          }),
          error && "border-accent"
        )}
      />
      {error && <p className="text-sm text-accent mt-1">{error}</p>}
    </div>
  );
};

FormInput.displayName = "FormInput";
