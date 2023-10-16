import { Card, CardHeader } from "@/components/ui/card";
import { HeadingSkeleton } from "./_components/SkeletonComponen/HeadingSkeleton";

const Loading = () => {
  return (
    <>
      <div className="px-10">
        <HeadingSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
          {[...Array(8)].map((_, index) => (
            <Card key={index} className="shadow-lg">
              <div className="relative w-full h-[300px]">
                {/* Skeleton */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 opacity-50 animate-pulse"></div>

                {/* Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-400 animate-pulse"></div>
                </div>
              </div>
              <CardHeader>
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-300 w-3/4 mt-2 mb-1"></div>
                  <div className="h-4 bg-gray-300 w-1/2 mb-2"></div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Loading;
