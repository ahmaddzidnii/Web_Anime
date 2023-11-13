"use client";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const Form = ({ q }) => {
  const inputSearchRef = useRef();
  const router = useRouter();
  const { toast } = useToast();

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      const inputValue = inputSearchRef.current.value.trim();
      if (!inputValue) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Kolom pencarian tidak boleh kosong",
        });
      } else if (inputValue.length < 2) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Kolom pencarian harus berisi minimal 2 karakter",
        });
      } else {
        router.push(`/anime/results?q=${inputSearchRef.current.value}&page=1`);
      }
    }
  };

  return (
    <div className="relative w-3/4 lg:w-1/2">
      <input ref={inputSearchRef} placeholder={q ? q : "cari anime.."} className="p-3 rounded-lg w-full bg-transparent border dark:text-gray-200 dark:border-gray-200" type="text" onKeyDown={handleKeyPress} />
      <button onClick={handleKeyPress}>
        <BiSearch className="text-3xl absolute top-3 right-1" />
      </button>
    </div>
  );
};

export default Form;
