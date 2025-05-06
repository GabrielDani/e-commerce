import { Button } from "@/components/atoms/Button";
import type { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";

export const ProductCard = ({
  id,
  name,
  brand,
  image,
  feminine,
  price,
}: Product) => (
  <article className="card-product group flex flex-col justify-around w-48 rounded-lg bg-surface dark:bg-surface-dark shadow-xl shadow-neutral dark:shadow-neutral-dark border-2 border-border dark:border-border-dark">
    <img
      src={image}
      alt={`Imagem do produto ${id}`}
      className="group-hover:scale-110 rounded-lg mx-4 my-3 transition duration-300"
    />
    <p className="mx-4 text-sm text-secondary font-semibold">{name}</p>
    <p className="mx-4 text-sm">{brand}</p>
    <p className="mx-4 text-sm">{feminine ? "feminino" : "masculino"}</p>
    <p className="mx-4 text-sm text-accent">{price}</p>
    <Button
      className="mx-4 my-1"
      size={"sm"}
      icon={<ShoppingCart className="w-4 h-4" />}
    />
  </article>
);
