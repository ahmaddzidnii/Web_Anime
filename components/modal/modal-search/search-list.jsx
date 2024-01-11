"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { SearchCheck } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { TextTruncation } from "@/components/text-truncate";
import { ImageComponent } from "@/components/image";
import { useSearchModal } from "@/hooks/use-search-modal";
import { fetchSearchAnime } from "@/services/anime.service";

export const SearchList = ({ query }) => {
  const router = useRouter();

  const searchModal = useSearchModal();

  const { data, isLoading, error } = useQuery({
    queryKey: [query ? query : null],
    queryFn: () => fetchSearchAnime(query),
    enabled: !!query,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });

  if (error)
    return (
      <div className="flex h-[300px] items-center justify-center text-center">
        <h1>Something went wrong!</h1>
      </div>
    );
  if (isLoading) return <ListSkeleton />;
  return (
    <div
      role="button"
      className="flex flex-col gap-y-5"
    >
      {!data && (
        <div className="flex h-[300px] items-center justify-center text-center">
          <h1>Masukkan kata kunci !</h1>
        </div>
      )}
      {data?.data.map((item, idx) => (
        <div
          key={idx}
          className="flex gap-x-5 items-center  hover:bg-slate-200 dark:hover:bg-slate-600 hover:rounded-sm p-2"
          onClick={() => {
            router.push(`/anime/details/${item.mal_id}`);
            searchModal.onClose();
          }}
        >
          <ImageComponent
            alt={item.title}
            src={item.images.jpg.image_url}
            className=" w-[48px] h-[64px] rounded-sm"
          />

          <div className="flex flex-col">
            <TextTruncation
              originalText={item.title}
              maxLength={40}
            />
            <span>&#40;{item.type}&#41;</span>
            <span>{item.duration}</span>
          </div>
        </div>
      ))}
      {query && (
        <div
          className="flex gap-x-5 items-center hover:bg-slate-200 dark:hover:bg-slate-600 hover:rounded-sm p-2"
          onClick={() => {
            router.push(`/anime/results?q=${query}`);
            searchModal.onClose();
          }}
        >
          <SearchCheck className="w-12 h-16" />
          Lanjutkan Mencari: {query}
        </div>
      )}
    </div>
  );
};

const ListSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex gap-x-5 items-center w-full">
        <Skeleton className="w-12 h-16 bg-slate-300" />
        <Skeleton className="w-96 h-16 bg-slate-300 " />
      </div>
      <div className="flex gap-x-5 items-center w-full">
        <Skeleton className="w-12 h-16 bg-slate-300" />
        <Skeleton className="w-96 h-16 bg-slate-300 " />
      </div>
      <div className="flex gap-x-5 items-center w-full">
        <Skeleton className="w-12 h-16 bg-slate-300" />
        <Skeleton className="w-96 h-16 bg-slate-300 " />
      </div>
      <div className="flex gap-x-5 items-center w-full">
        <Skeleton className="w-12 h-16 bg-slate-300" />
        <Skeleton className="w-96 h-16 bg-slate-300 " />
      </div>
    </div>
  );
};
