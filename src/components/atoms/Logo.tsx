import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  link?: string;
  logoText?: string;
  logoColor?: string;
  ariaLabel?: string;
}

export const Logo = ({
  className = "text-2xl font-bold",
  link = "/",
  logoText = "Gabriel Dani",
  logoColor = "text-blue-600 dark:text-blue-400",
  ariaLabel = "Home",
}: LogoProps) => {
  return (
    <Link to={link} className={cn(logoColor, className)} aria-label={ariaLabel}>
      {logoText}
    </Link>
  );
};
