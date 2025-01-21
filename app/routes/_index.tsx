import { useRef, useState } from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "XXXTENTANCION" },
    { name: "description", content: "Welcome to XXXTENTANCION!" },
  ];
};

import kidJosh from "/assets/grid/kid.png";
import logoM from "/logoM.svg";
import him from "/assets/tenten.jpg";
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

      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-16 bg-[#f8f8f8]">
        <header className="flex flex-col md:w-11/12 w-full h-full justify-center md:items-start items-center gap-9 relative md:pt-10 pt-0">
          <img src={logoM} alt="" className="md:w-1/2 w-11/12 md:relative absolute top-5" />
          <img src={him} alt="xxxtentancion" className="md:flex hidden" />
          <img src={kidJosh} alt="xxxtentancion" className="md:hidden flex" />
        </header>
      </div>

      <div className="min-h-screen w-full md:flex hidden flex-col items-center justify-center gap-16 bg-[#f8f8f8]">
        <header className="flex flex-col w-11/12 h-full justify-center gap-9 relative pb-10">
          <img src={him} alt="xxxtentancion" className="rotate-180 -scale-x-100" />
          <img src={logoM} alt="" className="w-1/2" />
        </header>
      </div>

      <div className="flex md:flex-row flex-col min-h-screen bg-black">
        <div className="md:w-1/4 w-full md:h-screen h-auto">
          <div className="w-full md:h-2/6 h-64 bgHoverSecond">hello</div>
          <div className="w-full md:h-4/6 h-64 bgHoverFour">hello</div>
        </div>
        <div className="flex md:w-1/4 w-full md:h-screen min-h-96 relative items-center justify-center bgHoverFirst">
          <span className="text-2xl font-semibold absolute top-10">Young Jahseh</span>
        </div>
        <div className="md:w-1/4 w-full md:h-screen h-auto">
          <div className="w-full md:h-4/6 h-64 bgHoverFour">hello</div>
          <div className="w-full md:h-2/6 h-64 bgHoverSecond">hello</div>
        </div>
        <div className="md:flex hidden md:w-1/4 w-full h-screen relative items-center justify-center bgHoverKid">
          <span className="text-2xl font-semibold absolute top-10">Kid Jahseh</span>
        </div>
      </div>

      {/* <div className="flex flex-col gap-10 py-20 bg-black">
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
      </div> */}

      <div className="min-h-96 w-full flex flex-col items-center justify-center py-24 gap-16 bg-tentan">
        <header className="flex flex-col w-11/12 h-full justify-center gap-9 relative">
          <img src={logoM} alt="" />
        </header>
      </div>

      <div className="flex flex-col gap-10 py-20 bg-white text-black">
        <div className="text-center text-2xl uppercase font-bold text-black">Personal Favs</div>
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

          {/* SAD! Song */}
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

          {/* Look At Me! Song */}
          <div className="relative md:w-80 w-full md:h-80 h-auto flex flex-col items-center justify-center shadow text-white italic primaryCard">
            <img src={cover} alt="" className="md:w-72 w-10/12" />
            <div className="flex absolute h-full w-full items-center justify-center text-2xl font-medium bg-[#00000074] secondaryCard">
              <button
                onClick={() => togglePlayback("look-at-me")}
                className="absolute bottom-1/2"
              >
                {isPlaying["look-at-me"] ? (
                  <PauseIcon className="h-8 w-8" />
                ) : (
                  <PlayIcon className="h-8 w-8" />
                )}
              </button>
              <div className="mt-8">Look At Me!</div>
            </div>
            <audio
              ref={(el) => (audioRefs.current["look-at-me"] = el)}
            >
              <source src="/music/Look At Me!.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>

        </div>
      </div>

    </div>
  );
}