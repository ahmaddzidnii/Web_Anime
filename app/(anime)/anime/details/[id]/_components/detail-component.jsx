import { YtIframe } from "@/components/iframe/yt";

export const DetailComponent = ({ api }) => {
  return (
    <>
      <div className="w-full bg-slate-300 py-5 rounded-lg">
        <div className="flex">
          <div className="flex flex-col px-4 justify-center items-center text-center border-e-2 border-slate-600">
            <span className="bg-gray-600 text-slate-100 w-full px-3  rounded-lg">
              Score
            </span>
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

      <div className="flex gap-5 flex-col  mt-5 ">
        <div className="w-full  bg-slate-300 p-5 rounded-lg">
          <h1 className="text-xl font-bold mb-3  text-slate-800">Genre:</h1>
          <div className="grid grid-rows-1  gap-4 w-full ">
            {api.genres &&
              api.genres.map((data) => {
                return (
                  <span
                    key={data.mal_id}
                    className="bg-gray-600 text-slate-100 text-lg  px-3  rounded-lg"
                  >
                    {data.name}
                  </span>
                );
              })}
          </div>
        </div>
        {api?.trailer.youtube_id && (
          <YtIframe
            id={api?.trailer.youtube_id}
            title={api?.title_japanese}
          />
        )}
      </div>
      <div className="w-full bg-slate-300 p-5 rounded-lg mt-5  text-slate-800">
        <h1 className="text-xl font-bold">Sinopsis :</h1>
        <p className="text-justify">{api.synopsis}</p>
      </div>
    </>
  );
};
