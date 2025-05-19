// components/organisms/CartSidebar.tsx
import { Button } from "@/components/atoms/Button";
import { RightSidebar } from "@/components/molecules/RightSidebar";
import { useCart } from "@/contexts/CartContext";
import { formatValueToPrice } from "@/utils/utils";
import { X, ShoppingCart, ArrowRight } from "lucide-react";
import { ProductSidebarCard } from "../molecules/ProductCard/ProductSidebarCard";
import { useNavigate } from "react-router-dom";

export const CartSidebar = () => {
  const { closeCart, products, totalProducts, totalPrice, clearCart } =
    useCart();

  const navigate = useNavigate();

  return (
    <RightSidebar>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <h3 className="font-semibold text-lg">
              Carrinho ({totalProducts})
            </h3>
          </div>
          <button
            onClick={closeCart}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lista de produtos */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-secondary">
              <ShoppingCart className="w-12 h-12 mb-4" />
              <p className="mb-4">Seu carrinho está vazio</p>
              <Button
                text="Continuar comprando"
                onClick={closeCart}
                variant={{ variant: "ghost", size: "lg" }}
              />
            </div>
          ) : (
            products.map((product) => <ProductSidebarCard {...product} />)
          )}
        </div>

        {/* Footer */}
        {products.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span className="text-money">
                {formatValueToPrice(totalPrice)}
              </span>
            </div>

            <div className="flex gap-2">
              <Button
                text="Limpar carrinho"
                onClick={clearCart}
                variant={{ variant: "ghost" }}
                disabled={products.length === 0}
              />

              <Button
                Icon={ArrowRight}
                iconPosition="right"
                variant={{ size: "md" }}
                text="Finalizar compra"
                onClick={() => navigate("/checkout")}
              />
            </div>
          </div>
        )}
      </div>
    </RightSidebar>
  );
};
