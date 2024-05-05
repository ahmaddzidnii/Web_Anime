import { env } from "@/utils/load-env";
import axios from "axios";

export default async function sitemap() {
  const baseUrl = env("NEXT_PUBLIC_BASE_URL");

  const { data: animes } = await axios.get(
    `https://api.jikan.moe/v4/top/anime?sfw=true`,
  );

  const animesEntries = animes.data.map((anime) => ({
    url: `${baseUrl}/anime/details/${anime.mal_id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/anime`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/anime/top`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/anime/children`,
      lastModified: new Date(),
    },
    ...animesEntries,
  ];
}
