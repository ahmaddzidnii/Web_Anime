"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

const CardListAnime = ({ api }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-1">
      {api &&
        api.map((data) => {
          return (
            <Card key={data.mal_id} className="shadow-lg">
              <div className="relative w-[full] h-[300px]">
                {imageLoaded ? null : <SkeletonLoader />}
                <Image quality={100} className="w-full h-full object-cover" src={data.images.webp.image_url} fill alt={data.title} onLoad={() => setImageLoaded(true)} />
              </div>

              <CardHeader className="flex flex-col justify-between">
                <div className="h-28 md:h-20 lg:h-15">
                  <CardTitle className="text-lg text-justify">{data.title}</CardTitle>
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
