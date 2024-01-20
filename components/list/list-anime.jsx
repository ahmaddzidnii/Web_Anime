"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Bars } from "react-loader-spinner";
import { FaStar } from "react-icons/fa";

import { useFetchList } from "@/hooks/feature-list/use-query-list";
import { FilterListAnime } from "./filter-list";
import { ImageComponent } from "../image";
import { EditList, EditListMobile } from "./edit-list";
import { Separator } from "@/components/ui/separator";
import { ProgressComponent } from "@/components/progress-component";
import { Badge } from "@/components/ui/badge";

export const ListAnime = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "ALL";
  const orderBy = searchParams.get("orderBy");

  const [isMounted, setIsMounted] = useState(false);

  const { data, isLoading } = useFetchList({
    status: status,
    orderBy: orderBy,
  });

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
        <div className="flex items-center justify-center h-[60vh]">
          <Bars
            height="80"
            width="80"
            color="#facc15"
            ariaLabel="bars-loading"
          />
        </div>
      )}

      {data?.length == 0 && (
        <div className="text-center">Tidak ada anime di list</div>
      )}
      <div className="h-full">
        {data?.map((item) => {
          const progress = Math.ceil(
            (item.watched_episode / item.total_episode) * 100
          );
          return (
            <div key={item.id}>
              <Separator className="my-2" />
              <div className="flex gap-x-5 relative">
                <div>
                  <ImageComponent
                    src={item.anime_image}
                    alt={item.anime_title}
                    className="w-[80px] h-[130px] sm:w-[100px] sm:h-[150px] md:w-[150px] md:h-[200px]"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-2 ">
                  <EditListMobile data={item} />
                  <Link
                    href={`/anime/details/${item.anime_id}`}
                    className="text-sm sm:text-lg md:text-xl font-bold"
                  >
                    {item.anime_title}
                  </Link>
                  <div className="flex items-center space-x-3">
                    <p className="text-[10px] sm:text-sm">{item.type}</p>
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
                  <div className="flex justify-between">
                    <p className="rounded-[1px] text-[10px] sm:text-sm">
                      {item.score != 0 && (
                        <span className="flex items-center gap-x-1">
                          <FaStar className="text-yellow-500" /> {item.score}
                        </span>
                      )}
                    </p>
                    <p className="rounded-[1px] text-[10px] sm:text-sm">
                      {item.watched_episode}/{item.total_episode}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-[40px]">
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
