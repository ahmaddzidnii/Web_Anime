import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useAddListModal } from "@/hooks/use-add-list-modal";

export const InputEpisode = ({ total_episode, isLoading, data }) => {
  const { count, setStatus, setCount, incrementCount } = useAddListModal();

  const handleChangeInputEpisodes = (e) => {
    let value = e.target.value;

    if (value == total_episode) {
      setStatus("C");
    }

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
        {isLoading ? (
          <Skeleton className="h-8 w-8" />
        ) : (
          <span className="text-xs sm:text-sm">/ {data?.data.episodes}</span>
        )}
        <Button variant="ghost" onClick={handleIncreaseEpisodes}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
