import { Logo } from "../atoms/Logo";

export const HeaderLogo = () => (
  <Logo
    to="/"
    logoText={
      <>
        <span className="block md:hidden">E-commerce | GD</span>
        <span className="hidden md:block">E-commerce | Gabriel Dani</span>
      </>
    }
    ariaLabel="Home"
  />
);
