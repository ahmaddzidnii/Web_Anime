import { Button } from "@/components/ui/button";
import Link from "next/link";

const Halaman = ({ lastVisiblePage, currentPage, q }) => {
  let i = [];
  for (let index = 1; index <= lastVisiblePage; index++) {
    i.push(index);
  }
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="mb-2 text-center">Halaman</h1> */}
      <div className="flex flex-wrap gap-3 lg:gap-5 justify-center">
        {i.map((i, index) => (
          <Button variant={currentPage === i ? "" : "outline"} key={index} asChild className="mb-2">
            <Link href={q == undefined ? `?page=${i}` : `/anime/results?q=${q}&page=${i}`}>{i}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Halaman;
