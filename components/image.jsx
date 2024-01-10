import Image from "next/image";

import { cn } from "@/lib/utils";

export const ImageComponent = ({
  className,
  src,
  alt,
  imageClassName = "object-cover",
}) => {
  return (
    <div className={cn("relative ", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClassName}
        quality={100}
      />
    </div>
  );
};
