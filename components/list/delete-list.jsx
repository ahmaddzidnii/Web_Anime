"use client";

import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useDeleteList } from "@/hooks/feature-list/use-mutation-list";

export const DeleteList = ({ id }) => {
  const { userId } = useAuth();
  const { mutate: deleteList, isPending } = useDeleteList();

  const onDeleteItem = () => {
    const data = { id, userId };
    deleteList(data);
  };
  return (
    <Button
      variant="destructive"
      onClick={onDeleteItem}
      disabled={isPending}
    >
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
};
