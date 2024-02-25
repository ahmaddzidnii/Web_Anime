import { CardSkeleton } from "@/components/skeleton";

export default function LoadingAnime() {
  return (
    <div className=" min-h-screen w-full">
      <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-2 lg:grid-cols-4">
        {new Array(8).fill(0).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
