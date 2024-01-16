"use client";

import { FaEdit } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Loader } from "../loader";
import { useEditListModal } from "@/hooks/use-edit-list-modal";

export const EditList = ({ id }) => {
  const { onOpen } = useEditListModal();
  const isPending = false;
  const onEditList = () => {
    onOpen(id);
  };
  return (
    <Button
      variant="default"
      onClick={onEditList}
      disabled={isPending}
    >
      {isPending ? <Loader /> : <FaEdit />}
    </Button>
  );
};
