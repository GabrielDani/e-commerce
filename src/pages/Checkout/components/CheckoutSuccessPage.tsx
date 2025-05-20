// src/app/checkout/success/page.tsx
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Link } from "react-router-dom";
import { formatValueToPrice } from "@/utils/utils";
import type { FormCheckout } from "@/types/formCheckout";
import type { CartProduct } from "@/types/cart";

interface CheckoutSuccessProps {
  orderId: string;
  form: FormCheckout;
  items: CartProduct[];
  total: number;
  resetForm: () => void;
  clearCart: () => void;
}

export default function CheckoutSuccessPage({
  form,
  items,
  orderId,
  total,
  resetForm,
  clearCart,
}: CheckoutSuccessProps) {
  const orderData = {
    orderId,
    items,
    total,
    ...form,
    paymentMethod: "Cartão de Crédito",
    estimatedDelivery: "15/05/2023",
  };

  console.log("ORDERDATA:", orderData);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Compra realizada com sucesso!
        </h1>
        <p className="text-lg text-gray-600">
          Obrigado por comprar conosco. Seu pedido foi confirmado.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">
              Informações do Pedido
            </h3>
            <p className="text-gray-600">
              <span className="font-medium">Número do pedido:</span>{" "}
              {orderData.orderId}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Data estimada de entrega:</span>{" "}
              {orderData.estimatedDelivery}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Forma de pagamento:</span>{" "}
              {orderData.paymentMethod}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Valor total:</span>{" "}
              {formatValueToPrice(orderData.total)}
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">
              Informações de Entrega
            </h3>
            <p className="text-gray-600">{orderData.personalData.name}</p>
            <p className="text-gray-600">
              {orderData.address.street}, {orderData.address.number}
              {orderData.address.complement &&
                `, ${orderData.address.complement}`}
            </p>
            <p className="text-gray-600">{orderData.address.postalCode}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Itens do Pedido</h2>
        <div className="divide-y divide-gray-200">
          {orderData.items.map((item, index) => (
            <div key={index} className="py-4 flex justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-600">Qtd: {item.quantity}</p>
              </div>
              <p className="font-medium">
                R$ {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-6">
          Enviamos os detalhes do seu pedido para{" "}
          <span className="font-medium">{orderData.personalData.email}</span>.
          Caso tenha alguma dúvida, entre em contato conosco.
        </p>
        <Link to="/">
          <Button
            text="Voltar à página inicial"
            onClick={() => {
              resetForm();
              clearCart();
            }}
          />
        </Link>
      </div>
    </div>
  );
}
