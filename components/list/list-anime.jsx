"use client";

import { Button } from "@/components/ui/button";
import { useList } from "@/store/use-list";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ListAnime = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { items, removeItem } = useList();

  const onDeleteItem = (id) => {
    removeItem(id);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col gap-y-5">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={index}
            className="flex gap-x-5"
          >
            <Image
              src={item.anime_image}
              alt={item.anime_name}
              width={100}
              height={200}
              className="rounded-sm"
              quality={100}
            />
            <div>
              <Button
                onClick={() => onDeleteItem(item.anime_id)}
                variant="destructive"
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">Tidak ada anime di list</div>
      )}
    </div>
  );
};
