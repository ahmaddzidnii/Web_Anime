import Link from "next/link";

import { getCharacterById } from "@/services/anime.service";
import Image from "next/image";

export const CharactersComponent = async ({ params }) => {
  const characters = await getCharacterById(params.id);
  return (
    <div>
      <article className="w-full bg-slate-300 py-5 rounded-lg p-2 hidden md:block">
        <div className="flex flex-col gap-y-3">
          {characters?.map((character, idx) => (
            <div
              key={idx}
              className="h-auto flex justify-between items-start bordert-t border-b py-2"
            >
              <div className="flex items-center gap-x-3">
                <Image
                  src={character?.character.images.jpg.image_url}
                  alt={character?.character.name}
                  className="rounded-sm"
                  width={50}
                  height={76}
                  quality={100}
                />
                <div className="flex flex-col justify-between">
                  <Link
                    className="text-slate-800 text-xs font-bold "
                    href={character?.character.url}
                  >
                    {character?.character.name}
                  </Link>
                  <span className="text-slate-800 text-xs">
                    {character?.role}
                  </span>
                  <span className="text-slate-800 text-xs">
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
                        className="text-slate-800 text-xs font-bold "
                        href={voice?.person.url}
                      >
                        {voice?.person.name}
                      </Link>
                      <span className="text-slate-800 text-xs">
                        {voice?.language}
                      </span>
                    </div>
                    <Image
                      src={voice?.person.images.jpg.image_url}
                      alt={voice?.person.name}
                      className="rounded-sm"
                      width={50}
                      height={76}
                      quality={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Mobile */}
      <MobileCharacterComponent characters={characters} />
    </div>
  );
};

const MobileCharacterComponent = ({ characters }) => {
  return (
    <article className="w-full bg-slate-300 py-5 rounded-lg p-2  md:hidden">
      <div className="flex flex-col gap-y-3">
        {characters?.map((character, idx) => (
          <div
            key={idx}
            className="h-auto bordert-t border-b py-2"
          >
            <div className="flex items-center gap-x-3">
              <Image
                src={character?.character.images.jpg.image_url}
                alt={character?.character.name}
                className="rounded-sm"
                width={50}
                height={76}
                quality={100}
              />
              <div className="flex flex-col justify-between">
                <Link
                  className="text-slate-800 text-xs font-bold "
                  href={character?.character.url}
                >
                  {character?.character.name}
                </Link>
                <span className="text-slate-800 text-xs">
                  {character?.role}
                </span>
                <span className="text-slate-800 text-xs">
                  Voice:
                  <Link
                    href={`/person/${character?.voice_actors[0]?.person.id}`}
                    className="text-slate-800 font-semibold"
                  >
                    {character?.voice_actors[0]?.person.name}
                  </Link>
                  &#40;
                  {character?.voice_actors[0]?.language}&#41;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
