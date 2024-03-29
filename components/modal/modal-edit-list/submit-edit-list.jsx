"use client";

import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useEditList } from "@/hooks/feature-list/use-mutation-list";

export const SubmitEditList = ({ data }) => {
  const { mutate, isPending } = useEditList();

  const handleClick = () => {
    mutate(data);
  };
  return (
    <Button
      onClick={handleClick}
      className="w-full text-sm tracking-wide sm:text-lg"
      disabled={isPending}
    >
      {isPending ? <Loader /> : "Perbarui list"}
    </Button>
  );
};
