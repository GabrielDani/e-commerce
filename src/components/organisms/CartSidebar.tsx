// components/organisms/CartSidebar.tsx
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { RightSidebar } from "@/components/molecules/RightSidebar";
import { useCart } from "@/contexts/CartContext";
import { formatValueToPrice } from "@/utils/utils";
import { X, ShoppingCart, ArrowRight } from "lucide-react";
import { Image } from "@/components/atoms/Image";

export const CartSidebar = () => {
  const {
    closeCart,
    products,
    totalProducts,
    totalPrice,
    removeProduct,
    updateProductQuantity,
    clearCart,
  } = useCart();

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
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <ShoppingCart className="w-12 h-12 mb-4" />
              <p>Seu carrinho está vazio</p>
              <Button onClick={closeCart} variant="outline" className="mt-4">
                Continuar comprando
              </Button>
            </div>
          ) : (
            products.map((product) => (
              <Card
                key={`${product.id}-${product.name}-`}
                size="full"
                className="p-3"
              >
                <div className="flex gap-4">
                  <div className="relative w-20 h-full flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="object-cover rounded over"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium line-clamp-2">
                        {product.name}
                      </h4>
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="text-gray-500 hover:text-red-500"
                        aria-label="Remover item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-500">{product.brand}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded">
                        <button
                          onClick={() =>
                            updateProductQuantity(
                              product.id,
                              product.quantity - 1
                            )
                          }
                          disabled={product.quantity <= 1}
                          className="px-2 py-1 disabled:opacity-50"
                          aria-label="Diminuir quantidade"
                        >
                          -
                        </button>
                        <span className="px-2">{product.quantity}</span>
                        <button
                          onClick={() =>
                            updateProductQuantity(
                              product.id,
                              product.quantity + 1
                            )
                          }
                          className="px-2 py-1"
                          aria-label="Aumentar quantidade"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-semibold">
                        {formatValueToPrice(product.price * product.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Footer */}
        {products.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>{formatValueToPrice(totalPrice)}</span>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={clearCart}
                variant="outline"
                className="flex-1"
                disabled={products.length === 0}
              >
                Limpar carrinho
              </Button>

              <Button className="flex-1 gap-2">
                Finalizar compra
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </RightSidebar>
  );
};
