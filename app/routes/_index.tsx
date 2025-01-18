import { useRef, useState } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "XXXTENTANCION" },
    { name: "description", content: "Welcome to XXXTENTANCION!" },
  ];
};

import logo from "/logo.svg";
import logoM from "/logoM.svg";
import cover from "/assets/cover.png";

import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";

export default function Index() {
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const togglePlayback = (songKey: string) => {
    const currentAudio = audioRefs.current[songKey];
    if (!currentAudio) return;

    if (isPlaying[songKey]) {
      currentAudio.pause();
      setIsPlaying((prevState) => ({
        ...prevState,
        [songKey]: false,
      }));
    } else {
      Object.keys(audioRefs.current).forEach((key) => {
        if (audioRefs.current[key]) {
          audioRefs.current[key]!.pause();
          audioRefs.current[key]!.currentTime = 0;
        }
      });

      currentAudio.play();
      setIsPlaying(() =>
        Object.keys(audioRefs.current).reduce(
          (acc, key) => ({ ...acc, [key]: key === songKey }),
          {}
        )
      );
    }
  };

  return (
    <div className="flex h-full w-full flex-col">

      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-16 bg-tentan">
        <header className="flex flex-col w-11/12 justify-center gap-9">
          <img src={logoM} alt="" />
        </header>
      </div>

      <div className="flex flex-col gap-10 py-20">
        <div className="text-center text-2xl uppercase font-bold">Journey</div>
        <div className="flex flex-row gap-10 flex-wrap w-full justify-center items-center">
          <div className="md:w-96 w-full md:h-80 h-52 flex flex-col items-center justify-center bgHoverCard">
            <img src={logo} alt="" className="md:w-44 w-10/12" />
          </div>
          <div className="md:w-96 w-full md:h-80 h-52 flex flex-col items-center justify-center bgHoverCard">
            <img src={logo} alt="" className="md:w-44 w-10/12" />
          </div>
          <div className="md:w-96 w-full md:h-80 h-52 flex flex-col items-center justify-center bgHoverCard">
            <img src={logo} alt="" className="md:w-44 w-10/12" />
          </div>
          <div className="md:w-96 w-full md:h-80 h-52 flex flex-col items-center justify-center bgHoverCard">
            <img src={logo} alt="" className="md:w-44 w-10/12" />
          </div>
          <div className="md:w-96 w-full md:h-80 h-52 flex flex-col items-center justify-center bgHoverCard">
            <img src={logo} alt="" className="md:w-44 w-10/12" />
          </div>
          <div className="md:w-96 w-full md:h-80 h-52 flex flex-col items-center justify-center bgHoverCard">
            <img src={logo} alt="" className="md:w-44 w-10/12" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 py-20 bg-white text-black">
        <div className="text-center text-2xl uppercase font-bold text-black">Songs</div>
        <div className="flex flex-row gap-10 flex-wrap w-full justify-center items-center">

          {/* Changes Song */}
          <div className="relative md:w-80 w-full md:h-80 h-auto flex flex-col items-center justify-center shadow text-white italic primaryCard">
            <img src={cover} alt="" className="md:w-72 w-10/12" />
            <div className="flex absolute h-full w-full items-center justify-center text-2xl font-medium bg-[#00000074] secondaryCard">
              <button
                onClick={() => togglePlayback("changes")}
                className="absolute bottom-1/2"
              >
                {isPlaying["changes"] ? (
                  <PauseIcon className="h-8 w-8" />
                ) : (
                  <PlayIcon className="h-8 w-8" />
                )}
              </button>
              <div className="mt-8">Changes</div>
            </div>
            <audio
              ref={(el) => (audioRefs.current["changes"] = el)}
            >
              <source src="/music/changes.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* SAD Song */}
          <div className="relative md:w-80 w-full md:h-80 h-auto flex flex-col items-center justify-center shadow text-white italic primaryCard">
            <img src={cover} alt="" className="md:w-72 w-10/12" />
            <div className="flex absolute h-full w-full items-center justify-center text-2xl font-medium bg-[#00000074] secondaryCard">
              <button
                onClick={() => togglePlayback("sad")}
                className="absolute bottom-1/2"
              >
                {isPlaying["sad"] ? (
                  <PauseIcon className="h-8 w-8" />
                ) : (
                  <PlayIcon className="h-8 w-8" />
                )}
              </button>
              <div className="mt-8">SAD</div>
            </div>
            <audio
              ref={(el) => (audioRefs.current["sad"] = el)}
            >
              <source src="/music/SAD!.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>

        </div>
      </div>

    </div>
  );
}