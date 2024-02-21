"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MdReviews } from "react-icons/md";
import { BsArrowLeftShort, BsFilePersonFill } from "react-icons/bs";
import {
  BiSolidUserDetail,
  BiSolidMoviePlay,
  BiSolidLike,
} from "react-icons/bi";

import { Skeleton } from "@/components/ui/skeleton";

export const SideBarDetailAnime = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dataSideBar = [
    {
      text: "Details",
      icon: <BiSolidUserDetail />,
      href: "?tab=details",
      isActive:
        tab == null ||
        !["characters", "episodes", "recommendations", "reviews"].includes(tab)
          ? true
          : false,
    },
    {
      text: "Characters",
      icon: <BsFilePersonFill />,
      href: "?tab=characters",
      isActive: tab == "characters" ? true : false,
    },
    {
      text: "Episodes",
      icon: <BiSolidMoviePlay />,
      href: "?tab=episodes",
      isActive: tab == "episodes" ? true : false,
    },
    {
      text: "Recommendations",
      icon: <BiSolidLike />,
      href: "?tab=recommendations",
      isActive: tab == "recommendations" ? true : false,
    },
    {
      text: "Reviews",
      icon: <MdReviews />,
      href: "?tab=reviews",
      isActive: tab == "reviews" ? true : false,
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMounted) {
    return <SidebarSkeleton />;
  }
  return (
    <div
      className={`relative max-h-screen border-e-2 p-2 md:p-5 ${
        open ? "w-72" : "w-14 md:w-20"
      } duration-300`}
    >
      <BsArrowLeftShort
        className={`absolute -right-4 top-0 cursor-pointer rounded-full border border-slate-500 bg-white text-3xl text-slate-500 ${
          !open && "rotate-180"
        } hidden md:block`}
        onClick={() => setOpen(!open)}
      />

      <ul>
        {dataSideBar.map((d, index) => {
          return (
            <Link
              href={d.href}
              key={index}
              className={`mb-4 flex cursor-pointer items-center gap-x-4 rounded-sm p-2 text-sm ${
                d.isActive && "bg-slate-300 dark:text-slate-900"
              } hover:bg-slate-300 dark:hover:text-slate-900`}
            >
              <span className="float-left block text-2xl">{d.icon}</span>
              <span
                className={`flex-1 text-base font-medium duration-300 ${
                  !open && "hidden"
                }`}
              >
                {d.text}
              </span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const SidebarSkeleton = () => {
  return (
    <div className="max-h-screen w-14  border-e-2 p-2 md:w-72 md:p-5">
      <ul>
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            className="mb-4 flex h-10 items-center gap-x-4 rounded-sm p-2"
          />
        ))}
      </ul>
    </div>
  );
};
