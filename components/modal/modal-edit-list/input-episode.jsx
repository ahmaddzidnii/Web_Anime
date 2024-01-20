import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEditListModal } from "@/hooks/use-edit-list-modal";

export const InputEpisode = () => {
  const { count, setCount, incrementCount, totalEpisode } = useEditListModal();

  const handleChangeInputEpisodes = (e) => {
    let value = e.target.value;

    setCount(value);
  };

  const handleIncreaseEpisodes = () => {
    incrementCount();
  };

  return (
    <>
      <Input
        type="number"
        placeholder="0"
        min="1"
        className="w-[50px] sm:w-[60px]"
        value={count}
        onChange={handleChangeInputEpisodes}
      />

      <div className="flex items-center gap-x-2">
        <span className="text-xs sm:text-sm">/ {totalEpisode}</span>

        <Button
          variant="ghost"
          onClick={handleIncreaseEpisodes}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
