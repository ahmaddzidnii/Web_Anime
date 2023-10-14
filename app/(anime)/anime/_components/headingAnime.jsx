import Form from "./Form";

const HeadingAnime = ({ title, useSearchFields }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start sm:justify-between  sm:items-center mb-5">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  tracking-wide">{title}</h1>
      {useSearchFields ? <Form /> : null}
    </div>
  );
};

export default HeadingAnime;
