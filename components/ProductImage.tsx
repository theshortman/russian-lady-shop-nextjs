import { FC, useEffect, useRef, useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

interface ProductImageProps {
  src: string | null;
  alt: string;
}

const ProductImage: FC<ProductImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (img?.current?.complete) setIsLoaded(true);
  }, []);

  if (!src) {
    return <ImagePlaceholder text="No Photo" />;
  }

  if (isError) {
    return <ImagePlaceholder text="Error" />;
  }

  return (
    <>
      {!isLoaded && <ImagePlaceholder text="Loading..." />}
      <img
        data-testid="product-img"
        ref={img}
        className={`img-fluid img-thumbnail ${!isLoaded ? "d-none" : ""}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        src={src}
        alt={alt}
      />
    </>
  );
};

export default ProductImage;
