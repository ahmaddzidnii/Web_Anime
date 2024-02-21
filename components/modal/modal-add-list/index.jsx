"use client";

import axios from "axios";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useAddListModal } from "@/hooks/use-add-list-modal";
import { Separator } from "@/components/ui/separator";

import { SubmitAddList } from "./submit-add-list";
import { animeScoreList, animeStatusList } from "@/constant/data-anime";
import { Skeleton } from "@/components/ui/skeleton";
import { InputEpisode } from "./input-episode";
import { InputDate } from "@/components/input-date";
import { SelectWrapper, SelectItem } from "@/components/select-wrapper";

export const ModalAddList = () => {
  const {
    count,
    status,
    score,
    animeId,
    startWatch,
    endWatch,
    isOpen,
    onClose,
    setStatus,
    setScore,
    setCount,
    setStartWatch,
    setEndWatch,
  } = useAddListModal();

  const epochStartWatch = startWatch
    ? Math.floor(startWatch.getTime() / 1000)
    : null;
  const epochEndWatch = endWatch ? Math.floor(endWatch.getTime() / 1000) : null;

  const { userId } = useAuth();
  const { user } = useUser();

  const { data, isLoading } = useQuery({
    queryKey: ["anime", animeId],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime/${animeId}`,
      );
      return data;
    },
    enabled: !!animeId,
  });

  const handleStatusChange = (value) => {
    if (value === "Completed") {
      setCount(data?.data.episodes);
    }
    if (value === "Watching") {
      setStartWatch(new Date());
    }
    if (value === "Completed") {
      setEndWatch(new Date());
    }
    setStatus(value);
  };

  const handleScoreChange = (value) => {
    setScore(value);
  };

  const email = user?.emailAddresses[0].emailAddress;

  const dataAnime = {
    user: {
      user_id: userId,
      email,
    },
    data: {
      anime_id: animeId,
      anime_title: data?.data.title,
      anime_image: data?.data.images.jpg.image_url,
      status,
      type: data?.data.type,
      score,
      total_episode: data?.data.episodes,
      watched_episode: count,
      start_watch: epochStartWatch,
      end_watch: epochEndWatch,
    },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-start text-sm sm:text-lg">
            Tambahkan Anime Ke List
          </DialogTitle>
        </DialogHeader>
        <Separator className="my-2" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Anime Title</h1>
            </div>
            <div className="w-[60%]">
              {isLoading ? (
                <Skeleton className="h-8 w-full" />
              ) : (
                <h1 className="text-sm font-bold sm:text-lg">
                  {data?.data.title}
                </h1>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Status</h1>
            </div>
            <div className="w-[60%]">
              <SelectWrapper
                className="w-full"
                placeholder="Choose status..."
                onValueChange={handleStatusChange}
              >
                {animeStatusList.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectWrapper>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Episodes Watched</h1>
            </div>
            <div className="w-[60%]">
              <div className="flex items-center gap-x-2">
                <InputEpisode
                  total_episode={data?.data.episodes}
                  isLoading={isLoading}
                  data={data}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Your score</h1>
            </div>
            <div className="w-[60%]">
              <SelectWrapper
                className="w-full"
                placeholder="Select Score..."
                onValueChange={handleScoreChange}
              >
                {animeScoreList.map((item, index) => (
                  <SelectItem key={index} value={item.score}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectWrapper>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Start Watch</h1>
            </div>
            <div className="w-[60%]">
              <InputDate
                value={startWatch}
                onSelect={(date) => setStartWatch(date)}
              >
                Select Date
              </InputDate>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">End Watch</h1>
            </div>
            <div className="w-[60%]">
              <InputDate
                value={endWatch}
                onSelect={(date) => setEndWatch(date)}
              >
                Select Date
              </InputDate>
            </div>
          </div>
          <SubmitAddList data={dataAnime} />
        </div>
        <DialogClose asChild>
          <Button
            onClick={onClose}
            variant="ghost"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
