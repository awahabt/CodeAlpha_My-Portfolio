import React from "react";
import { Projects } from "..";
import { about } from "../assets";

const Abouts = () => {
  return (
    <div className="w-full h-auto flex flex-wrap items-center justify-evenly max-[1197px]:justify-center  max-[1137px]:py-5 min-[1137px]:py-10">
      <div className="flex flex-col gap-10 max-[1137px]:text-center max-[1137px]:items-center ">
        <p className="text-5xl montserrat font-bold max-w-[410px]">
          I love being a developer !
        </p>
        <p className="montserrat text-[16px] max-w-[550px] dimWhite ">
          Hello, I'm Abdul Wahab Tahir a dedicated web developer currently in my
          3rd year of Software Engineering. With a passion for creating
          efficient and innovative solutions, I specialize in transforming ideas
          into functional and engaging web experiences.
        </p>

        <div className="flex gap-8 flex-wrap max-[1137px]:justify-center">
          {Projects.map((id, index) => (
            <div className="px-7 py-5 project-bor w-[220px]" key={id.number}>
              <p className="text-4xl montserrat font-bold text-[#ffc107] ">
                {id.number}
              </p>
              <p className="text-[16px] montserrat font-bold">{id.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex py-10">
        <img src={about} alt="Profile" className="w-[400px] mx-[53px]" />
      </div>
      
    </div>
  );
};

export default Abouts;