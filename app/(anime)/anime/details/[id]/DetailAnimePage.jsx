import Image from "next/image";
import { BsFilePersonFill } from "react-icons/bs";
import { BiSolidUserDetail, BiSolidMoviePlay, BiSolidLike } from "react-icons/bi";
import { MdReviews } from "react-icons/md";
import DetailComponents from "./_components/DetailComponents";
import CharactersComponents from "./_components/CharactersComponents";
import EpisodesComponent from "./_components/EpisodesComponent";
import SkeletonLoaderImage from "../../_components/SkeletonLoaderImage";

const DetailAnimePage = ({ api, searchParams }) => {
  const { tab } = searchParams;

  let detail;

  switch (tab) {
    case "details":
      detail = true;
      break;
    case undefined:
      detail = true;
      break;
    case "":
      detail = true;
      break;
    case "characters":
      detail = false;
      break;
    case "episodes":
      detail = false;
      break;
    case "recommendations":
      detail = false;
      break;
    case "reviews":
      detail = false;
      break;

    default:
      detail = true;
      break;
  }

  const tabInfo = {
    details: { title: "Details", icon: <BiSolidUserDetail /> },
    characters: { title: "Characters", icon: <BsFilePersonFill /> },
    episodes: { title: "Episodes", icon: <BiSolidMoviePlay /> },
    recommendations: { title: "Recommendations", icon: <BiSolidLike /> },
    reviews: { title: "Reviews", icon: <MdReviews /> },
  };

  // Judul tab dan ikon berdasarkan tab
  const tabTitle = tabInfo[tab] ? tabInfo[tab].title : "Details";
  const tabIcon = tabInfo[tab] ? tabInfo[tab].icon : <BiSolidUserDetail />;

  return (
    <main className="p-4 md:p-7 overflow-y-scroll h-full w-full">
      <div className="flex gap-x-5 -mt-5 mb-5 text-4xl">
        {tabIcon}
        <h1 className="font-bold">{tabTitle}</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center">
        <div className="mx-auto w-full lg:w-[350px]  h-[400px] relative">
          <SkeletonLoaderImage />
          <Image src={api?.images.jpg.large_image_url} fill className="object-cover" alt={api.title} />
        </div>

        <div className=" w-full h-auto">
          <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-5">
            {api.title} <span className="italic">{api.title_japanese}</span>
          </h1>

          {/* Section Tab */}

          {detail ? <DetailComponents api={api} /> : null}
          {tab === "characters" && <CharactersComponents />}
          {tab === "episodes" && <EpisodesComponent />}
          {tab === "recommendations" && <EpisodesComponent />}
          {tab === "reviews" && <EpisodesComponent />}

          {/* Section Tab */}
        </div>
      </div>
    </main>
  );
};

export default DetailAnimePage;
