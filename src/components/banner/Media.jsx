import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/AndreaBitmind"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <SiGithub />
            </span>
          </a>
          <a href="mailto:andrea.maort@gmail.com">
            <span className="bannerIcon text-mailColor">
              <SiGmail />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/andreamaort/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon text-linkedinColor">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
