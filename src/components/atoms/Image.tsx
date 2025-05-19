import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";

const imageContainerVariants = cva("relative overflow-hidden", {
  variants: {
    aspectRatio: {
      square: "aspect-square",
      video: "aspect-video",
      custom: "",
    },
  },
  defaultVariants: {
    aspectRatio: "custom",
  },
});

const imageStyles = cva("transition-opacity duration-300", {
  variants: {
    size: {
      default: "w-full h-full",
      sm: "w-18 h-full",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    type: {
      cover: "object-cover",
      contain: "object-contain",
    },
  },
  defaultVariants: {
    size: "default",
    rounded: "lg",
    type: "cover",
  },
});

interface ImageProps {
  containerVariants?: VariantProps<typeof imageContainerVariants>;
  imageVariants?: VariantProps<typeof imageStyles>;
  src: string;
  alt: string;
  fallbackSrc?: string;
  skeletonClass?: string;
}

export const Image = ({
  containerVariants,
  imageVariants,
  src,
  alt,
  fallbackSrc = "/image-fallback.jpg",
  skeletonClass,
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div
      className={cn(imageContainerVariants(containerVariants), skeletonClass)}
    >
      {/* Skeleton Loading */}
      {isLoading && (
        <div className={cn("absolute inset-0 bg-neutral-100 animate-pulse")} />
      )}

      {/* Imagem real */}
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          imageStyles(imageVariants),
          isLoading ? "opacity-0" : "opacity-100"
        )}
      />
    </div>
  );
};
