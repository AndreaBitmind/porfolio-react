import React from "react";
import Title from "../layouts/Title";
import SkillsCard from "./SkillsCard";
import { skills } from "../../data/data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 border-b-[1px] border-b-black  "
    >
      <Title des="My Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <SkillsCard
          title={"Markup and Languages"}
          des={
            <div className="gap-6 transform-gpu seq grid grid-cols-4 justify-items-center">
              {skills.markupAndLanguages.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  title={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          }
        />
        <SkillsCard
          title={"Frontend Technologies"}
          des={
            <div className="gap-6 transform-gpu seq grid grid-cols-4 justify-items-center">
              {skills.frontendTechnologies.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  title={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          }
        />
        <SkillsCard
          title={"Backend Technologies and Databases"}
          des={
            <div className="gap-6 transform-gpu seq grid grid-cols-4 justify-items-center">
              {skills.backendAndDatabases.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  title={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          }
        />
        <SkillsCard
          title={"Tools and Others"}
          des={
            <div className="gap-6 transform-gpu seq grid grid-cols-4 justify-items-center">
              {skills.toolsAndOther.map((skill) => (
                <img
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  title={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Skills;
