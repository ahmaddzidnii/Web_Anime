import { YtIframe } from "@/components/iframe/yt";
import { getEpisodesAnimeById } from "@/services/anime.service";
import Link from "next/link";

export const EpisodesComponent = async ({ params }) => {
  const episodes = await getEpisodesAnimeById(params.id);

  return (
    <>
      <div className="flex w-full flex-col gap-y-3">
        {episodes?.promo.map((trailer) => (
          <div key={trailer.trailer.youtube_id}>
            <h1>{trailer.title}</h1>
            <YtIframe id={trailer.trailer.youtube_id} title={trailer.title} />
          </div>
        ))}
      </div>
      {/* <div className="w-full bg-slate-300 py-5 rounded-lg p-2">
        {episodes?.episodes.length === 0 && (
          <div className="min-h-[400px] flex justify-center items-center">
            <h1 className="text-2xl text-slate-800 font-bold">
              Tidak ada episode!
            </h1>
          </div>
        )}
        <div className="flex flex-col-reverse gap-y-3">
          {episodes?.episodes.map((episode, idx) => (
            <Link
              key={idx}
              href={episode?.url}
            >
              <article className="flex items-start gap-x-5">
                <img
                  src={
                    !episode?.images.jpg.image_url
                      ? "https://placehold.co/1280x720?text=ahmadzidni.site&font=PT%20Sans"
                      : episode?.images.jpg.image_url
                  }
                  alt={episode?.title}
                  className="w-1/2"
                />
                <div className="w-1/2">
                  <h1 className="text-xl text-slate-800 font-bold ">
                    {episode?.episode}
                  </h1>
                  <h2 className="text-slate-800 text-sm fonst-semibold">
                    {episode?.title}
                  </h2>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div> */}
    </>
  );
};
