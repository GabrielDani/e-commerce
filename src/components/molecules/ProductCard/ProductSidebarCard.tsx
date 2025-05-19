import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
import type { CartProduct } from "@/types/cart";
import { ProductInfo } from "./ProductInfo";
import { QuantityControlButton } from "./QuantityControlButton";
import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatValueToPrice } from "@/utils/utils";

export const ProductSidebarCard = (product: CartProduct) => {
  const { removeProduct } = useCart();

  return (
    <Card
      key={`${product.id}-${product.name}`}
      variants={{ size: "full" }}
      className="p-3"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0 flex items-center">
          <Image
            src={product.image}
            alt={product.name}
            imageVariants={{
              size: "sm",
              type: "contain",
              rounded: "md",
            }}
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex justify-between items-start gap-2">
            <ProductInfo
              {...product}
              completeInfo={false}
              className="flex-1 min-w-0"
            />
            <ButtonIcon
              variants={{ size: "md" }}
              Icon={X}
              onClick={() => removeProduct(product.id)}
              ariaLabel="Remover item"
            />
          </div>

          <div className="mt-2 flex items-center justify-between mx-4">
            <QuantityControlButton
              id={product.id}
              quantity={product.quantity}
            />
            <span className="text-money font-semibold ml-4 whitespace-nowrap">
              {formatValueToPrice(product.price * product.quantity)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
