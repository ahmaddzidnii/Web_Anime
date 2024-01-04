import { getAnimeTop } from "@/services/anime.service";
import { PalingPopular } from "./Kategori";
import HeadingAnime from "./headingAnime";

export const PopularAnime = async () => {
  const animePopular = await getAnimeTop({
    resource: "/top/anime",
    limit: 10,
  });
  return (
    <section>
      <HeadingAnime
        title="Paling Popular"
        href="/anime/top"
      />

      <PalingPopular data={animePopular} />
    </section>
  );
};
