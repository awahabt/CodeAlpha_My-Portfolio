import React from "react";
import { projExperience } from "..";
import { briefcase, square } from "../assets";

const Experience = () => {
  return (
    <div className="w-full h-auto flex flex-col flex-wrap items-center justify-center max-[1137px]:py-5 min-[1137px]:py-10">
      <div className="text-center ">
        <p className="text-4xl montserrat font-bold ">My Experiences</p>
        <p className="montserrat text-[18px] font-[500] max-w-[550px] dimWhite pt-5 pb-20">
          One of the most beautiful parts of every person's life, the part of
          their work life, I am very happy to have spent this part of my life
          with the people I loved and it has made my interest in my work more
          and more.
        </p>
      </div>
      <div className=" montserrat flex gap-8 flex-wrap justify-center px-10">
        {projExperience.map((proj, index) => (
          <div className="expTab max-w-[540px] px-8 py-7" key={proj.id}>
            <div className="flex flex-wrap gap-5 justify-between items-center py-3">
              <div className="flex">
                <img src={proj.image} alt="logo" className="w-[80px]" />
              </div>
              <div className="flex items-center w-[140px]">
                <div className="h-[45px] w-[45px] flex justify-center items-center bg-[#ffc107] rounded-full">
                  <img src={briefcase} alt="Date" className="w-5" />
                </div>
                <div className="relative left-[-3.5px] px-1 bg-[#ffc107] min-h-[19px]">
                  <p className="text-white text-sm font-semibold">
                    {proj.startDate} - {proj.endDate}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold py-4 text-[17px]">{proj.domain} - {proj.title} <span className="text-[#ffc107] font-bold">({proj.time})</span></p>
              <p className="dimWhite font-[500] leading-7 text-[16px]">{proj.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
