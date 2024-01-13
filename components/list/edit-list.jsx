"use client";

import { FaEdit } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Loader } from "../loader";

export const EditList = ({ id }) => {
  const isPending = false;
  const onDeleteItem = () => {};
  return (
    <Button
      variant="default"
      onClick={onDeleteItem}
      disabled={isPending}
    >
      {isPending ? <Loader /> : <FaEdit />}
    </Button>
  );
};
