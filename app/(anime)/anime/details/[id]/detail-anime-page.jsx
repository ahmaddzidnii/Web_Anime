import { DetailComponent } from "./_components/detail-component";
import { AddList } from "@/components/list/add-list";

export const DetailAnimePage = ({ api }) => {
  return (
    <main className=" p-1">
      <div className="flex flex-col justify-center gap-5 md:flex-row">
        <div className="shrink-0">
          <img
            src={api?.images.jpg.large_image_url}
            className="w-full rounded-sm md:h-[400px]"
            alt={api?.title}
          />
          <div className="my-2">
            <AddList withText={true} data={api?.mal_id} />
          </div>
        </div>

        <div className=" h-auto w-full">
          <h1 className=" mb-5 text-lg font-bold lg:text-xl xl:text-2xl">
            {api?.title} <span className="italic">{api?.title_japanese}</span>
          </h1>

          <DetailComponent api={api} />
        </div>
      </div>
    </main>
  );
};
