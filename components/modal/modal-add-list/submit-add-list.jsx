import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useAddList } from "@/hooks/feature-list/use-mutation-list";

export const SubmitAddList = ({ data, isLoadingFetchData }) => {
  const { mutate, isPending } = useAddList();

  const handleClick = () => {
    mutate(data);
  };
  return (
    <Button
      onClick={handleClick}
      className="w-full text-sm tracking-wide sm:text-lg"
      disabled={isPending || isLoadingFetchData}
    >
      {isPending ? <Loader /> : "Tambahkan ke list"}
    </Button>
  );
};
