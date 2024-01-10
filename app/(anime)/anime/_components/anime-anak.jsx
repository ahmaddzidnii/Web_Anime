"use client";

import { useQuery } from "@tanstack/react-query";

import { HeadingAnime } from "@/components/heading-anime";
import { SwiperComponent } from "@/components/swiper-component";
import { fetchAnimeAnakTop } from "@/services/anime.service";

export const AnimeAnak = () => {
  const {
    data: animeAnak,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["anakAnak"],
    queryFn: fetchAnimeAnakTop,
  });

  return (
    <div className="mt-5">
      <HeadingAnime
        title="Anak Anak"
        href="/anime/children"
      />
      <SwiperComponent
        data={animeAnak?.data}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};
