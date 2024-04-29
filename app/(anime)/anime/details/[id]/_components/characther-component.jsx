import Link from "next/link";

import { getCharacterById } from "@/services/anime.service";
import { ImageComponent } from "@/components/image";

export const CharactersComponent = async ({ data }) => {
  const characters = await getCharacterById(data.mal_id);
  return (
    <div>
      <article className="hidden w-full rounded-lg bg-slate-300 py-5 md:block">
        <div className="flex flex-col gap-y-3">
          {characters?.length != 0 ? (
            characters?.map((character, idx) => (
              <div
                key={idx}
                className="bordert-t flex h-auto items-start justify-between border-b py-2"
              >
                <div className="flex items-center gap-x-3">
                  <ImageComponent
                    alt={character?.character.name}
                    src={character?.character.images.jpg.image_url}
                    className="h-[76px] w-[50px] rounded-sm"
                  />
                  <div className="flex flex-col justify-between">
                    <Link
                      className="text-xs font-bold text-slate-800 "
                      href={character?.character.url}
                    >
                      {character?.character.name}
                    </Link>
                    <span className="text-xs text-slate-800">
                      {character?.role}
                    </span>
                    <span className="text-xs text-slate-800">
                      {character?.favorites} Favorites
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-y-3">
                  {character?.voice_actors.map((voice, idx) => (
                    <div
                      className="flex w-full items-center justify-end gap-x-3"
                      key={idx}
                    >
                      <div className="flex flex-col items-end justify-between">
                        <Link
                          className="text-xs font-bold text-slate-800 "
                          href={voice?.person.url}
                        >
                          {voice?.person.name}
                        </Link>
                        <span className="text-xs text-slate-800">
                          {voice?.language}
                        </span>
                      </div>

                      <ImageComponent
                        src={voice?.person.images.jpg.image_url}
                        alt={voice?.person.name}
                        className="h-[76px] w-[50px] rounded-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-800">Tidak ada data karakter..</p>
          )}
        </div>
      </article>

      {/* Mobile */}
      <MobileCharacterComponent characters={characters} />
    </div>
  );
};

const MobileCharacterComponent = ({ characters }) => {
  return (
    <article className="w-full rounded-lg bg-slate-300  py-5  md:hidden">
      {characters.length != 0 ? (
        <div className="flex flex-col gap-y-3">
          {characters?.map((character, idx) => (
            <div key={idx} className="bordert-t h-auto border-b py-2">
              <div className="flex items-center gap-x-3">
                <ImageComponent
                  alt={character?.character.name}
                  src={character?.character.images.jpg.image_url}
                  className="h-[76px] w-[50px] rounded-sm"
                />
                <div className="flex flex-col justify-between">
                  <Link
                    className="text-xs font-bold text-slate-800 "
                    href={character?.character.url}
                  >
                    {character?.character.name}
                  </Link>
                  <span className="text-xs text-slate-800">
                    {character?.role}
                  </span>
                  <span className="text-xs text-slate-800">
                    Voice:
                    <Link
                      href={`/person/${character?.voice_actors[0]?.person.id}`}
                      className="font-semibold text-slate-800"
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
      ) : (
        <p className=" text-slate-800">Tidak ada data karakter..</p>
      )}
    </article>
  );
};
