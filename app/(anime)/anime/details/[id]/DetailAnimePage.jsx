import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DetailAnimePage = () => {
  return (
    <div className="p-7 overflow-y-scroll scrollbar scrollbar-thumb-sky-400 h-full w-full">
      <div className="flex flex-col lg:flex-row gap-x-5">
        <img src="https://placehold.co/300x400" alt="" />
        <div className=" w-full">
          <h1 className="text-3xl font-bold mb-5">
            Judul Anime <span className="italic">Judul japan</span>
          </h1>

          <Card className="w-full">
            <CardContent>
              <div className="flex ">
                <div className="flex flex-col w-1/4 justify-center items-center">
                  <span>Score</span>
                  <h1 className="text-3xl tracking-[5px]">7.62</h1>
                  <p>12.000 users</p>
                </div>
                <div className="grid grid-cols-3 w-3/4">
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailAnimePage;
