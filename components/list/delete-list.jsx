"use client";

import { useAuth } from "@clerk/nextjs";
import { FaTrash } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { useDeleteList } from "@/hooks/feature-list/use-mutation-list";
import { Loader } from "@/components/loader";

export const DeleteList = ({ id }) => {
  const { userId } = useAuth();
  const { mutate: deleteList, isPending } = useDeleteList();

  const onDeleteItem = () => {
    const data = { id, user_id: userId };
    deleteList(data);
  };
  return (
    <Button
      variant="destructive"
      onClick={onDeleteItem}
      disabled={isPending}
    >
      {isPending ? <Loader colorInDark="#ffffff" /> : <FaTrash />}
    </Button>
  );
};
