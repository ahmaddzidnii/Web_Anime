import Image from "next/image";
import Form from "../../../../components/form";

const HeroSectionAnime = ({ q }) => {
  return (
    <div className="my-5 flex flex-col items-center">
      <Image
        className="mb-2 dark:hidden"
        src="/logo.svg"
        height="100"
        width="100"
        alt="logo"
      />
      <Image
        className="mb-2 hidden dark:block"
        src="/logo-dark.svg"
        height="100"
        width="100"
        alt="logo"
      />
      <Form q={q} />
    </div>
  );
};

export default HeroSectionAnime;
