"use client";

import { useQuery } from "@tanstack/react-query";

import { HeadingAnime } from "@/components/heading-anime";
import { SwiperComponent } from "@/components/swiper-component";
import { fetchAnimeTop } from "@/services/anime.service";

export const PopularAnime = () => {
  const {
    data: animePopular,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["popularAnime"],
    queryFn: fetchAnimeTop,
    staleTime: 30000,
  });

  return (
    <section>
      <HeadingAnime
        title="Paling Popular"
        href="/anime/top"
      />

      <SwiperComponent
        data={animePopular?.data}
        isLoading={isLoading}
        isError={isError}
      />
    </section>
  );
};
