import Image from "next/image";
import { FcStatistics } from "react-icons/fc";
import { BiSolidUserDetail } from "react-icons/bi";

const DetailAnimePage = ({ api }) => {
  return (
    <div className="p-7 overflow-y-scroll scrollbar scrollbar-thumb-sky-400 h-full w-full">
      <div className="flex gap-x-5 -mt-5 mb-5 text-4xl">
        <BiSolidUserDetail />
        <h1 className="font-bold">Details</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center">
        <div className="mx-auto w-full lg:w-[350px]  h-[400px] relative">
          <Image src={api.images.jpg.large_image_url} fill className="object-cover" alt={api.title} />
        </div>

        <div className=" w-full h-[400px]">
          <h1 className="text-3xl font-bold mb-5">
            {api.title} <span className="italic">{api.title_japanese}</span>
          </h1>

          {/* Card */}
          <div className="w-full bg-slate-300 py-5 rounded-lg relative">
            <div className="flex">
              <div className="flex flex-col px-4 justify-center items-center text-center border-e-2 border-slate-600">
                <span className="bg-gray-600 text-slate-100 w-full px-3  rounded-lg">Score</span>
                <h1 className="text-2xl font-bold text-slate-800">{api.score}</h1>
                <p className="text-xs text-slate-800">{api.scored_by} users</p>
              </div>
              <div className="grid grid-cols-3 w-3/4 text-center items-center text-sm lg:text-lg text-slate-800">
                <h1>{`Ranked #${api.rank}`}</h1>
                <h1>{`Popularity #${api.popularity}`}</h1>
                <h1>{`Members ${api.members}`}</h1>
              </div>
            </div>
            <FcStatistics className="text-4xl absolute top-0 right-0" />
          </div>

          <div className="h-1/2  mt-5">
            <iframe className="h-full" src={api.trailer.embed_url} title={api.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAnimePage;
