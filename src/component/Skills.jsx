import React from "react";
import { Language, skillIcons } from "..";

const Skills = () => {
  return (
    <div className="py-20 w-full flex flex-wrap gap-[17px] max-[1197px]:gap-20 justify-evenly max-[1197px]:justify-center max-[1197px]:text-center">
      <div>
        <p className="text-2xl montserrat font-bold">Skills</p>
        <p className="montserrat text-md max-w-[550px] dimWhite py-8">
          Here you can see my skills, one of the fascinations of the computer
          world is the momentary changes of technologies, but I try to update my
          knowledge every day and experience new technologies.
        </p>

        <div className="flex flex-wrap  gap-2 max-w-[550px]">
          {skillIcons.map((skill, index) => (
            <div className="skills-icon montserrat">{skill.title}</div>
          ))}
        </div>
      </div>

      <div className="montserrat">
        <p className="text-2xl montserrat font-bold">Language skill</p>
        <p className="montserrat text-md max-w-[550px] dimWhite py-8">
          One of my hobbies is studying and learning languages. I try to be able
          to learn and use my favorite languages.
        </p>
        <div className="flex flex-wrap items-center max-[1197px]:justify-center gap-5">
          {Language.map((lang, index) => (
            <div className=" flex language-icon w-[230px] montserrat items-center gap-5 pl-5 py-3">
              <div className="text-[16px] montserrat font-bold text-white bg-[#ffc107] rounded-full py-3 px-2">{lang.persentage}</div>
              <p className="text-[16px] montserrat font-bold">{lang.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
