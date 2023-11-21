import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "former Project Manager."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Andrea Martinez</span>
        </h1>
        <h2 className="text-4xl font-bold text-white h-20 xl:h-10">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#7E20D7"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a frontend developer with project management background, bringing
          a unique mix of technical and organizational skills to help projects
          succeed. Skilled in web development and always excited to learn and
          grow in the field.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am actively involved in the tech community, both as a mentee at
          Step4ward and by attending conferences and events such as DevBCN,
          Barcelona Software Crafters, and other meetups in the BCN Engineering
          Community.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
