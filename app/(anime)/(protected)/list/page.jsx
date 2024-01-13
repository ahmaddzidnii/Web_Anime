import { ListAnime } from "@/components/list/list-anime";
import { Suspense } from "react";

const ListPage = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<></>}>
        <ListAnime />
      </Suspense>
    </div>
  );
};

export default ListPage;
