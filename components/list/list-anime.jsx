"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useFetchList } from "@/hooks/feature-list/use-query-list";
import { FilterListAnime } from "./filter-list";
import { ImageComponent } from "../image";
import { EditList, EditListMobile } from "./edit-list";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ProgressComponent } from "@/components/progress-component";
import { Badge } from "@/components/ui/badge";

export const ListAnime = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "ALL";

  const [isMounted, setIsMounted] = useState(false);

  const { data, isLoading } = useFetchList({ status: status });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <FilterListAnime />

      {isLoading && (
        <div className="flex flex-col justify-center h-full space-y-2">
          <Skeleton className="w-full h-48 bg-slate-300" />
          <Skeleton className="w-full h-48 bg-slate-300" />
          <Skeleton className="w-full h-48 bg-slate-300" />
        </div>
      )}

      {data?.length == 0 && (
        <div className="text-center">Tidak ada anime di list</div>
      )}
      <div className="h-full">
        {data?.map((item) => {
          // const createdDate = new Date(item.created_at).toLocaleString("id-ID");
          // const updatedDate = new Date(item.updated_at).toLocaleString("id-ID");
          const progress = Math.ceil(
            (item.watched_episode / item.total_episode) * 100
          );
          return (
            <div key={item.id}>
              <Separator className="my-5" />
              <div className="flex gap-x-5">
                <div>
                  <ImageComponent
                    src={item.anime_image}
                    alt={item.anime_title}
                    className="w-[80px] h-[130px] sm:w-[100px] sm:h-[150px] md:w-[150px] md:h-[200px]"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-3 relative">
                  <EditListMobile data={item} />
                  <Link
                    href={`/anime/details/${item.anime_id}`}
                    className="text-sm sm:text-lg md:text-xl font-bold"
                  >
                    {item.anime_title}
                  </Link>
                  <div className="flex items-center space-x-3">
                    <p>{item.type}</p>
                    <Badge
                      variant="outline"
                      className="text-[10px] sm:text-sm"
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <ProgressComponent
                    status={item.status}
                    value={progress}
                  />
                  <div className="flex justify-end">
                    <p className="rounded-[1px] text-[10px] sm:text-sm">
                      {item.watched_episode}/{item.total_episode}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-[50px] md:w-[100px]">
                  <div className="flex items-center justify-center h-full space-x-2">
                    <EditList data={item} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
