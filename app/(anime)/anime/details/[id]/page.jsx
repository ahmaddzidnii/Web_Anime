import { getDetailAnimeById } from "@/services/api";
import SlideNavigation from "./_components/SlideNavigation";

const Page = async ({ params }) => {
  const detailsAnime = await getDetailAnimeById(params.id);
  return (
    <>
      <div className="w-full h-full  flex justify-center">
        <SlideNavigation data={detailsAnime} />
      </div>
    </>
  );
};

export default Page;
