import { DetailComponent } from "./_components/detail-component";
import { AddList } from "@/components/list/add-list";
import { TitlesSection } from "./_components/titles-section";

export const DetailAnimePage = ({ api }) => {
  return (
    <main className="space-y-5 p-1">
      <h1 className=" text-lg font-bold lg:text-xl xl:text-2xl">
        {api?.title}
        <span className="italic">&#40;{api?.title_japanese}&#41;</span>
      </h1>
      <div className="flex flex-col justify-center gap-5 md:flex-row">
        <div className="shrink-0 md:max-w-[300px]">
          <img
            src={api?.images.jpg.large_image_url}
            className="w-full rounded-sm shadow-xl md:h-[400px]"
            alt={api?.title}
          />
          <div className="mt-5">
            <AddList withText={true} data={api?.mal_id} />
          </div>
          <div className="mt-5">
            <TitlesSection titles={api?.titles} />
          </div>
        </div>

        <div className=" h-auto w-full">
          <DetailComponent api={api} />
        </div>
      </div>
    </main>
  );
};
