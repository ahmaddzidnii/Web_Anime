export const fetcher = async (query) => {
  const respose = await fetch(
    "https://api.jikan.moe/v4/anime?q=" + query + "&sfw=true"
  );
  const data = await respose.json();
  return data;
};
