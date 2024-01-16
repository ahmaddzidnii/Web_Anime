import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useEditListModal } from "@/hooks/use-edit-list-modal";

export const InputEpisode = ({ total_episode, isLoading, data }) => {
  const { count, setStatus, setCount, incrementCount } = useEditListModal();

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
        className="w-[60px]"
        value={count}
        onChange={handleChangeInputEpisodes}
      />

      <div className="flex items-center gap-x-2">
        {isLoading ? (
          <Skeleton className="w-8 h-8" />
        ) : (
          <span>/ {data?.total_episode}</span>
        )}
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
