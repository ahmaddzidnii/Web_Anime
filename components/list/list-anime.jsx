"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useFetchList } from "@/hooks/feature-list/use-query-list";
import { DeleteList } from "./delete-list";
import { FilterListAnime } from "./filter-list";

export const ListAnime = () => {
  const [isMounted, setIsMounted] = useState(false);

  // const { data, isLoading } = useFetchList();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <FilterListAnime />
      <div className="min-h-screen flex">
        {/* {data?.length > 0 ? (
          data?.map((item, index) => (
            <div
              key={index}
              className="flex gap-x-5"
            >
              <Image
                src={item.anime_image}
                alt={item.anime_title}
                width={100}
                height={200}
                className="rounded-sm"
                quality={100}
              />
              <div>
                <DeleteList id={item.id} />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">Tidak ada anime di list</div>
        )} */}
      </div>
    </>
  );
};
