import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex max-w-5xl flex-col items-center justify-center">
      <div className="flex items-center">
        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
          <Image
            priority
            className="object-contain dark:hidden"
            src="/documents.png"
            fill
            alt="documents"
          />
          <Image
            priority
            className="hidden object-contain dark:block"
            src="/documents-dark.png"
            fill
            alt="documents"
          />
        </div>
        <div className="relative hidden h-[400px] w-[400px] md:block">
          <Image
            priority
            src="/reading.png"
            fill
            className="object-contain dark:hidden"
            alt="reading"
          />
          <Image
            priority
            src="/reading-dark.png"
            fill
            className="hidden object-contain dark:block"
            alt="reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
