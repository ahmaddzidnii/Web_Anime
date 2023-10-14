import { Button } from "@/components/ui/button";
import Link from "next/link";

const Halaman = ({ lastVisiblePage, currentPage, q }) => {
  let i = [];
  for (let index = 1; index <= lastVisiblePage; index++) {
    i.push(index);
  }
  return (
    <div className="mt-5">
      <h1>Halaman</h1>
      <div className="flex flex-row gap-5">
        {i.map((i, index) => {
          return (
            <Button variant={currentPage === i ? "" : "outline"} key={index} asChild>
              <Link href={`/anime/results?q=${q}&page=${i}`}>{i}</Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Halaman;
