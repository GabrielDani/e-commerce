import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const filterButtonVariants = cva(
  "bg-background-button-filter hover:bg-background-button-filter-hover cursor-pointer py-1 px-4 transition-colors",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        left: "rounded-l-lg",
        right: "rounded-r-lg",
      },
      selected: {
        true: "bg-background-button-filter-selected text-white",
        false: "",
      },
    },
    defaultVariants: {
      rounded: "none",
      selected: false,
    },
  }
);

interface RadioButtonProps {
  variants: VariantProps<typeof filterButtonVariants>;
  id: string;
  name: string;
  label: string;
  value: string | null;
  className?: string;
  onClick: (value: string | null) => void;
}

export const RadioButton = ({
  id,
  name,
  label,
  value,
  variants,
  className,
  onClick,
}: RadioButtonProps) => {
  return (
    <>
      <input
        id={id}
        type="radio"
        name={name}
        className="hidden"
        onChange={() => onClick(value)}
        readOnly
      />
      <label
        htmlFor={id}
        className={cn(filterButtonVariants(variants), className)}
      >
        {label}
      </label>
    </>
  );
};
