import React from "react";
import {
  // VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { cn } from '@/lib/utils'

// Dynamically import the VerticalTimeline and VerticalTimelineElement components
import dynamic from 'next/dynamic';
const VerticalTimeline = dynamic(
  () => import('react-vertical-timeline-component').then((mod) => mod.VerticalTimeline),
  { ssr: false } // Set ssr: false to ensure the component is only rendered on the client side
);

import "react-vertical-timeline-component/style.min.css";

import { style } from "../styles/style";
import { experiences } from "../constants";
import SectionWrapper from "../hoc";
import { textVariant } from "../utils/motion";
import Image from "next/image";


const AnimatedDiv = dynamic(() => import("./AnimatedDiv"), {
  ssr: false,
});

// Fix: Destructure `experience` from props
const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            width={32}
            height={32}
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <AnimatedDiv variants={textVariant()}>
        <p className={cn(style.sectionSubText, 'text-center')}>
          What I have done so far
        </p>
        <h2 className={cn(style.sectionHeadText, 'text-center')}>
          Work Experience.
        </h2>
      </AnimatedDiv>

      <div>
        {experiences.length && (<VerticalTimeline >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>)}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
