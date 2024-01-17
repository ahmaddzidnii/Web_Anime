"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useFetchList } from "@/hooks/feature-list/use-query-list";
import { DeleteList } from "./delete-list";
import { FilterListAnime } from "./filter-list";
import { ImageComponent } from "../image";
import { EditList } from "./edit-list";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Loader } from "../loader";
import { Skeleton } from "../ui/skeleton";

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
          <Skeleton className="w-full h-48 bg-slate-300" />
        </div>
      )}

      {data?.length == 0 && (
        <div className="text-center">Tidak ada anime di list</div>
      )}
      <div className="h-full">
        {data?.map((item) => {
          const createdDate = new Date(item.created_at).toLocaleString("id-ID");
          const updatedDate = new Date(item.updated_at).toLocaleString("id-ID");
          return (
            <div key={item.id}>
              <Separator className="my-5" />
              <div className="flex gap-x-5">
                <div>
                  <ImageComponent
                    src={item.anime_image}
                    alt={item.anime_title}
                    className="w-[150px] h-[200px]"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <Link
                    href={`/anime/details/${item.anime_id}`}
                    className="text-xl font-bold"
                  >
                    {item.anime_title}
                  </Link>
                  <p>{item.type}</p>
                  <p>{item.status}</p>
                  <p>{item.score}</p>
                  <p>
                    {item.watched_episode}/{item.total_episode}
                  </p>
                  <p>Ditambahkan pada {createdDate}</p>
                  <p>Diperbarui pada {updatedDate}</p>
                </div>
                <div className="w-[100px]">
                  <div className="flex items-center justify-center h-full space-x-2">
                    <DeleteList id={item.id} />
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
