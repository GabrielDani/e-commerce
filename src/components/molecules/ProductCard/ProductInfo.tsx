import { formatValueToPrice } from "@/utils/utils";

interface ProductInfoProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  feminine: boolean;
  className?: string;
  completeInfo?: boolean;
}

export const ProductInfo = ({
  id,
  name,
  brand,
  price,
  feminine,
  className,
  completeInfo = true,
}: ProductInfoProps) => {
  const formattedPrice = formatValueToPrice(price ?? 0);

  return (
    <div className={`${className ?? "p-2 hover:cursor-default"}`}>
      <h3
        id={`product-${id}-title`}
        className="font-semibold text-lg line-clamp-2 mb-1"
        title={name}
      >
        {name}
      </h3>
      <p className="text-sm text-secondary mb-2">{brand}</p>
      {completeInfo && (
        <>
          <span className="text-lg font-bold text-money">{formattedPrice}</span>
          <p className="text-xs">{feminine ? "Feminino" : "Masculino"}</p>
        </>
      )}
    </div>
  );
};
