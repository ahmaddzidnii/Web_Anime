"use client";

import Link from "next/link";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";

import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { AddList } from "./list/add-list";
import { TextTruncation } from "./text-truncate";
import SkeletonLoaderImage from "@/app/(anime)/anime/_components/SkeletonLoaderImage";
import { CardSkeleton } from "./skeleton";

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
              <Card className="shadow-lg hover:-translate-y-[1px] transition">
                <div className="relative w-[full] h-[300px]">
                  <SkeletonLoaderImage />
                  <Image
                    loading="lazy"
                    quality={100}
                    className="w-full h-full object-cover"
                    src={data.images.jpg.large_image_url}
                    fill
                    alt={data.title}
                  />
                </div>

                <CardHeader className="flex flex-col justify-between">
                  <div className="h-10 sm:h-20">
                    <CardTitle className="text-sm xl:text-lg ">
                      <TextTruncation
                        originalText={data?.title}
                        maxLength={40}
                      />
                    </CardTitle>
                  </div>
                  <Button
                    asChild
                    size="sm"
                  >
                    <Link href={`/anime/details/${data.mal_id}`}>
                      Lihat Deskripsi
                    </Link>
                  </Button>
                  <AddList data={data} />
                </CardHeader>
              </Card>
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
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hidden sm:block ">
        <CardSkeleton />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hidden md:block">
        <CardSkeleton />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 hidden lg:block">
        <CardSkeleton />
      </div>
    </div>
  );
};
