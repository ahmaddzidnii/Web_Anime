import { getAnimeAnak } from "@/services/anime.service";
import { AnakAnak } from "./Kategori";
import { HeadingAnime } from "@/components/heading-anime";

export const AnimeAnak = async () => {
  const animeAnak = await getAnimeAnak(10, 1);

  return (
    <div className="mt-5">
      <HeadingAnime
        title="Anak Anak"
        href="/anime/children"
      />
      <AnakAnak data={animeAnak.data} />
    </div>
  );
};
