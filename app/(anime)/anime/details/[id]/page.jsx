import { GiPeriscope } from "react-icons/gi";
import { Suspense } from "react";

import { getDetailAnimeById } from "@/services/api";
import { DetailAnimePage } from "./detail-anime-page";
import { SideBarDetailAnime } from "./_components/sidebar-detail-anime";

export async function generateMetadata({ params }) {
  const detailsAnime = await getDetailAnimeById(params.id);
  return {
    title: detailsAnime ? `${detailsAnime?.title_english}` : "Tidak Ditemukan",
  };
}
const Page = async ({ params, searchParams }) => {
  const detailsAnime = await getDetailAnimeById(params.id);
  if (!detailsAnime)
    return (
      <div className="px-3 sm:px-4 md:px-5 lg:px-10 -mt-20">
        <div className=" min-h-screen flex justify-center items-center gap-5">
          <GiPeriscope className="text-4xl" />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  tracking-wide mb-5">
            Tidak ada hasil untuk kata kunci ini.
          </h1>
        </div>
      </div>
    );

  return (
    <>
      <div className="h-full flex">
        <Suspense fallback={null}>
          <SideBarDetailAnime />
        </Suspense>
        <DetailAnimePage
          api={detailsAnime}
          searchParams={searchParams}
          params={params}
        />
      </div>
    </>
  );
};

export default Page;
