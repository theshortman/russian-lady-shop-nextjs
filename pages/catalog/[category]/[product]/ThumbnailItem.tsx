import { FC, useEffect, useRef, useState } from "react";
import { IProductImage } from "@/models/IProductImage";

interface ThumbnailItemProps {
  image: IProductImage;
  alt: string;
  setImage: (image: IProductImage) => void;
}

const ThumbnailItem: FC<ThumbnailItemProps> = ({ image, alt, setImage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (img?.current?.complete) setIsLoaded(true);
  }, []);

  return (
    <img
      ref={img}
      className={`img-fluid img-thumbnail mt-1 me-1 ${
        !isLoaded ? "d-none" : ""
      }`}
      style={{ cursor: "pointer" }}
      src={image.image_small}
      alt={alt}
      onClick={() => setImage(image)}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default ThumbnailItem;
