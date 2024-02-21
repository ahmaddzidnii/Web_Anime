import { Card, CardHeader } from "@/components/ui/card";

const Loading = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <Card key={index} className="shadow-lg">
              <div className="relative h-[300px] w-full">
                {/* Skeleton */}
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 opacity-50"></div>

                {/* Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full animate-pulse bg-gray-400"></div>
                </div>
              </div>
              <CardHeader>
                <div className="animate-pulse">
                  <div className="mb-1 mt-2 h-6 w-3/4 bg-gray-300"></div>
                  <div className="mb-2 h-4 w-1/2 bg-gray-300"></div>
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
