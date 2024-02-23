"use client";

import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { HeadingAnime } from "@/components/heading-anime";
import { SwiperComponent } from "@/components/swiper-component";
import { fetchAnimeAnakTop } from "@/services/anime.service";

export const AnimeAnak = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const {
    data: animeAnak,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["anakAnak"],
    queryFn: fetchAnimeAnakTop,
    staleTime: 15 * 60 * 1000,
    enabled: isInView,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div className="mt-5" ref={ref}>
      <HeadingAnime title="Anak Anak" href="/anime/children" />
      <SwiperComponent
        data={animeAnak?.data}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};
