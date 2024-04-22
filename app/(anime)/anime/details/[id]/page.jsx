import { GiPeriscope } from "react-icons/gi";

import { getDetailAnimeById } from "@/services/api";
import { DetailAnimePage } from "./detail-anime-page";

export async function generateMetadata({ params }) {
  const detailsAnime = await getDetailAnimeById(params.id);
  return {
    title: detailsAnime ? `${detailsAnime?.title_english}` : "Tidak Ditemukan",
    description: detailsAnime ? `${detailsAnime?.synopsis}` : "Tidak Ditemukan",
  };
}
const Page = async ({ params }) => {
  const detailsAnime = await getDetailAnimeById(params.id);

  if (!detailsAnime)
    return (
      <div className="pt-5">
        <div className=" flex min-h-screen items-center justify-center gap-5">
          <GiPeriscope className="text-4xl" />
          <h1 className="mb-5 text-xl font-bold tracking-wide sm:text-2xl  md:text-3xl lg:text-4xl">
            Tidak ada hasil untuk kata kunci ini.
          </h1>
        </div>
      </div>
    );

  return (
    <main className="pt-5">
      <DetailAnimePage api={detailsAnime} />
    </main>
  );
};

export default Page;
