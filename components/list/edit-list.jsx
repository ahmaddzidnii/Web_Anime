"use client";

import { FaEdit } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Loader } from "../loader";
import { useEditListModal } from "@/hooks/use-edit-list-modal";

/** function to convert epoch to date*/
const epochToDate = (epoch) => {
  if (!epoch) {
    return null;
  }
  return new Date(epoch * 1000);
};

export const EditList = ({ data }) => {
  const {
    onOpen,
    setCount,
    setStatus,
    setScore,
    setAnimeTitle,
    setTotalEpisode,
    setStartWatch,
    setEndWatch,
  } = useEditListModal();
  const isPending = false;
  const onEditList = () => {
    setStartWatch(epochToDate(data.start_watch));
    setEndWatch(epochToDate(data.end_watch));
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

export const EditListMobile = ({ data }) => {
  const {
    onOpen,
    setCount,
    setStatus,
    setScore,
    setAnimeTitle,
    setTotalEpisode,
    setStartWatch,
    setEndWatch,
  } = useEditListModal();

  const onEditList = () => {
    setStartWatch(epochToDate(data.start_watch));
    setEndWatch(epochToDate(data.end_watch));
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
      className="absolute top-0 right-0 md:hidden"
    >
      <MdEdit className="h-5 w-5" />
    </div>
  );
};
