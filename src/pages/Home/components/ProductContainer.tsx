import { Card } from "@/components/atoms/Card";
import { ProductCard } from "@/components/molecules/ProductCard/ProductCard";
import { catalog } from "@/data/catalog";

interface ProductContainerProps {
  searchParams: URLSearchParams;
}

export function ProductContainer({ searchParams }: ProductContainerProps) {
  const filterBy = searchParams.get("filterby");

  const filteredProducts = catalog.filter((product) => {
    if (!filterBy) return true;

    return filterBy === "fem"
      ? product.feminine
      : filterBy === "masc"
      ? !product.feminine
      : true;
  });

  return (
    <section className="flex flex-wrap mx-auto mt-10 justify-center gap-10">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <Card variants={{ size: "container" }}>
          <h1 className="mt-10 text-center font-bold text-base">
            Nenhum produto encontrado
          </h1>
        </Card>
      )}
    </section>
  );
}
