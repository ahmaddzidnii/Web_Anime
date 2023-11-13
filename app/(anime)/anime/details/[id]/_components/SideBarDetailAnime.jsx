"use client";

import { BsArrowLeftShort, BsFilePersonFill } from "react-icons/bs";
import { BiSolidUserDetail, BiSolidMoviePlay, BiSolidLike } from "react-icons/bi";
import { MdReviews } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const SideBarDetailAnime = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  // Membuat fungsi untuk menangani perubahan ukuran layar
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const [open, setOpen] = useState(false);
  const dataSideBar = [
    {
      text: "Details",
      icon: <BiSolidUserDetail />,
      href: "?tab=details",
      isActive: tab == null || tab == "details" ? true : false,
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

  // Menambahkan event listener untuk event resize saat komponen dimuat
  useEffect(() => {
    handleResize(); // Panggil fungsi handleResize saat komponen dimuat untuk mengatur state awal

    window.addEventListener("resize", handleResize);

    // Membersihkan event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`max-h-screen border-e-2 relative p-2 md:p-5 ${open ? "w-72" : "w-14 md:w-20"} duration-300`}>
      <BsArrowLeftShort className={`bg-white text-3xl rounded-full text-slate-500 absolute -right-4 top-0 border border-slate-500 cursor-pointer ${!open && "rotate-180"} hidden md:block`} onClick={() => setOpen(!open)} />

      <ul>
        {dataSideBar.map((d, index) => {
          return (
            <Link href={d.href} key={index} className={`flex gap-x-4 p-2 items-center cursor-pointer mb-4 rounded-sm text-sm ${d.isActive && "bg-slate-300 dark:text-slate-900"} hover:bg-slate-300 dark:hover:text-slate-900`}>
              <span className="text-2xl block float-left">{d.icon}</span>
              <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>{d.text}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarDetailAnime;
