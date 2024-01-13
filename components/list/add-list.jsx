"use client";

import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { useAddListModal } from "@/hooks/use-add-list-modal";

export const AddList = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isSignedIn } = useAuth();

  const { onOpen } = useAddListModal();

  const onAddToList = () => {
    if (!isSignedIn) {
      return toast.error("Anda harus login terlebih dahulu.");
    }

    onOpen(data.mal_id);
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
       <MdFormatListBulletedAdd className="h-5 w-5 mr-2" />
      Tambahkan Ke List
    </Button>
  );
};
