import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { experienceData } from "../../data/data";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="Advanced Music SL (2022 - 2023)"
            des={experienceData.softwareDeveloper}
          />
          <ResumeCard
            title="Project Manager"
            subTitle="CIMTI – Fundación Leitat - (2021 - 2022)"
            des={experienceData.projectManager}
          />
          <ResumeCard
            title="Program Manager"
            subTitle="Adan Medical Innovation - (2020 - 2021)"
            des={experienceData.programManager}
          />
          <ResumeCard
            title="Research and Development Project Manager"
            subTitle="Fi Group - (2018 - 2020)"
            des={experienceData.researchProjectManager}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
