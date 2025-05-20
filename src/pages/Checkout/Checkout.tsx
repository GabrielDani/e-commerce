import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { FormCheckoutPage } from "./components/Form/FormCheckoutPage";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";
import { useFormCheckout } from "@/hooks/useFormCheckout";
import { useCart } from "@/contexts/CartContext";

export default function Checkout() {
  const [orderId, setOrderId] = useState<string | null>(null);
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const { form, updateField, validateForm, errors, resetForm } =
    useFormCheckout();
  const { products, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSuccess = (orderId: string) => {
    setOrderId(orderId);
  };

  return (
    <main className="space-y-10 rounded-md">
      {!orderId ? (
        <>
          <ButtonIcon Icon={MoveLeft} onClick={() => navigate("/")} />
          {showErrors && (
            <div className="flex justify-center items-center text-accent">
              <span>{errors.address}</span>
              <span>{errors.paymentData}</span>
              <span>{errors.personalData}</span>
            </div>
          )}
          <FormCheckoutPage
            form={form}
            updateField={updateField}
            validateForm={validateForm}
            onSuccess={handleSuccess}
            products={products}
            totalPrice={totalPrice}
            setShowErrors={setShowErrors}
          />
        </>
      ) : (
        <CheckoutSuccessPage
          form={form}
          items={products}
          total={totalPrice}
          orderId={orderId}
          resetForm={resetForm}
          clearCart={clearCart}
        />
      )}
    </main>
  );
}
