"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { SearchCheck } from "lucide-react";
import { MdFormatListBulletedAdd } from "react-icons/md";

import { Skeleton } from "@/components/ui/skeleton";
import { TextTruncation } from "@/components/text-truncate";
import { ImageComponent } from "@/components/image";
import { useSearchModal } from "@/hooks/use-search-modal";
import { fetchSearchAnime } from "@/services/anime.service";
import { Button } from "@/components/ui/button";
import { useAddListModal } from "@/hooks/use-add-list-modal";
import { useUser } from "@clerk/nextjs";

export const SearchList = ({ query }) => {
  const router = useRouter();

  const searchModal = useSearchModal();
  const { onOpen } = useAddListModal();
  const { user } = useUser();

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
    <div className="flex flex-col gap-y-5">
      {!data && (
        <div className="flex h-[300px] items-center justify-center text-center">
          <h1>Masukkan kata kunci !</h1>
        </div>
      )}
      {data?.data.map((item, idx) => (
        <div
          key={idx}
          className="flex p-2"
        >
          <div
            role="button"
            onClick={() => {
              router.push(`/anime/details/${item.mal_id}`);
              searchModal.onClose();
            }}
            className="flex-1  hover:bg-slate-200 dark:hover:bg-slate-600 hover:rounded-sm"
          >
            <div className="flex  gap-x-5 items-center">
              <ImageComponent
                alt={item.title}
                src={item.images.jpg.image_url}
                className="w-[24px] h-[32px]  sm:w-[48px] sm:h-[64px] rounded-sm"
              />

              <div className="flex flex-col">
                <TextTruncation
                  originalText={item.title}
                  maxLength={30}
                  className="text-sm sm:text-lg font-semibold"
                />
                <span className="text-xs sm:text-sm">
                  &#40;{item.type}&#41;
                </span>
                <span className="text-xs sm:text-sm">{item.duration}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button
              variant="ghost"
              onClick={() => {
                onOpen(item.mal_id);
              }}
            >
              <MdFormatListBulletedAdd className="w-5 h-5 sm:w-10 sm:h-10" />
            </Button>
          </div>
        </div>
      ))}
      {query && (
        <div
          role="button"
          className="flex gap-x-5 items-center hover:bg-slate-200 dark:hover:bg-slate-600 hover:rounded-sm p-2 text-xs sm:text-sm"
          onClick={() => {
            router.push(`/anime/results?q=${query}`);
            searchModal.onClose();
          }}
        >
          <SearchCheck className="w-6 h-8 sm:w-12 sm:h-16" />
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
