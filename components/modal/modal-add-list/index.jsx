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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SubmitAddList } from "./submit-add-list";

import { animeScoreList, animeStatusList } from "@/constant/data-anime";
import { Skeleton } from "@/components/ui/skeleton";
import { InputEpisode } from "./input-episode";

export const ModalAddList = () => {
  const {
    count,
    status,
    score,
    animeId,
    isOpen,
    onClose,
    setStatus,
    setScore,
    setCount,
  } = useAddListModal();

  const { userId } = useAuth();
  const { user } = useUser();

  const { data, isLoading } = useQuery({
    queryKey: ["anime", animeId],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime/${animeId}`
      );
      return data;
    },
    enabled: !!animeId,
  });

  const handleStatusChange = (value) => {
    if (value === "Completed") {
      setCount(data?.data.episodes);
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
    },
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-sm sm:text-lg text-start">
            Tambahkan Anime Ke List
          </DialogTitle>
        </DialogHeader>
        <Separator className="my-2" />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Anime Title</h1>
            </div>
            <div className="w-[60%]">
              {isLoading ? (
                <Skeleton className="w-full h-8" />
              ) : (
                <h1 className="text-sm sm:text-lg font-bold">
                  {data?.data.title}
                </h1>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Status</h1>
            </div>
            <div className="w-[60%]">
              <Select
                onValueChange={handleStatusChange}
                defaultValue={status}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Choose status..." />
                </SelectTrigger>
                <SelectContent>
                  {animeStatusList.map((item, index) => (
                    <SelectItem
                      key={index}
                      value={item.value}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-between items-center">
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
          <div className="flex justify-between items-center">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Your score</h1>
            </div>
            <div className="w-[60%]">
              <Select onValueChange={handleScoreChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder=" score..." />
                </SelectTrigger>
                <SelectContent className="overflow-y-scrol max-h-72 ">
                  {animeScoreList.map((item, index) => (
                    <SelectItem
                      key={index}
                      value={item.score}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <SubmitAddList data={dataAnime} />
        </div>
        <DialogClose asChild>
          <Button
            onClick={onClose}
            variant="ghost"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
