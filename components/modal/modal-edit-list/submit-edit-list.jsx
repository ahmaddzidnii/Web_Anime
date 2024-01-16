import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useAddList } from "@/hooks/feature-list/use-mutation-list";

export const SubmitEditList = ({ data }) => {
  const { mutate, isPending } = useAddList();

  const handleClick = () => {
    mutate(data);
  };
  return (
    <Button
      onClick={handleClick}
      className="w-full text-sm sm:text-lg tracking-wide"
      disabled={true}
    >
      {isPending ? <Loader /> : "Perbarui list"}
    </Button>
  );
};
