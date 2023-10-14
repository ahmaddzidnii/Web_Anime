"use client";
import { BiSearch } from "react-icons/bi";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Form = () => {
  const inputSearchRef = useRef();
  const router = useRouter();
  const { toast } = useToast();

  const Alert = () => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "Kolom pencarian tidak boleh kosong",
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      if (!inputSearchRef.current.value) {
        Alert();
      } else {
        router.push(`/anime/results?q=${inputSearchRef.current.value}&page=1`);
      }
    }
  };

  return (
    <div className="relative w-full sm:w-1/2 mt-2 sm:mt-0">
      <input ref={inputSearchRef} placeholder="cari anime.." className="p-3 rounded-lg w-full bg-transparent border" type="text" onKeyDown={handleKeyPress} />
      <button onClick={handleKeyPress}>
        <BiSearch className="text-3xl absolute top-3 right-1" />
      </button>
    </div>
  );
};

export default Form;
