import { GiPeriscope } from "react-icons/gi";
import { Suspense } from "react";

import { getAnimeQuery } from "@/services/api";
import { PaginationCustom } from "@/components/pagination";
import { CardListAnime } from "@/components/card-list-anime";

export async function generateMetadata({ searchParams }) {
  return {
    title: ` ${searchParams.q}`,
  };
}

const Page = async ({ searchParams }) => {
  let { q, page } = searchParams;
  if (parseInt(page) < 1 || isNaN(page)) {
    page = 1;
  }
  const resutsSearch = await getAnimeQuery(q, page);
  const { data, pagination } = resutsSearch;

  if (data.length === 0) {
    return (
      <div className="-mt-20">
        <div className=" flex min-h-screen items-center justify-center gap-5">
          <GiPeriscope className="text-4xl" />
          <h1 className="mb-5 text-xl font-bold tracking-wide sm:text-2xl  md:text-3xl lg:text-4xl">
            Tidak ada anime yang ditemukan.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-5">
      {!q || !data ? (
        <div className="pt-5">
          <div className=" flex min-h-screen items-center justify-center gap-5">
            <GiPeriscope className="text-4xl" />
            <h1 className="mb-5 text-xl font-bold tracking-wide sm:text-2xl  md:text-3xl lg:text-4xl">
              Tidak ada hasil untuk kata kunci ini.
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="mb-5 text-xl font-bold tracking-wide sm:text-2xl  md:text-3xl lg:text-4xl">
            Terdapat {pagination?.items.total} hasil pencarian untuk kata kunci
            &quot;{searchParams.q}&quot; :
          </h1>
          <CardListAnime data={data} />
          <div className="my-10">
            <Suspense fallback={null}>
              <PaginationCustom
                currentPage={page}
                maxPagesToShow={5}
                totalPages={pagination?.last_visible_page}
              />
            </Suspense>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
