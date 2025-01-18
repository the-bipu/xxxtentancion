import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "XXXTENTANCION" },
    { name: "description", content: "Welcome to XXXTENTANCION!" },
  ];
};

import logo from "/logo.svg";
import logoM from "/logoM.svg";

export default function Index() {
  return (
    <div className="flex h-full w-full flex-col">

      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-16 bg-tentan">
        <header className="flex flex-col w-11/12 justify-center gap-9">
          <img src={logoM} alt="" />
        </header>
      </div>

      <div className="min-h-screen flex md:flex-row flex-col w-full justify-center items-center">
        <div className="md:w-1/4 w-full md:h-screen h-52 flex flex-col items-center justify-center bgHoverCard">
          <img src={logo} alt="" className="w-11/12" />
        </div>
        <div className="md:w-1/4 w-full md:h-screen h-52 flex flex-col items-center justify-center bgHoverCard">
          <img src={logo} alt="" className="w-11/12" />
        </div>
        <div className="md:w-1/4 w-full md:h-screen h-52 flex flex-col items-center justify-center bgHoverCard">
          <img src={logo} alt="" className="w-11/12" />
        </div>
        <div className="md:w-1/4 w-full md:h-screen h-52 flex flex-col items-center justify-center bgHoverCard">
          <img src={logo} alt="" className="w-11/12" />
        </div>
      </div>

    </div>
  );
}