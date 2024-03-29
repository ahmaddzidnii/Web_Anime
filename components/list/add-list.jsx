"use client";

import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

import { useAddListModal } from "@/hooks/use-add-list-modal";

export const AddList = ({ data }) => {
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
    <button onClick={onAddToList} disabled={!isMounted}>
      <MdFormatListBulletedAdd className="h-6 w-6" />
    </button>
  );
};
