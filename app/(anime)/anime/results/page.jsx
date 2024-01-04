import { getAnimeQuery } from "@/services/api";
import CardListAnime from "../_components/cardListAnime";
import { GiPeriscope } from "react-icons/gi";
import Halaman from "@/components/Halaman";
import { PaginationCustom } from "@/components/pagination";

export async function generateMetadata({ searchParams }) {
  return {
    title: {
      absolute: `Result of ${searchParams.q}`,
    },
  };
}

const Page = async ({ searchParams }) => {
  let { q, page } = searchParams;
  if (parseInt(page) < 1 || isNaN(page)) {
    page = 1;
  }
  const resutsSearch = await getAnimeQuery(q, page);
  const { data, pagination } = resutsSearch;

  return (
    <>
      {!q || !data ? (
        <div className="px-3 sm:px-4 md:px-5 lg:px-10 -mt-20">
          <div className=" min-h-screen flex justify-center items-center gap-5">
            <GiPeriscope className="text-4xl" />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  tracking-wide mb-5">
              Tidak ada hasil untuk kata kunci ini.
            </h1>
          </div>
        </div>
      ) : (
        <div className="px-3 sm:px-4 md:px-5 lg:px-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  tracking-wide mb-5">
            Terdapat {pagination?.items.total} hasil pencarian untuk kata kunci
            &quot;{searchParams.q}&quot; :
          </h1>
          <CardListAnime api={data} />
          <div className="my-10">
            <PaginationCustom
              currentPage={page}
              maxPagesToShow={5}
              totalPages={pagination?.last_visible_page}
            />
            {/* <Halaman
              lastVisiblePage={pagination?.last_visible_page}
              currentPage={pagination?.current_page}
              q={q}
            /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
