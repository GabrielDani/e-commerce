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
    <section className="flex flex-wrap mx-auto p-10 justify-center gap-10">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p className="text-center w-full">Nenhum produto encontrado</p>
      )}
    </section>
  );
}
