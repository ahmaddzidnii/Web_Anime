import { FaList } from "react-icons/fa";
import Link from "next/link";

export const IconListAnime = () => {
  return (
    <nav>
      <Link aria-label="List" href="/list" className="relative">
        <FaList className="h-[1.2rem] w-[1.2rem] md:h-6 md:w-6" />
      </Link>
    </nav>
  );
};
