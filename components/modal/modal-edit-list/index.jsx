"use client";

import { X } from "lucide-react";
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
import { InputEpisode } from "./input-episode";
import { useEditListModal } from "@/hooks/use-edit-list-modal";
import { SubmitEditList } from "./submit-edit-list";
import { DeleteList } from "@/components/list/delete-list";

export const ModalEditList = () => {
  const {
    count,
    status,
    score,
    listId,
    animeTitle,
    totalEpisode,
    isOpen,
    onClose,
    setStatus,
    setScore,
    setCount,
  } = useEditListModal();

  const { userId } = useAuth();

  const handleStatusChange = (value) => {
    if (value === "Completed") {
      setCount(totalEpisode);
    }
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
              <h1 className="text-sm sm:text-lg font-bold">{animeTitle}</h1>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Status</h1>
            </div>
            <div className="w-[60%]">
              <Select
                onValueChange={handleStatusChange}
                value={status}
              >
                <SelectTrigger className="w-full">
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
                <InputEpisode />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[40%]">
              <h1 className="text-sm sm:text-lg">Your score</h1>
            </div>
            <div className="w-[60%]">
              <Select
                onValueChange={handleScoreChange}
                defaultValue="0"
                value={score}
              >
                <SelectTrigger className="w-full">
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
          <SubmitEditList data={dataSubmit} />
          <DeleteList id={listId} />
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
