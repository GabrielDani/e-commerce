import { useCart } from "@/contexts/CartContext";
import { History, ShoppingBag } from "lucide-react";
import { NavLink } from "../atoms/NavLink";
import { ButtonIcon } from "../atoms/ButtonIcon";

export const HeaderNavLinks = () => {
  const { toggleCart, totalProducts } = useCart();

  return (
    <nav
      className={`flex ${totalProducts > 9 ? "gap-6" : "gap-4"} items-center`}
    >
      {/* Ícone do carrinho */}
      <div className="relative">
        <ButtonIcon
          Icon={ShoppingBag}
          onClick={toggleCart}
          aria-label="Abrir carrinho"
          showBadge={totalProducts > 0}
          countBadge={totalProducts}
        />
      </div>

      <NavLink to="/checkout" ariaLabel="checkout" icon={History} />
    </nav>
  );
};
