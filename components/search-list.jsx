"use client";

import React from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { SearchCheck } from "lucide-react";
import Image from "next/image";

import { fetcher } from "@/lib/fetcher";
import { Skeleton } from "@/components/ui/skeleton";

export const SearchList = ({ query, buttonRef }) => {
  const router = useRouter();

  const { data, isLoading, error } = useSWR(query ? query : null, fetcher);
  if (error) return <div>failed to load</div>;
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
            buttonRef?.current?.click();
          }}
        >
          <Image
            src={item.images.jpg.image_url}
            alt={item.title}
            className="rounded-sm"
            width={48}
            height={64}
            quality={100}
          />
          <span>{item.title}</span>
        </div>
      ))}
      {query && (
        <div
          className="flex gap-x-5 items-center hover:bg-slate-200 dark:hover:bg-slate-600 hover:rounded-sm p-2"
          onClick={() => {
            router.push(`/anime/results?q=${query}`);
            buttonRef?.current?.click();
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
