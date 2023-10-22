"use client";

import { BsArrowLeftShort, BsFilePersonFill } from "react-icons/bs";
import { BiSolidUserDetail, BiSolidMoviePlay, BiSolidLike } from "react-icons/bi";
import { MdReviews } from "react-icons/md";
import { useEffect, useState } from "react";
const SideBarDetailAnime = () => {
  // Membuat fungsi untuk menangani perubahan ukuran layar
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const [open, setOpen] = useState(true);
  const dataSideBar = [
    {
      text: "Details",
      icon: <BiSolidUserDetail />,
    },
    {
      text: "Characters",
      icon: <BsFilePersonFill />,
    },
    {
      text: "Episodes",
      icon: <BiSolidMoviePlay />,
    },
    {
      text: "Recommendations",
      icon: <BiSolidLike />,
    },
    {
      text: "Reviews",
      icon: <MdReviews />,
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
    <div className={`max-h-screen border-e-2 relative  p-5 ${open ? "w-72" : "w-20"} duration-300`}>
      <BsArrowLeftShort className={`bg-white text-3xl rounded-full text-slate-500 absolute -right-4 top-0 border border-slate-500 cursor-pointer ${!open && "rotate-180"} hidden md:block`} onClick={() => setOpen(!open)} />

      <ul>
        {dataSideBar.map((d, index) => {
          return (
            <li key={index} className="flex gap-x-4 p-2 items-center cursor-pointer mb-4 rounded-sm text-sm hover:bg-slate-300 dark:hover:text-slate-900">
              <span className="text-2xl block float-left">{d.icon}</span>
              <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>{d.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBarDetailAnime;
