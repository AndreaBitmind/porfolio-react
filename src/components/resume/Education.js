import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { educationDes } from "../../data/data";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's Degree in Biotechnology"
            subTitle="Universitat de Girona (2010 - 2015)"
            des={educationDes.biotechnology}
          />
          <ResumeCard
            title="Master in Food & Business Industry Research, Development and Innovation"
            subTitle="Universitat de Barcelona (2016 - 2017)"
            des={educationDes.master}
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-Stack Web Development Bootcamp"
            subTitle="ISDI Coders - (2022) [1000h]"
            des={educationDes.bootcamp}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
