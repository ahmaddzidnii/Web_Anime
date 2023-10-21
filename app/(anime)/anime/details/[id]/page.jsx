import { getDetailAnimeById } from "@/services/api";
import SideBarDetailAnime from "./_components/SideBarDetailAnime";
import DetailAnimePage from "./DetailAnimePage";

const Page = async ({ params }) => {
  // const detailsAnime = await getDetailAnimeById(params.id);
  return (
    <>
      <div className="h-full flex">
        <SideBarDetailAnime />
        <DetailAnimePage />
      </div>
    </>
  );
};

export default Page;
