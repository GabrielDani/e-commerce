import { Button } from "@/components/atoms/Button";
import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/types/product";

export const ProductActions = (product: Product) => {
  const { addProduct, isInCart } = useCart();
  const isProductInCart = isInCart(product.id);

  return (
    <div className="pt-0">
      <Button
        className="w-full"
        onClick={() => addProduct(product)}
        aria-label={
          isProductInCart
            ? `${product.name} já está no carrinho`
            : `Adicionar ${product.name} ao carrinho`
        }
        disabled={isProductInCart}
      >
        <div className="flex items-center justify-center gap-2 w-full">
          {isProductInCart ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <ShoppingCart className="w-4 h-4" />
          )}
          <span className="flex-1 text-center">
            {isProductInCart ? "Adicionado" : "Adicionar ao carrinho"}
          </span>
        </div>
      </Button>
    </div>
  );
};
