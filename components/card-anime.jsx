import Image from "next/image";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa6";
import { TextTruncation } from "./text-truncate";
import { AddList } from "./list/add-list";

export const CardAnime = ({ mal_id, title, img, score, type }) => {
  return (
    <article className="transition hover:-translate-y-[1px]">
      <div className="flex w-full flex-col gap-2 overflow-hidden rounded-b-lg rounded-t-lg border ">
        <Link href={`/anime/details/${mal_id}`}>
          <div className="relative h-[400px] w-full ">
            <Image src={img} alt={title} fill className="object-cover" />
          </div>
        </Link>
        <div className=" px-2 pb-2">
          <div className="w-full">
            <Link href={`/anime/details/${mal_id}`}>
              <div className="flex justify-between">
                <TextTruncation
                  className="text-sm font-semibold"
                  originalText={title}
                  maxLength={20}
                />
                <span className="text-xs font-bold text-muted-foreground">
                  {type}
                </span>
              </div>
            </Link>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center gap-x-1 font-semibold text-orange-400">
              <FaRegStar className="h-5 w-5 " />
              {score}
            </div>
            <AddList data={mal_id} />
          </div>
        </div>
      </div>
    </article>
  );
};
