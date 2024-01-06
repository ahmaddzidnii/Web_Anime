import Link from "next/link";

import { getCharacterById } from "@/services/anime.service";

export const CharactersComponent = async ({ params }) => {
  const characters = await getCharacterById(params.id);
  return (
    <div className="w-full bg-slate-300 py-5 rounded-lg p-2">
      <div className="flex flex-col gap-y-3">
        {characters?.map((character, idx) => (
          <div
            key={idx}
            className="h-auto flex justify-between items-start bordert-t border-b py-2"
          >
            <div className="flex items-center gap-x-3">
              <img
                src={character?.character.images.jpg.image_url}
                alt={character?.character.name}
                className="w-[50px] h-[76px] rounded-sm"
              />
              <div className="flex flex-col justify-between">
                <Link
                  className="text-slate-800 font-bold underline"
                  href={character?.character.url}
                >
                  {character?.character.name}
                </Link>
                <span className="text-slate-800">{character?.role}</span>
                <span className="text-slate-800">
                  {character?.favorites} Favorites
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-y-3">
              {character?.voice_actors.map((voice, idx) => (
                <div
                  className="w-full flex items-center justify-end gap-x-3"
                  key={idx}
                >
                  <div className="flex flex-col items-end justify-between">
                    <Link
                      className="text-slate-800 font-bold underline"
                      href={voice?.person.url}
                    >
                      {voice?.person.name}
                    </Link>
                    <span className="text-slate-800">{voice?.language}</span>
                  </div>
                  <img
                    src={voice?.person.images.jpg.image_url}
                    alt={voice?.person.name}
                    className="w-[50px] h-[76px] rounded-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
