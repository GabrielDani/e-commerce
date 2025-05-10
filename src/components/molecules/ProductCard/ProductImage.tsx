import { Image } from "@/components/atoms/Image";

interface ProductImageProps {
  image: string;
  name: string;
  brand: string;
}

export const ProductImage = ({ image, name, brand }: ProductImageProps) => {
  return <Image src={image} alt={`${name} - ${brand}`} />;
};
