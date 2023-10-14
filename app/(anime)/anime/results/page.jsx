import { getAnimeQuery } from "@/services/api";
import CardListAnime from "../_components/cardListAnime";
import Footer from "@/app/(root)/_components/Footer";
import Halaman from "./_components/Halaman";

export async function generateMetadata({ searchParams }) {
  return {
    title: {
      absolute: `Result of ${searchParams.q}`,
    },
  };
}

const Page = async ({ searchParams }) => {
  const { q, page } = searchParams;
  console.log(page);
  const resutsSearch = await getAnimeQuery(q, page);
  const { data, pagination } = resutsSearch;

  return (
    <>
      <div className="p-5">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  tracking-wide mb-5">
          Terdapat {pagination?.items.total} hasil pencarian untuk kata kunci "{searchParams.q}" :
        </h1>
        <CardListAnime api={data} />
        <Halaman lastVisiblePage={pagination?.last_visible_page} currentPage={pagination?.current_page} q={q} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
