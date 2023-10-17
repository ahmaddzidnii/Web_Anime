import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image priority className="dark:hidden object-contain" src="/documents.png" fill alt="documents" />
          <Image priority className="hidden dark:block object-contain" src="/documents-dark.png" fill alt="documents" />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image priority src="/reading.png" fill className="dark:hidden object-contain" alt="reading" />
          <Image priority src="/reading-dark.png" fill className="hidden dark:block object-contain" alt="reading" />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
