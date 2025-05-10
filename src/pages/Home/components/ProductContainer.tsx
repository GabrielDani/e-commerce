import { ProductCard } from "@/components/molecules/ProductCard/ProductCard";
import { catalog } from "@/data/catalog";

export function ProductContainer() {
  return (
    <section className="flex flex-wrap mx-auto p-10 justify-center gap-10">
      {catalog.length &&
        catalog.map((product) => <ProductCard key={product.id} {...product} />)}
    </section>
  );
}
