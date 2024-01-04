import { getAnimeAnak } from "@/services/api";
import HeadingAnime from "./headingAnime";
import { AnakAnak } from "./Kategori";
import { getAnimeTop } from "@/services/anime.service";

export const AnimeAnak = async () => {
  const animeAnak = await getAnimeTop({
    resource: "/top/anime",
    sfw: true,
    query: "&rating=pg",
  });

  return (
    <div className="mt-5">
      <HeadingAnime
        title="Anak Anak"
        href="/anime/children"
      />
      <AnakAnak data={animeAnak} />
    </div>
  );
};
