"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useFetchList } from "@/hooks/feature-list/use-query-list";
import { DeleteList } from "./delete-list";

export const ListAnime = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { data, isLoading } = useFetchList();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || isLoading) {
    return <div className="min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col gap-y-5">
      {data?.length > 0 ? (
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
      )}
    </div>
  );
};
