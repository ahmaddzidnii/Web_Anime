"use client";

import { FaEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

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
      size="icon"
      disabled={isPending}
    >
      {isPending ? <Loader /> : <FaEdit />}
    </Button>
  );
};

EditList.Mobile = function ({ data }) {
  const {
    onOpen,
    setCount,
    setStatus,
    setScore,
    setAnimeTitle,
    setTotalEpisode,
  } = useEditListModal();

  const onEditList = () => {
    setAnimeTitle(data.anime_title);
    setTotalEpisode(data.total_episode);
    setCount(data.watched_episode);
    setStatus(data.status);
    setScore(data.score);
    onOpen(data.id);
  };
  return (
    <div
      onClick={onEditList}
      role="button"
      className="absolute top-0 right-3 md:hidden"
    >
      <MdEdit className="h-5 w-5" />
    </div>
  );
};
