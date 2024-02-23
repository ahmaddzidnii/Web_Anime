import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoaderImage = () => {
  return (
    <Skeleton className="h-full w-full object-cover" />
    // <div className="relative h-[300px] w-full animate-pulse bg-gray-300">
    //   <div className="h-full w-full object-contain"></div>
    // </div>
  );
};

export default SkeletonLoaderImage;
