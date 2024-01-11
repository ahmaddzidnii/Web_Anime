"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useAddList } from "@/hooks/feature-list/use-mutation-list";

export const AddList = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isSignedIn } = useUser();
  const { userId } = useAuth();

  const { mutate, isPending } = useAddList();

  const animeData = {
    userId,
    data: {
      anime_id: data.mal_id,
      anime_title: data.title,
      anime_image: data.images.jpg.image_url,
    },
  };

  const onAddToList = () => {
    if (!isSignedIn) {
      return toast.error("Anda harus login terlebih dahulu.");
    }
    mutate(animeData);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Button
      onClick={onAddToList}
      variant="outline"
      disabled={!isMounted || isPending}
    >
      <FaList className="h-5 w-5 mr-2" />
      {isPending ? "Loading..." : "Tambahkan Ke List"}
    </Button>
  );
};
