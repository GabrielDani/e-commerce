import { HeaderMobileMenu } from "../molecules/HeaderMobileMenu";
import { HeaderNavLinks } from "../molecules/HeaderNavLinks";
import { HeaderLogo } from "../molecules/HeaderLogo";

const Header = () => {
  return (
    <header className="w-full bg-background-primary dark:bg-background-primary-dark shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <HeaderLogo />
        <HeaderNavLinks />
        <HeaderMobileMenu />
      </div>
    </header>
  );
};

export default Header;
