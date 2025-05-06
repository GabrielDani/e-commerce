import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Image } from "@/components/atoms/Image";
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
  <Card className="group flex flex-col justify-around" size="sm">
    <Image
      src={image}
      alt={`Imagem do produto ${id}`}
      className="group-hover:scale-110 mx-4 my-3 transition-transform duration-300"
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
  </Card>
);
