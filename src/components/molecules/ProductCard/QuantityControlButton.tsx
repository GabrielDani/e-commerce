import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus } from "lucide-react";

interface QuantityControlButtonProps {
  id: number;
  quantity: number;
}

export const QuantityControlButton = ({
  id,
  quantity,
}: QuantityControlButtonProps) => {
  const { updateProductQuantity } = useCart();
  return (
    <div className="inline-flex items-center justify-between gap-1 rounded-xs border border-border-card p-1 shadow-sm">
      <ButtonIcon
        variants={{ variant: "cart", size: "sm" }}
        Icon={Minus}
        onClick={() => updateProductQuantity(id, quantity - 1)}
        disabled={quantity <= 1}
        ariaLabel="Diminuir quantidade"
      />
      <span
        className="min-w-8 text-center font-medium text-primary text-sm"
        aria-live="polite"
        aria-atomic="true"
      >
        {quantity}
      </span>
      <ButtonIcon
        variants={{ variant: "cart", size: "sm" }}
        Icon={Plus}
        onClick={() => updateProductQuantity(id, quantity + 1)}
        disabled={quantity >= 20}
        ariaLabel="Aumentar quantidade"
      />
    </div>
  );
};
