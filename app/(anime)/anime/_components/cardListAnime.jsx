import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CardListAnime = ({ api }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
      {api &&
        api.map((data) => {
          return (
            <Card key={data.mal_id} className="shadow-lg">
              <div className="w-full h-[300px]  overflow-hidden">
                <img loading="lazy" className="w-full h-full object-cover" src={data.images.webp.image_url} alt="" />
              </div>
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>Jumlah Episode : {data.episodes}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
    </div>
  );
};

export default CardListAnime;
