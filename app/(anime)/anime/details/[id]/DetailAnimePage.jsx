import Image from "next/image";
import { FcStatistics } from "react-icons/fc";
import { BiSolidUserDetail } from "react-icons/bi";

const DetailAnimePage = ({ api }) => {
  return (
    <main className="p-4 md:p-7 overflow-y-scroll h-full w-full">
      <div className="flex gap-x-5 -mt-5 mb-5 text-4xl">
        <BiSolidUserDetail />
        <h1 className="font-bold">Details</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center">
        <div className="mx-auto w-full lg:w-[350px]  h-[400px] relative">
          <Image src={api.images.jpg.large_image_url} fill className="object-cover" alt={api.title} />
        </div>

        <div className=" w-full h-auto">
          <h1 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-5">
            {api.title} <span className="italic">{api.title_japanese}</span>
          </h1>

          {/* Card */}
          <div className="w-full bg-slate-300 py-5 rounded-lg">
            <div className="flex">
              <div className="flex flex-col px-4 justify-center items-center text-center border-e-2 border-slate-600">
                <span className="bg-gray-600 text-slate-100 w-full px-3  rounded-lg">Score</span>
                <h1 className="text-2xl font-bold text-slate-800">{api.score}</h1>
                <p className="text-xs text-slate-800">{api.scored_by} users</p>
              </div>
              <div className="grid grid-rows-3 sm:grid-cols-3 w-3/4 text-center sm:items-center text-sm lg:text-lg text-slate-800">
                <h1>
                  Ranked <span className="font-bold"> #{api.rank}</span>
                </h1>
                <h1>
                  Popularity <span className="font-bold">#{api.popularity}</span>
                </h1>
                <h1>
                  Members <span className="font-bold">{api.members}</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="flex gap-5 flex-col md:flex-row mt-5 ">
            <div className="w-full  bg-slate-300 p-5 rounded-lg">
              <h1 className="text-xl font-bold mb-3  text-slate-800">Genre:</h1>
              <div className="grid grid-rows-1  gap-4 w-full ">
                {api.genres &&
                  api.genres.map((data) => {
                    return (
                      <span key={data.mal_id} className="bg-gray-600 text-slate-100 text-lg  px-3  rounded-lg">
                        {data.name}
                      </span>
                    );
                  })}
              </div>
            </div>
            <iframe className="w-full h-[300px] rounded-lg" src={api.trailer.embed_url} title={api.title} />
          </div>
          <div className="w-full bg-slate-300 p-5 rounded-lg mt-5  text-slate-800">
            <h1 className="text-xl font-bold">Sinopsis :</h1>
            <p className="text-justify">{api.synopsis}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailAnimePage;
