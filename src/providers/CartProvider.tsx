import { CartContext } from "@/contexts/CartContext";
import type { CartProduct } from "@/types/cart";
import { useState, useMemo } from "react";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<CartProduct[]>([]);

  const value = useMemo(
    () => ({
      isOpen,
      products,
      totalProducts: products.reduce(
        (sum, product) => sum + product.quantity,
        0
      ),
      totalPrice: products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      ),

      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((prev) => !prev),

      addProduct: (newProduct: Omit<CartProduct, "quantity">) => {
        setProducts((prev) => {
          const existingItem = prev.find(
            (product) => product.id === newProduct.id
          );
          if (existingItem) {
            return prev.map((product) =>
              product.id === newProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            );
          }
          return [...prev, { ...newProduct, quantity: 1 }];
        });
      },

      removeProduct: (id: number) => {
        setProducts((prev) => prev.filter((product) => product.id !== id));
      },

      updateProductQuantity: (id: number, quantity: number) => {
        setProducts((prev) =>
          prev.map((product) =>
            product.id === id ? { ...product, quantity } : product
          )
        );
      },

      clearCart: () => setProducts([]),

      getProduct: (id: number) => products.find((product) => product.id === id),
      isInCart: (id: number) => products.some((product) => product.id === id),
    }),
    [isOpen, products]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
