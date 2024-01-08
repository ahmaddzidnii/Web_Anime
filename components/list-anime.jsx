"use client";
import { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";

import { Skeleton } from "@/components/ui/skeleton";
import { useList } from "@/store/use-list";
import Link from "next/link";

export const ListAnime = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { items } = useList();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Skeleton className="h-[1.2rem] w-[1.2rem] md:w-7 md:h-7 bg-slate-300" />
    );
  }
  return (
    <Link
      href="/list"
      className="relative"
    >
      <FaList className="h-[1.2rem] w-[1.2rem] md:w-6 md:h-6" />
      {items.length > 0 && (
        <div className="absolute -top-1 -right-2 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center">
          <span className="text-[0.6rem] font-semibold text-slate-50">
            {items.length}
          </span>
        </div>
      )}
    </Link>
  );
};
