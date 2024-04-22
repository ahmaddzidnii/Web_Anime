import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

const DetailsLoading = () => {
  return (
    <main className="min-h-screen space-y-5 p-1">
      <Skeleton className="className mt-5 h-8 w-full" />
      <div className="flex flex-col justify-center gap-5 md:flex-row">
        <div className="shrink-0">
          <Skeleton className="h-[400px] rounded-sm  md:w-[300px]" />
          <div className="my-2">
            <Skeleton className="className h-10 w-full" />
          </div>
        </div>

        <Skeleton className="h-[600px] w-full" />
      </div>
    </main>
  );
};

export default DetailsLoading;
