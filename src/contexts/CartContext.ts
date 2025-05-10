import type { CartProduct } from "@/types/cart";
import { createContext, useContext } from "react";

interface CartContextType {
  // Estado do carrinho
  isOpen: boolean;
  products: CartProduct[];
  totalProducts: number;
  totalPrice: number;

  // Controle de abertura/fechamento
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  // Manipulação de itens
  addProduct: (product: Omit<CartProduct, "quantity">) => void;
  removeProduct: (id: number) => void;
  updateProductQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;

  // Utilidades
  getProduct: (id: number) => CartProduct | undefined;
  isInCart: (id: number) => boolean;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
