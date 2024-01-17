"use client";

import { FaEdit } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Loader } from "../loader";
import { useEditListModal } from "@/hooks/use-edit-list-modal";

export const EditList = ({ data }) => {
  const {
    onOpen,
    setCount,
    setStatus,
    setScore,
    setAnimeTitle,
    setTotalEpisode,
  } = useEditListModal();
  const isPending = false;
  const onEditList = () => {
    setAnimeTitle(data.anime_title);
    setTotalEpisode(data.total_episode);
    setCount(data.watched_episode);
    setStatus(data.status);
    setScore(data.score);
    onOpen(data.id);
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
