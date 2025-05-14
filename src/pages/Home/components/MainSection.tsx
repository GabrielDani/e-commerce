import { ProductContainer } from "./ProductContainer";
import { ProductFilters } from "./ProductFilters";
import { useSearchParams } from "react-router-dom";

export function MainSection() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <ProductFilters {...{ searchParams, setSearchParams }} />
      <ProductContainer searchParams={searchParams} />
    </>
  );
}
