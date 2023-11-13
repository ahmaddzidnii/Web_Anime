import { getDetailAnimeById } from "@/services/api";
import SideBarDetailAnime from "./_components/SideBarDetailAnime";
import DetailAnimePage from "./DetailAnimePage";

export async function generateMetadata({ params }) {
  const detailsAnime = await getDetailAnimeById(params.id);
  return {
    title: { absolute: `Details of ${detailsAnime.title_english}` },
  };
}
const Page = async ({ params, searchParams }) => {
  const detailsAnime = await getDetailAnimeById(params.id);
  return (
    <>
      <div className="h-full flex">
        <SideBarDetailAnime />
        <DetailAnimePage api={detailsAnime} searchParams={searchParams} />
      </div>
    </>
  );
};

export default Page;
