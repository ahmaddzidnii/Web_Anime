
const HeadingAnime = ({ title, href }) => {
  return (
    <div className="flex flex-row  justify-between items-center  mb-5">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  tracking-wide">{title}</h1>
      <h2 className="font-bold">Lihat Semua</h2>
    </div>
  );
};

export default HeadingAnime;
