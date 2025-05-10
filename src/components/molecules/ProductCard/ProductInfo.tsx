import { formatValueToPrice } from "@/utils/utils";

interface ProductInfoProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  feminine: boolean;
}

export const ProductInfo = ({
  id,
  name,
  brand,
  price,
  feminine,
}: ProductInfoProps) => {
  const formattedPrice = formatValueToPrice(price);

  return (
    <div className="p-2">
      <h3
        id={`product-${id}-title`}
        className="font-semibold text-lg line-clamp-2 mb-1 hover:cursor-default"
        title={name}
      >
        {name}
      </h3>
      <p className="text-base text-secondary mb-2">{brand}</p>
      <span className="text-lg font-bold text-primary">{formattedPrice}</span>
      <p className="text-xs">{feminine ? "Feminino" : "Masculino"}</p>
    </div>
  );
};
