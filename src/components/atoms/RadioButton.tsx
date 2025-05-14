import {
  filterButtonVariants,
  type FilterButtonProps,
} from "@/lib/class-variants";
import { cn } from "@/lib/utils";

interface RadioButtonProps extends FilterButtonProps {
  id: string;
  name: string;
  label: string;
  value: string | null;
  checked: boolean;
  className?: string;
  onClick: (value: string | null) => void;
}

export const RadioButton = ({
  id,
  name,
  label,
  value,
  rounded,
  selected,
  checked,
  className,
  onClick,
}: RadioButtonProps) => {
  return (
    <>
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        className="hidden"
        onChange={() => onClick(value)}
        readOnly
      />
      <label
        htmlFor={id}
        className={cn(
          filterButtonVariants({ rounded, selected: selected || checked }),
          className
        )}
      >
        {label}
      </label>
    </>
  );
};
