"use client";

import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useDebounce } from "use-debounce";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { fetcher } from "@/lib/fetcher";

export const DialogSearch = () => {
  const [query, setQuery] = useState("naruto");
  const [debouncedValue] = useDebounce(query, 500);
  const [data, setData] = useState([]);

  const buttonRef = useRef(null);
  useHotkeys(
    "ctrl+k",
    () => {
      buttonRef?.current?.click();
    },
    { preventDefault: true }
  );

  const fetchData = async () => {
    const { data } = await fetcher(debouncedValue);
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, [debouncedValue]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          ref={buttonRef}
          variant="outline"
          className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-10 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        >
          <span className="hidden lg:block">Search Anime..</span>
          <span className="hidden md:block lg:hidden">Search</span>
          <kbd className="pointer-events-none absolute right-[0.5rem] top-[0.5rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div>
          <div className="flex items-center gap-x-3 py-3 border-b">
            <Search />
            <input
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Ketikkan perintah atau cari..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div
            className="max-h-[400px] overflow-y-auto overflow-x-hidden "
            role="checkbox"
          >
            <div
              role="button"
              className="flex flex-col gap-y-5"
            >
              {data?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-x-5"
                >
                  <img
                    src={item.images.jpg.image_url}
                    alt={item.title}
                    className="w-12 h-16 object-cover"
                  />
                  <span>{item.title}</span>
                  <span>{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
