import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import SkeletonLoaderImage from "@/app/(anime)/anime/_components/SkeletonLoaderImage";
import { TextTruncation } from "@/components/text-truncate";
import { AddList } from "./list/add-list";

export const CardListAnime = ({ data }) => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 gap-6 p-1">
      {data &&
        data.map((item) => {
          return (
            <Card
              key={item.mal_id}
              className="shadow-lg hover:-translate-y-[1px] transition"
            >
              <div className="relative w-[full] h-[300px]">
                <SkeletonLoaderImage />
                <Image
                  loading="lazy"
                  quality={100}
                  className="w-full h-full object-cover"
                  src={item.images.jpg.large_image_url}
                  fill
                  alt={item.title}
                />
              </div>

              <CardHeader className="flex flex-col justify-between">
                <div className="h-10 sm:h-20">
                  <CardTitle className="text-sm xl:text-lg">
                    <TextTruncation
                      originalText={item.title}
                      maxLength={40}
                    />
                  </CardTitle>
                </div>
                <Button
                  asChild
                  size="sm"
                >
                  <Link href={`/anime/details/${item.mal_id}`}>
                    Lihat Deskripsi
                  </Link>
                </Button>
                <AddList data={item} />
              </CardHeader>
            </Card>
          );
        })}
    </div>
  );
};
