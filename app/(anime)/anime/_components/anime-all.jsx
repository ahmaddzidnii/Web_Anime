"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

import { CardSkeleton } from "@/components/skeleton";
import { axiosInstance } from "@/lib/axios/axiosInstance";
import { CardAnime } from "@/components/card-anime";

export const AnimeAll = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const { inView, ref } = useInView({
    threshold: 0.2,
  });
  const { inView: initialFetchInView, ref: initialFetchRef } = useInView({
    triggerOnce: true,
  });

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["anime_explore"],
    queryFn: async ({ pageParam }) => {
      const response = await axiosInstance.get("/top/anime", {
        params: {
          page: pageParam,
          limit: 20,
          sfw: true,
          filter: "bypopularity",
        },
      });

      return response.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.pagination?.has_next_page) {
        return allPages.length + 1;
      } else {
        return undefined;
      }
    },
    enabled: isInView,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  useEffect(() => {
    if (initialFetchInView) {
      setIsInView(true);
    }
  }, [initialFetchInView]);

  const element = data?.pages.map((group, i) => (
    <React.Fragment key={i}>
      {group.data.map((item, index) => {
        const isLastElement = group.data.length == index + 1;
        if (isLastElement) {
          return (
            <CardAnime
              refElement={ref}
              rank={item.rank}
              img={item.images.jpg.image_url}
              title={item.title}
              mal_id={item.mal_id}
              score={item.score}
              type={item.type}
              key={item.mal_id}
            />
          );
        } else {
          return (
            <CardAnime
              rank={item.rank}
              img={item.images.jpg.image_url}
              title={item.title}
              mal_id={item.mal_id}
              score={item.score}
              type={item.type}
              key={item.mal_id}
            />
          );
        }
      })}
    </React.Fragment>
  ));
  return (
    <section>
      <h1 className="my-5 text-sm font-bold tracking-wide sm:text-lg md:text-2xl  lg:text-3xl">
        Explore Anime
      </h1>
      {!isMounted && <SkeletonCaroselSwiper />}
      {isError && <div>Something went wrong</div>}
      {isLoading ? (
        <SkeletonCaroselSwiper />
      ) : (
        <div
          ref={initialFetchRef}
          className=" mt-5 grid grid-cols-1  gap-3  p-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5"
        >
          {element}
        </div>
      )}

      {isFetchingNextPage && <SkeletonCaroselSwiper />}
      {
        hasNextPage && <div className="mt-5 flex w-full justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline h-8 w-8 animate-spin fill-gray-600 font-bold text-gray-200 dark:fill-gray-300 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      }
    </section>
  );
};

const SkeletonCaroselSwiper = () => {
  return (
    <div className="grid grid-cols-1  gap-3  p-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5">
      {new Array(20).fill(0).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};
