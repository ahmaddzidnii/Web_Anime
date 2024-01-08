"use client";

import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useList } from "@/store/use-list";

export const AddList = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isSignedIn } = useUser();
  const list = useList();

  const animeData = {
    anime_id: data.mal_id,
    anime_title: data.title,
    anime_image: data.images.jpg.image_url,
  };

  const onAddToList = () => {
    if (!isSignedIn) {
      return toast.error("Anda harus login terlebih dahulu.");
    }
    list.addItem(animeData);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Button
      onClick={onAddToList}
      variant="outline"
      disabled={!isMounted}
    >
      Tambahkan Ke List
    </Button>
  );
};
