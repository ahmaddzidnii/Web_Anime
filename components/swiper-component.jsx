"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";

import { CardSkeleton } from "./skeleton";
import { CardAnime } from "./card-anime";

export const SwiperComponent = ({ data, isLoading, isError }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || isLoading) {
    return <SkeletonCaroselSwiper />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <Swiper
      spaceBetween={30}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {data &&
        data.map((data) => {
          return (
            <SwiperSlide key={data.mal_id}>
              <CardAnime
                rank={data.rank}
                img={data.images.jpg.large_image_url}
                mal_id={data.mal_id}
                score={data.score}
                title={data.title}
                type={data.type}
                key={data.mal_id}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

const SkeletonCaroselSwiper = () => {
  return (
    <div className="grid grid-cols-12 gap-x-5">
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <CardSkeleton />
      </div>
      <div className="col-span-12 hidden sm:col-span-6 sm:block md:col-span-4 lg:col-span-3 ">
        <CardSkeleton />
      </div>
      <div className="col-span-12 hidden sm:col-span-6 md:col-span-4 md:block lg:col-span-3">
        <CardSkeleton />
      </div>
      <div className="col-span-12 hidden sm:col-span-6 md:col-span-4 lg:col-span-3 lg:block">
        <CardSkeleton />
      </div>
    </div>
  );
};
