import { useCart } from "@/contexts/CartContext";
import { FormInput } from "./FormInput";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/atoms/Button";
import { ShoppingCart } from "lucide-react";
import { ProductSidebarCard } from "@/components/molecules/ProductCard/ProductSidebarCard";
import { formatValueToPrice } from "@/utils/utils";

export const FormCheckout = () => {
  const { products, totalPrice } = useCart();

  return (
    <form className="bg-background-card w-full p-4 pt-6 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 md:px-10 md:pt-10">
      {/* Coluna 1 - Dados Pessoais */}
      <div className="space-y-4 md:col-span-1">
        <SectionTitle title="Seus Dados" />
        <div className="flex gap-2 justify-center md:flex-col">
          <FormInput
            id="name"
            label="Nome"
            placeholder="Digite seu nome..."
            type="text"
            required
          />
          <FormInput
            id="surname"
            label="Sobrenome"
            placeholder="Digite seu sobrenome..."
            type="text"
            required
          />
        </div>
        <div className="flex gap-2 justify-center md:flex-col">
          <FormInput
            id="email"
            label="E-mail"
            placeholder="exemplo@gmail.com"
            type="email"
            required
          />
          <FormInput
            id="phone"
            label="Telefone"
            placeholder="(xx) 99999-9999"
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
            type="text"
            required
          />

          <div className="flex gap-3">
            <FormInput
              id="cvv"
              label="CVV"
              placeholder="123"
              type="text"
              variants={{ size: "fixed-24" }}
              required
            />
            <FormInput
              id="expiration-date"
              label="Expira"
              placeholder="01/70"
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
            type="text"
            required
          />
          <FormInput
            id="address"
            label="Endereço"
            placeholder="Rua Santos"
            type="text"
            required
          />
        </div>

        <div className="flex justify-center gap-3">
          <FormInput
            id="address-number"
            label="Número"
            placeholder="12"
            type="text"
            required
          />
          <FormInput
            id="apt-number"
            label="Complemento"
            placeholder="103"
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
            onClick={() => {
              console.log("Comprou");
            }}
          />
        </div>
      </div>
    </form>
  );
};
