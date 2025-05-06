import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/atoms/Logo";
import { NavLink } from "@/components/atoms/NavLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Logo />

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/products">Produtos</NavLink>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900">
          <Link
            to="/products"
            className="block text-gray-700 dark:text-gray-200"
          >
            Produtos
          </Link>
          <Link to="/about" className="block text-gray-700 dark:text-gray-200">
            Sobre
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 dark:text-gray-200"
          >
            Contato
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
