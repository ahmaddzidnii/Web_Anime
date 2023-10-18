"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import SkeletonLoaderImage from "./SkeletonLoaderImage";

export const PalingPopular = ({ data }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
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
                <Card className="shadow-lg">
                  <div className="relative w-[full] h-[300px]">
                    <SkeletonLoaderImage />
                    <Image loading="lazy" quality={100} className="w-full h-full object-cover" src={data.images.jpg.large_image_url} fill alt={data.title} />
                  </div>

                  <CardHeader className="flex flex-col justify-between">
                    <div className="h-10 sm:h-20">
                      <CardTitle className="text-sm xl:text-lg text-justify">{data.title}</CardTitle>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/anime/details/${data.mal_id}`}>Lihat Deskripsi</Link>
                    </Button>
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
  return (
    <>
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
                <Card className="shadow-lg">
                  <div className="relative w-[full] h-[300px]">
                    <SkeletonLoaderImage />
                    <Image loading="lazy" quality={100} className="w-full h-full object-cover" src={data.images.jpg.large_image_url} fill alt={data.title} />
                  </div>

                  <CardHeader className="flex flex-col justify-between">
                    <div className="h-10 sm:h-20">
                      <CardTitle className="text-sm xl:text-lg text-justify">{data.title}</CardTitle>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/anime/details/${data.mal_id}`}>Lihat Deskripsi</Link>
                    </Button>
                  </CardHeader>
                </Card>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};
