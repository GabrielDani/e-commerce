import { HeaderNavLinks } from "../molecules/HeaderNavLinks";
import { HeaderLogo } from "../molecules/HeaderLogo";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="w-full bg-background-header shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <HeaderLogo />
        {pathname === "/" && <HeaderNavLinks />}
      </div>
    </header>
  );
};

export default Header;
