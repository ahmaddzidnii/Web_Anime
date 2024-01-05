export const fetcher = async (query) => {
  const respose = await fetch(
    "https://api.jikan.moe/v4/anime?q=" + query + "&sfw=true&limit=10"
  );
  const data = await respose.json();
  return data;
};
