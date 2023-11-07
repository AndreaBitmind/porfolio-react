import React from "react";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  SiGithub,
  SiGmail,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/AndreaBitmind"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:andrea.maort@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/andreamaort/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST WEB STACK
        </h2>
        <div className="flex gap-4">
          <span className="stackIcon">
            <SiTypescript />
          </span>
          <span className="stackIcon">
            <FaReact />
          </span>
          {/*           <span className="bannerIcon">
            <FaNodeJs />
          </span> */}
          <span className="stackIcon">
            <SiHtml5 />
          </span>
          <span className="stackIcon">
            <SiCss3 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
