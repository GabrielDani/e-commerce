import {
  filterButtonVariants,
  type FilterButtonProps,
} from "@/lib/class-variants";
import { cn } from "@/lib/utils";

interface RadioButtonProps extends FilterButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const RadioButton = ({
  id,
  name,
  value,
  label,
  rounded,
  selected,
  checked,
  onChange,
  className,
}: RadioButtonProps) => {
  return (
    <>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
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
