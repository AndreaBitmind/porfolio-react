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
      <div className="flex flex-col-reverse lg:place-content-between lg:flex-row">
        <div className="md:w-1/2">
          <ul className="w-full md:w-auto grid grid-cols-1 md:grid-cols-2">
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
        <div className="flex items-center">
          <a
            href="https://drive.google.com/uc?export=download&id=1JL8iph8wm18dzbDfDVd4D0jpOWmLV25k"
            download="CV_AndreaMartinez_Frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="resumeIcon" dow>
              Download resume 📃
            </span>
          </a>
        </div>
      </div>
      {experienceData && <Experience />}
      {educationData && <Education />}
    </section>
  );
};

export default Resume;
