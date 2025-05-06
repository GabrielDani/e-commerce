import { cn } from "@/lib/utils";
import { useState, type HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const Image = ({
  src,
  alt,
  className,
  fallbackSrc = "/fallback.jpg",
  ...props
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!loaded && (
        <div className="absolute inset-0 bg-neutral animate-pulse rounded-lg" />
      )}
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={cn(
          "rounded-lg w-full h-auto object-cover",
          loaded ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
    </div>
  );
};
