"use client";

import { Search } from "lucide-react";
import { useHotkeys } from "react-hotkeys-hook";

import { useSearchModal } from "@/hooks/use-search-modal";

export const ButtonModalSearch = () => {
  const searchModal = useSearchModal();

  useHotkeys(
    "ctrl+k",
    () => {
      searchModal.onOpen();
    },
    { preventDefault: true },
  );

  return (
    <>
      <div
        className="ms-auto md:hidden"
        role="button"
        onClick={() => {
          searchModal.onOpen();
        }}
      >
        <Search className="h-[1.4rem] w-[1.4rem]" />
      </div>

      <div className="hidden md:block">
        <div
          role="button"
          onClick={() => {
            searchModal.onOpen();
          }}
          className=" relative inline-flex h-10 w-full items-center justify-start whitespace-nowrap rounded-[0.5rem] border border-input bg-background px-4 py-2 text-sm font-normal text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-64"
        >
          <span className="hidden lg:block">Search Anime..</span>
          <span className="hidden md:block lg:hidden">Search</span>
          <kbd className="pointer-events-none absolute right-[0.5rem] top-[0.5rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted p-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">CTRL + </span>K
          </kbd>
        </div>
      </div>
    </>
  );
};
