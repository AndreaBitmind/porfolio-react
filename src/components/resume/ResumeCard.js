import React from "react";

const ResumeCard = ({ title, subTitle, des }) => {
  const desParagraphs = des.split("\n").map((paragraph, index) => (
    <p className="my-0.5 text-sm lgl:text-base" key={index}>
      {paragraph}
    </p>
  ));

  return (
    <div className="w-full group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center shadow-shadowOne py-8">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center my-2">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 mb-6 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
        </div>
        {desParagraphs}
      </div>
    </div>
  );
};

export default ResumeCard;
