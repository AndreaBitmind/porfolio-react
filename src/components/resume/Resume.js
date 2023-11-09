import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => setEducationData(false) & setExperienceData(true)}
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() => setEducationData(true) & setExperienceData(false)}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
        </ul>
      </div>
      {experienceData && <Experience />}
      {educationData && <Education />}
    </section>
  );
};

export default Resume;
