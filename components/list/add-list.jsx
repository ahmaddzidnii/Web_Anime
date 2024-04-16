"use client";

import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

import { useAddListModal } from "@/hooks/use-add-list-modal";
import { Button } from "../ui/button";

export const AddList = ({ data, withText = false }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isSignedIn } = useAuth();

  const { onOpen } = useAddListModal();

  const onAddToList = () => {
    if (!isSignedIn) {
      return toast.error("Anda harus login terlebih dahulu.");
    }

    onOpen(data);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Button
      title="Tambahkan ke list"
      onClick={onAddToList}
      disabled={!isMounted}
      className={withText && "w-full gap-x-3 text-sm sm:text-lg"}
      variant={withText ? "outline" : "ghost"}
    >
      <MdFormatListBulletedAdd className=" h-6 w-6" />
      {withText && <span className="text-sm">Tambahkan ke list</span>}
    </Button>
  );
};
