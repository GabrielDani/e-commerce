import { Card } from "@/components/atoms/Card";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { ProductActions } from "./ProductActions";
import type { Product } from "@/types/product";

export const ProductCard = (product: Product) => {
  return (
    <Card>
      <ProductImage {...product} />
      <ProductInfo {...product} />
      <ProductActions {...product} />
    </Card>
  );
};
