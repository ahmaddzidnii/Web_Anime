"use client";

import React from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { SearchCheck } from "lucide-react";

import { fetcher } from "@/lib/fetcher";
import { Skeleton } from "./ui/skeleton";

export const SearchList = ({ query, buttonRef }) => {
  const router = useRouter();

  const { data, isLoading, error } = useSWR(query ? query : "naruto", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <ListSkeleton />;
  return (
    <div
      role="button"
      className="flex flex-col gap-y-5"
    >
      {data?.data.map((item, idx) => (
        <div
          key={idx}
          className="flex gap-x-5 items-center  hover:bg-slate-200 hover:rounded-sm p-2"
          onClick={() => {
            router.push(`/anime/details/${item.mal_id}`);
            buttonRef?.current?.click();
          }}
        >
          <img
            src={item.images.jpg.image_url}
            alt={item.title}
            className="w-12 h-16 object-cover"
          />
          <span>{item.title}</span>
        </div>
      ))}
      {query && (
        <div
          className="flex gap-x-5 items-center hover:bg-slate-200 hover:rounded-sm p-2"
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
