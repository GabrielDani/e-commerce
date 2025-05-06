import { NavLink } from "@/components/atoms/NavLink";
import { navItems } from "../../constants/navItems";

export const HeaderNavLinks = () => (
  <nav className="hidden md:flex gap-4 items-center">
    {navItems.map((item) => (
      <NavLink key={item.to} to={item.to}>
        {item.label}
      </NavLink>
    ))}
  </nav>
);
