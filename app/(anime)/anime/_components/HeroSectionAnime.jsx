import Image from "next/image";
import Form from "./Form";

const HeroSectionAnime = ({ q }) => {
  return (
    <div className="flex flex-col items-center my-5">
      <Image className="dark:hidden mb-2" src="/logo.svg" height="100" width="100" alt="logo" />
      <Image className="hidden dark:block mb-2" src="/logo-dark.svg" height="100" width="100" alt="logo" />
      <Form q={q} />
    </div>
  );
};

export default HeroSectionAnime;
