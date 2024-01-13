"use client";

import { useEffect, useState } from "react";

import { useFetchList } from "@/hooks/feature-list/use-query-list";
import { DeleteList } from "./delete-list";
import { FilterListAnime } from "./filter-list";
import { ImageComponent } from "../image";
import { EditList } from "./edit-list";
import { Separator } from "@/components/ui/separator";

export const ListAnime = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { data, isLoading } = useFetchList();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <FilterListAnime />

      {isLoading && <div>Loading..</div>}

      {data?.length == 0 && (
        <div className="text-center">Tidak ada anime di list</div>
      )}
      <div className="h-full">
        {data?.map((item) => (
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
              <div className="flex-1">detail</div>
              <div className="w-[100px]">
                <div className="flex items-center justify-center h-full space-x-2">
                  <DeleteList id={item.id} />
                  <EditList id={item.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
