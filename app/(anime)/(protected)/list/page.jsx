import { Suspense } from "react";

import { ListAnime } from "@/components/list/list-anime";

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
