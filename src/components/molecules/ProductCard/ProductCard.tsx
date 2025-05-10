import { Card } from "@/components/atoms/Card";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { ProductActions } from "./ProductActions";
import type { Product } from "@/types/product";

export const ProductCard = (product: Product) => {
  return (
    <Card className="group transition-all hover:-translate-y-1">
      <ProductImage {...product} />
      <ProductInfo {...product} />
      <ProductActions {...product} />
    </Card>
  );
};
