import Image from "next/image";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const ImageComponent = ({
  className,
  src,
  alt,
  imageClassName = "object-cover",
}) => {
  return (
    <div className={cn("relative overflow-hidden ", className)}>
      <Skeleton className="absolute h-full w-full object-cover" />
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClassName}
        quality={100}
        priority
      />
    </div>
  );
};
