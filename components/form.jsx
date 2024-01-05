"use client";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export const Form = () => {
  const inputSearchRef = useRef();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const handleKeyPress = (event) => {
    const notAllowedChars = [
      "#",
      "*",
      "/",
      "\\",
      "?",
      "<",
      ">",
      "|",
      ":",
      ";",
      "'",
      '"',
      "`",
      "{",
      "}",
      "[",
      "]",
      "(",
      ")",
      " ",
    ];

    if (event.key === "Enter" || event.type === "click") {
      const inputValue = inputSearchRef.current.value.trim();
      if (!inputValue) {
        return;
      } else if (
        inputValue.includes("/") ||
        notAllowedChars.some((char) => inputValue.includes(char))
      ) {
        toast.error("Karakter tidak valid");
      } else {
        router.push(`/anime/results?q=${inputSearchRef.current.value}&page=1`);
      }
    }
  };

  return (
    <div className="relative w-3/4 lg:w-1/2">
      <input
        ref={inputSearchRef}
        placeholder="cari anime.."
        className="p-3 rounded-lg w-full bg-transparent border dark:text-gray-200 dark:border-gray-200"
        type="text"
        defaultValue={query}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleKeyPress}>
        <BiSearch className="text-3xl absolute top-3 right-1" />
      </button>
    </div>
  );
};
