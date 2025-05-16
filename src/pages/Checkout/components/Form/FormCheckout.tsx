import { useCart } from "@/contexts/CartContext";
import { FormInput } from "./FormInput";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { ShoppingCart } from "lucide-react";
import { Image } from "@/components/atoms/Image";

export const FormCheckout = () => {
  const { products, totalPrice } = useCart();
  return (
    <form className="w-full h-3/4 grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-4 px-10 pt-10">
      <SectionTitle title="Seus Dados" />
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
      <SectionTitle title="Pagamento e Entrega" />
      <FormInput
        id="credit-card"
        label="Número do Cartão"
        placeholder="9999 9999 8888 7777"
        type="text"
        required
      />
      <div className="flex gap-3 justify-center">
        <FormInput
          id="cvv"
          label="CVV"
          placeholder="123"
          type="text"
          required
        />
        <FormInput
          id="expiration-date"
          label="Data de Vencimento"
          placeholder="01/70"
          type="text"
          required
        />
      </div>
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
      <div className="flex gap-3 justify-center items-center">
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
      <SectionTitle title="Seus Produtos" />
      <section className="row-span-4 overflow-auto">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <ShoppingCart className="w-12 h-12 mb-4" />
              <p>Seu carrinho está vazio</p>
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
                    </div>

                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </section>
      <section className="row-span-1 flex flex-col gap-2">
        <div className="flex justify-center gap-4 bg-gray-200 rounded-md p-1">
          <p className="text-hover-muted">Total:</p>
          <p className="text-green-700">{`R$${totalPrice}`}</p>
        </div>
        <Button>Finalizar</Button>
      </section>
    </form>
  );
};
