export const HeadingSkeleton = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-5">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-10 w-64 rounded"></div>
      </div>
      <div className="animate-pulse">
        <div className="bg-gray-300 h-10 w-20 rounded"></div>
      </div>
    </div>
  );
};
export const HeroSkeleton = () => {
  return (
    <div className="flex flex-col items-center my-5">
      <div className="animate-pulse bg-gray-300 rounded-full h-12 w-12 mb-2"></div>
      <div className="animate-pulse bg-gray-300 h-8 w-36 rounded mb-2"></div>
      <div className="animate-pulse bg-gray-300 h-8 w-36 rounded mb-2"></div>
    </div>
  );
};
