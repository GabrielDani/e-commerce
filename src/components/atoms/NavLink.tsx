import { Slot } from "@radix-ui/react-slot";
import { Link, useMatch } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.HTMLAttributes<HTMLElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  isActiveClassName?: string;
  asChild?: boolean;
}

export const NavLink = ({
  to,
  children,
  className = "text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors",
  isActiveClassName = "font-semibold text-blue-600",
  asChild = false,
  ...props
}: NavLinkProps) => {
  const isActive = useMatch(to);
  const Comp = asChild ? Slot : Link;

  return (
    <Comp
      to={to}
      className={cn(className, isActive && isActiveClassName)}
      aria-current={isActive ? "page" : undefined}
      {...props}
    >
      {children}
    </Comp>
  );
};
