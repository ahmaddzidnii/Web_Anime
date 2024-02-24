import { BsBarChart } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";

import { Skeleton } from "@/components/ui/skeleton";
// import { Card, CardHeader } from "./ui/card";

export const CardSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-2 overflow-hidden rounded-b-lg rounded-t-lg border ">
      <div className="relative h-[400px] w-full ">
        <Skeleton className="absolute h-full w-full object-cover" />
      </div>

      <div className=" px-2 pb-2">
        <div className="w-full">
          <div className="flex justify-between">
            <Skeleton className="h-5 w-32" />
            <span className="text-xs font-bold text-muted-foreground">
              <Skeleton className="h-5 w-20" />
            </span>
          </div>
        </div>
        <div className="mt-3 flex w-full items-center justify-between">
          <div className="flex w-full items-center gap-x-2 font-semibold">
            <div className="flex items-center gap-x-1">
              <BsBarChart className="h-5 w-5 " />
              <Skeleton className="h-5 w-10" />
            </div>

            <div className="flex items-center gap-x-1  text-orange-400">
              <FaRegStar className="h-5 w-5 " />
              <Skeleton className="h-5 w-10" />
            </div>
          </div>

          <Skeleton className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};
// export const CardSkeleton = () => {
//   return (
//     <Card>
//       <div className=" h-[300px] w-[full]">
//         <Skeleton className="h-full w-full object-cover" />
//       </div>

//       <CardHeader className="flex flex-col justify-between">
//         <div className="h-10 sm:h-20">
//           <Skeleton className="h-full" />
//         </div>
//         <div className="h-7">
//           <Skeleton className="h-full" />
//         </div>
//       </CardHeader>
//     </Card>
//   );
// };
