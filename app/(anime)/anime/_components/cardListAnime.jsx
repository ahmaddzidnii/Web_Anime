"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import SkeletonLoaderImage from "./SkeletonLoaderImage";
import Image from "next/image";

const CardListAnime = ({ api }) => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 gap-6 p-1">
      {api &&
        api.map((data) => {
          return (
            <Card key={data.mal_id} className="shadow-lg">
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
          );
        })}
    </div>
  );
};

export default CardListAnime;
