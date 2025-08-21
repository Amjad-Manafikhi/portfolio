"use client";
import React from "react";
import Image from "next/image";
import { experiences } from "@/constants";
import { fadeIn } from "@/utils/motion";
import SectionWrapper from "@/hoc";
import AnimatedDiv from "./AnimatedDiv";

const TimelineCard = ({ experience, i }) => {
  return (
      <AnimatedDiv
      variants={fadeIn("right", "spring", i * 0.5, 0.75)}
        className={` w-[100%] flex sm:${i%2?"flex-row":"flex-row-reverse"} items-center justify-between  mb-12`}
      >
    <div className={` w-[100%] flex sm:${i%2?"flex-row":"flex-row-reverse"} items-center justify-between  mb-12`}>
    <div className={`hidden sm:flex  mb-12`}>  
      
    </div>
    <div className={`sm:${i%2?"flex-row":"flex-row-reverse"} sm:w-[calc(50%+28px)] w-fit  flex items-start justify-start gap-3  mb-12`}>

      
        <div className="relative z-10 flex items-center justify-center  self-center w-14 h-14 sm:mx-auto bg-white border-2 border-secondary rounded-full">
          <div className={`hidden sm:block absolute w-2 h-2 bg-wihte border-t-5 border-t-transparent border-b-5 border-b-transparent  ${i%2 ? "-right-3 border-l-8 border-l-secondary" : "-left-3 border-r-8 border-r-secondary" }`}>

          </div>
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={36}
            height={36}
            className="object-contain z-10 "
          />
        </div>

        {/* Card Content */}
        <div className={`bg-purple-300 p-5 rounded-xl shadow-md flex-1 `}>
          <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
          <p className="text-sm font-semibold text-gray-700">
            {experience.company_name}
          </p>
          <p className="text-xs text-gray-600 mb-3">{experience.date}</p>

          <ul className="list-disc ml-5 space-y-1 text-gray-800 text-sm">
            {experience.points.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        </div>
    </div>
</div>
      </AnimatedDiv>
  );
};

const Experience = () => {
  return (
    <div className="relative max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Work Experience</h2>
      <div className="w-full relative">

        <div className="border-1 h-full  absolute left-0 sm:left-[50%] z-5 border-secondary"></div>
          {experiences.length > 0 && experiences.map((exp, i) => (
            
            <TimelineCard key={i} experience={exp} i={i} />
            
          ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience,"work");
