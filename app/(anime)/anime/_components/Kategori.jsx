"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import SkeletonLoaderImage from "./SkeletonLoaderImage";
import { CardSkeleton } from "@/components/skeleton";
import { TextTruncation } from "@/components/text-truncate";
import { AddList } from "@/components/list/add-list";

export const PalingPopular = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <SkeletonCaroselSwiper />;
  }
  return (
    <>
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
    </>
  );
};

export const AnakAnak = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <SkeletonCaroselSwiper />;
  }
  return (
    <Swiper
      slidesPerView={3}
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
                    <CardTitle className="text-sm xl:text-lg">
                      <TextTruncation
                        originalText={data.title}
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
