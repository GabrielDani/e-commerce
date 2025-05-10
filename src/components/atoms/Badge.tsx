import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Badge = ({ children, className, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        "flex items-center justify-center h-4 w-4 rounded-full text-accent text-xs font-medium",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
