import { Button } from "@/components/atoms/Button";
import { ShoppingCart, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/types/product";

export const ProductActions = (product: Product) => {
  const { addProduct, removeProduct, isInCart } = useCart();
  const isProductInCart = isInCart(product.id);

  return isProductInCart ? (
    <Button
      variant={{ variant: "remove-cart" }}
      text="Remover"
      Icon={X}
      onClick={() => removeProduct(product.id)}
      ariaLabel={`Remover ${product.name} do carrinho`}
    />
  ) : (
    <Button
      text="Adicionar"
      Icon={ShoppingCart}
      onClick={() => addProduct(product)}
      aria-label={`Adicionar ${product.name} ao carrinho`}
    />
  );
};
