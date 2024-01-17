"use client";

import { useEffect } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { animeScoreList, animeStatusList } from "@/constant/data-anime";
import { Skeleton } from "@/components/ui/skeleton";
import { InputEpisode } from "./input-episode";
import { useEditListModal } from "@/hooks/use-edit-list-modal";
import { SubmitEditList } from "./submit-edit-list";
import { getValueStatusByLabel } from "@/utils/enum-status";

export const ModalEditList = () => {
  const {
    count,
    status,
    score,
    listId,
    isOpen,
    onClose,
    setStatus,
    setScore,
    setCount,
  } = useEditListModal();

  const { userId } = useAuth();

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["listUser", listId],
    queryFn: async () => {
      const { data } = await axios.get(`api/list/${userId}?listId=${listId}`);
      return data;
    },
    enabled: !!listId,
  });

  useEffect(() => {
    if (isSuccess) {
      setCount(data?.watched_episode);
      setStatus(data?.status);
      setScore(data?.score);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      alert("Internal server error");
    }
  }, [isError]);

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const handleScoreChange = (value) => {
    setScore(value);
  };

  const dataSubmit = {
    user: {
      user_id: userId,
      id: listId,
    },
    data: {
      status,
      score,
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
            Edit Anime
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
                  {data?.anime_title}
                </h1>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Status</h1>
            </div>
            <div className="w-[60%]">
              {isLoading ? (
                <Skeleton className="w-full h-8" />
              ) : (
                <Select
                  onValueChange={handleStatusChange}
                  value={getValueStatusByLabel(status)}
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
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Episodes Watched</h1>
            </div>
            <div className="w-[60%]">
              <div className="flex items-center gap-x-2">
                <InputEpisode
                  total_episode={data?.total_episode}
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
              {isLoading ? (
                <Skeleton className="w-full h-8" />
              ) : (
                <Select
                  onValueChange={handleScoreChange}
                  defaultValue="0"
                  value={score}
                >
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
              )}
            </div>
          </div>
          <SubmitEditList
            data={dataSubmit}
            isLoading={isLoading}
          />
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
