import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CardListAnime = ({ api }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-1">
      {api &&
        api.map((data) => {
          return (
            <Card key={data.mal_id} className="shadow-lg">
              <div className="w-full h-[300px]  overflow-hidden">
                <img loading="lazy" className="w-full h-full object-cover" src={data.images.webp.image_url} alt="" />
              </div>
              <CardHeader className="flex flex-col justify-between">
                <div className="h-28 md:h-20 lg:h-15">
                  <CardTitle className="text-xl">{data.title}</CardTitle>
                </div>
                <div className="mt-auto">
                  <CardDescription>Jumlah Episode: {data.episodes}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          );
        })}
    </div>
  );
};

export default CardListAnime;
