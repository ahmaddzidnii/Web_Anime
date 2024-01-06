import Image from "next/image";
import { BsFilePersonFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import {
  BiSolidUserDetail,
  BiSolidMoviePlay,
  BiSolidLike,
} from "react-icons/bi";
import { Suspense } from "react";

import { DetailComponent } from "./_components/detail-component";
import { CharactersComponent } from "./_components/characther-component";
import { EpisodesComponent } from "./_components/episode-component";
import SkeletonLoaderImage from "../../_components/SkeletonLoaderImage";

export const DetailAnimePage = ({ api, searchParams, params }) => {
  const { tab } = searchParams;

  const detailTabs = ["details", undefined, ""];
  const isdetail =
    detailTabs.includes(tab) ||
    !["characters", "episodes", "recommendations", "reviews"].includes(tab);

  const tabInfo = {
    details: { title: "Details", icon: <BiSolidUserDetail /> },
    characters: { title: "Characters", icon: <BsFilePersonFill /> },
    episodes: { title: "Episodes", icon: <BiSolidMoviePlay /> },
    recommendations: { title: "Recommendations", icon: <BiSolidLike /> },
    reviews: { title: "Reviews", icon: <MdReviews /> },
  };
  const tabTitle = tabInfo[tab] ? tabInfo[tab].title : "Details";
  const tabIcon = tabInfo[tab] ? tabInfo[tab].icon : <BiSolidUserDetail />;

  return (
    <main className="p-4 md:p-7 overflow-y-scroll max-h-screen w-full">
      <div className="flex gap-x-5 -mt-5 mb-5 text-4xl">
        {tabIcon}
        <h1 className="font-bold">{tabTitle}</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center">
        <div className="mx-auto w-full lg:w-[350px]  h-[400px] relative">
          <SkeletonLoaderImage />
          <Image
            src={api?.images.jpg.large_image_url}
            fill
            className="object-cover"
            alt={api?.title}
          />
        </div>

        <div className=" w-full h-auto">
          <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-5">
            {api?.title} <span className="italic">{api?.title_japanese}</span>
          </h1>

          {isdetail && <DetailComponent api={api} />}
          {tab === "characters" && (
            <Suspense fallback={<div>Loading...</div>}>
              <CharactersComponent params={params} />
            </Suspense>
          )}
          {tab === "episodes" && (
            <Suspense fallback={<div>Loading...</div>}>
              <EpisodesComponent params={params} />
            </Suspense>
          )}
          {/* {tab === "recommendations" && <EpisodesComponent />}
          {tab === "reviews" && <EpisodesComponent />} */}
        </div>
      </div>
    </main>
  );
};
