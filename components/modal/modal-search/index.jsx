"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "use-debounce";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { useSearchModal } from "@/hooks/use-search-modal";
import { SearchList } from "./search-list";

export const ModalSearch = () => {
  const isOpen = useSearchModal((state) => state.isOpen);
  const onClose = useSearchModal((state) => state.onClose);

  const [query, setQuery] = useState("");
  const [debouncedValue] = useDebounce(query, 500);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <div>
          <div className="flex items-center gap-x-3 py-3 border-b">
            <Search />
            <input
              className=" flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Ketikkan perintah atau cari..."
              onChange={(e) => setQuery(e.target.value)}
              defaultValue={debouncedValue}
            />
          </div>
        </div>

        <div className="max-h-[300px] overflow-y-auto overflow-x-hidden ">
          <SearchList query={debouncedValue} />
        </div>
        <DialogClose asChild>
          <Button
            onClick={onClose}
            variant="ghost"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
