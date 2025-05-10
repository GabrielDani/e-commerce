import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/atoms/Button";
import { History, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { NavLink } from "../atoms/NavLink";

export const HeaderNavLinks = () => {
  const { toggleCart, totalProducts } = useCart();

  return (
    <nav className="flex gap-4 items-center">
      {/* Ícone do carrinho */}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCart}
          aria-label="Abrir carrinho"
        >
          <ShoppingBag className="h-4 w-4" />
          {totalProducts > 0 && (
            <Badge className="absolute -top-2 -right-2">{totalProducts}</Badge>
          )}
        </Button>
      </div>

      <NavLink to="/checkout" icon={History} />
    </nav>
  );
};
