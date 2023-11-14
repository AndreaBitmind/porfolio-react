import React from "react";
import Title from "../layouts/Title";
import SkillsCard from "./SkillsCard";
import { skills } from "../../data/data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 border-b-[1px] font-titleFont border-b-black"
    >
      <div className="flex justify-left">
        <Title title="SKILLS" des="My skills" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <SkillsCard
          title={"Markup and Languages"}
          des={
            <div className="flex flex-wrap gap-6 transform-gpu seq">
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
            <div className="flex flex-wrap gap-6 transform-gpu seq">
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
            <div className="flex flex-wrap gap-6 transform-gpu seq">
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
            <div className="flex flex-wrap gap-6 transform-gpu seq">
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
