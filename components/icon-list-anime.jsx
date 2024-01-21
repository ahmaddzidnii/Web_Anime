import { FaList } from "react-icons/fa";
import Link from "next/link";

export const IconListAnime = () => {
  return (
    <nav>
      <Link
        href="/list"
        className="relative"
      >
        <FaList className="h-[1.2rem] w-[1.2rem] md:w-6 md:h-6" />
      </Link>
    </nav>
  );
};
