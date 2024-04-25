import { YtIframe } from "@/components/iframe/yt";
import { CharactersComponent } from "./characther-component";
import { Suspense } from "react";

export const DetailComponent = ({ api }) => {
  return (
    <>
      <div className="w-full rounded-lg bg-slate-300 py-5">
        <div className="flex">
          <div className="flex flex-col items-center justify-center border-e-2 border-slate-600 px-4 text-center">
            <span className="w-full rounded-lg bg-gray-600 px-3  text-slate-100">
              Score
            </span>
            <h1 className="text-2xl font-bold text-slate-800">{api.score}</h1>
            <p className="text-xs text-slate-800">{api.scored_by} users</p>
          </div>
          <div className="grid w-3/4 grid-rows-3 text-center text-sm text-slate-800 sm:grid-cols-3 sm:items-center lg:text-lg">
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

      <div className="mt-5 flex flex-col  gap-5">
        <div className="w-full  rounded-lg bg-slate-300 p-5">
          <h1 className="mb-3 text-xl font-bold  text-slate-800">Genre:</h1>
          <div className="grid w-full  grid-rows-1 gap-4 ">
            {api.genres &&
              api.genres.map((data) => {
                return (
                  <span
                    key={data.mal_id}
                    className="rounded-lg bg-gray-600 px-3  text-lg  text-slate-100"
                  >
                    {data.name}
                  </span>
                );
              })}
          </div>
        </div>
        {api?.trailer.youtube_id && (
          <YtIframe id={api?.trailer.youtube_id} title={api?.title_japanese} />
        )}
      </div>
      <div className="mt-5 w-full rounded-lg bg-slate-300 p-5  text-slate-800">
        <h1 className="text-xl font-bold">Sinopsis :</h1>
        <p className="text-justify">
          {api.synopsis.replace(/\[Written by MAL Rewrite\]/, "")}
        </p>
      </div>
      <div className="mt-5 w-full rounded-lg bg-slate-300 p-5  text-slate-800">
        <h1 className="text-xl font-bold">Character :</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <CharactersComponent data={api} />
        </Suspense>
      </div>
    </>
  );
};
