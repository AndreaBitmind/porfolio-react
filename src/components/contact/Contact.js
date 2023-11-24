import React from "react";
import Title from "../layouts/Title";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Let's Connect " />
      </div>
      <div className="w-full h-full flex gap-8 lg:items-center justify-center">
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
    </section>
  );
};

export default Contact;
