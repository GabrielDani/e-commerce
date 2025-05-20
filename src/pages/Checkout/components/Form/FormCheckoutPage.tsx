import { FormInput } from "./FormInput";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/atoms/Button";
import { ShoppingCart } from "lucide-react";
import { ProductSidebarCard } from "@/components/molecules/ProductCard/ProductSidebarCard";
import { formatValueToPrice } from "@/utils/utils";
import type { CartProduct } from "@/types/cart";
import type { FormCheckout } from "@/types/formCheckout";
import { useState } from "react";

interface FormCheckoutProps {
  form: FormCheckout;
  updateField: <T extends keyof FormCheckout>(
    section: T,
    field: keyof FormCheckout[T],
    value: FormCheckout[T][keyof FormCheckout[T]]
  ) => void;
  validateForm: () => boolean;
  onSuccess: (orderId: string) => void;
  setShowErrors: (value: boolean) => void;
  products: CartProduct[];
  totalPrice: number;
}

export const FormCheckoutPage = ({
  form,
  updateField,
  validateForm,
  onSuccess,
  setShowErrors,
  products,
  totalPrice,
}: FormCheckoutProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowErrors(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const orderId = await submitOrderToAPI(form, products, totalPrice);
      onSuccess(orderId);
    } catch (error) {
      console.error("Erro no checkout:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função simulada de submissão à API
  const submitOrderToAPI = async (
    formData: FormCheckout,
    products: CartProduct[],
    totalPrice: number
  ): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          "Simulando o envio para API:",
          formData,
          products,
          totalPrice
        );
        resolve(`ORD-${Math.floor(Math.random() * 1000000)}`);
      }, 1000);
    });
  };

  return (
    <form
      className="bg-background-card w-full p-4 pt-6 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 md:px-10 md:pt-10"
      onSubmit={handleSubmit}
    >
      {/* Coluna 1 - Dados Pessoais */}
      <div className="space-y-4 md:col-span-1">
        <SectionTitle title="Seus Dados" />
        <div className="flex gap-2 justify-center md:flex-col">
          <FormInput
            id="name"
            label="Nome"
            placeholder="Digite seu nome..."
            onChange={(e) => {
              setShowErrors(false);
              updateField("personalData", "name", e.target.value);
            }}
            type="text"
            required
          />
          <FormInput
            id="surname"
            label="Sobrenome"
            placeholder="Digite seu sobrenome..."
            onChange={(e) => {
              setShowErrors(false);
              updateField("personalData", "surname", e.target.value);
            }}
            type="text"
            required
          />
        </div>
        <div className="flex gap-2 justify-center md:flex-col">
          <FormInput
            id="email"
            label="E-mail"
            placeholder="exemplo@gmail.com"
            onChange={(e) => {
              setShowErrors(false);
              updateField("personalData", "email", e.target.value);
            }}
            type="email"
            required
          />
          <FormInput
            id="phone"
            label="Telefone"
            placeholder="(xx) 99999-9999"
            onChange={(e) => {
              setShowErrors(false);
              updateField("personalData", "phone", e.target.value);
            }}
            type="text"
            required
          />
        </div>
      </div>

      {/* Coluna 2 - Pagamento e Entrega */}
      <div className="space-y-4 md:col-span-1">
        <SectionTitle title="Pagamento e Entrega" />
        <div className="flex gap-2 justify-center md:flex-col">
          <FormInput
            id="credit-card"
            label="Número do Cartão"
            placeholder="9999 9999 8888 7777"
            onChange={(e) => {
              setShowErrors(false);
              updateField("paymentData", "cardNumber", e.target.value);
            }}
            type="text"
            required
          />

          <div className="flex gap-3">
            <FormInput
              id="cvv"
              label="CVV"
              placeholder="123"
              onChange={(e) => {
                setShowErrors(false);
                updateField("paymentData", "cvv", e.target.value);
              }}
              type="text"
              variants={{ size: "fixed-24" }}
              required
            />
            <FormInput
              id="expiration-date"
              label="Expira"
              placeholder="01/70"
              onChange={(e) => {
                setShowErrors(false);
                updateField("paymentData", "expiresAt", e.target.value);
              }}
              type="text"
              variants={{ size: "fixed-24" }}
              required
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center md:flex-col">
          <FormInput
            id="cep"
            label="CEP"
            placeholder="33333-999"
            onChange={(e) => {
              setShowErrors(false);
              updateField("address", "postalCode", e.target.value);
            }}
            type="text"
            required
          />
          <FormInput
            id="address"
            label="Endereço"
            placeholder="Rua Santos"
            onChange={(e) => {
              setShowErrors(false);
              updateField("address", "street", e.target.value);
            }}
            type="text"
            required
          />
        </div>

        <div className="flex justify-center gap-3">
          <FormInput
            id="address-number"
            label="Número"
            placeholder="12"
            onChange={(e) => {
              setShowErrors(false);
              updateField("address", "number", e.target.value);
            }}
            type="text"
            required
          />
          <FormInput
            id="apt-number"
            label="Complemento"
            placeholder="103"
            onChange={(e) => {
              setShowErrors(false);
              updateField("address", "complement", e.target.value);
            }}
            type="text"
            required
          />
        </div>
      </div>

      {/* Coluna 3 - Produtos e Total */}
      <div className="space-y-4 md:col-span-1">
        <SectionTitle title="Seus Produtos" />

        <div className="max-h-[400px] overflow-y-auto p-2 space-y-4 rounded-lg">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-center text-secondary">
              <ShoppingCart className="w-12 h-12 mb-4" />
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            products.map((product) => (
              <ProductSidebarCard
                key={`${product.id}-${product.name}`}
                {...product}
              />
            ))
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center bg-background-primary rounded-md p-4">
            <p className="text-primary">Total:</p>
            <p className="text-money font-semibold">
              {formatValueToPrice(totalPrice)}
            </p>
          </div>
          <Button
            text="Finalizar Compra"
            type="submit"
            isLoading={isSubmitting}
          />
        </div>
      </div>
    </form>
  );
};
