"use client";

import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useDebounce } from "use-debounce";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { SearchList } from "./search-list";

export const DialogSearch = () => {
  const [query, setQuery] = useState("");
  const [debouncedValue] = useDebounce(query, 500);

  const buttonRef = useRef(null);
  useHotkeys(
    "ctrl+k",
    () => {
      buttonRef?.current?.click();
    },
    { preventDefault: true }
  );

  return (
    <Dialog>
      <DialogTrigger>
        <div className="md:hidden">
          <Search className="h-7 w-7" />
        </div>

        <div className="hidden md:block">
          <div
            ref={buttonRef}
            className=" inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-10 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
          >
            <span className="hidden lg:block">Search Anime..</span>
            <span className="hidden md:block lg:hidden">Search</span>
            <kbd className="pointer-events-none absolute right-[0.5rem] top-[0.5rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted p-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div>
          <div className="flex items-center gap-x-3 py-3 border-b">
            <Search />
            <input
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Ketikkan perintah atau cari..."
              onChange={(e) => setQuery(e.target.value)}
              defaultValue={debouncedValue}
            />
          </div>
        </div>

        <div className="max-h-[300px] overflow-y-auto overflow-x-hidden ">
          <SearchList
            query={debouncedValue}
            buttonRef={buttonRef}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
