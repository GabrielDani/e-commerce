import { catalog } from "@/data/catalog";
import { ProductCard } from "./ProductCard";

export function ProductContainer() {
  return (
    <section className="flex flex-wrap mx-auto p-10 justify-center gap-10">
      {catalog.length &&
        catalog.map((product) => <ProductCard key={product.id} {...product} />)}
    </section>
  );
}
