import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader } from "./ui/card";

export const CardSkeleton = () => {
  return (
    <Card>
      <div className=" w-[full] h-[300px]">
        <Skeleton className="w-full h-full object-cover" />
      </div>

      <CardHeader className="flex flex-col justify-between">
        <div className="h-10 sm:h-20">
          <Skeleton className="h-full" />
        </div>
        <div className="h-7">
          <Skeleton className="h-full" />
        </div>
      </CardHeader>
    </Card>
  );
};
