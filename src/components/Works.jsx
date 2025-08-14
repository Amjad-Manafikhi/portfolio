import React from "react";
import { style } from "../styles/style";
import { github } from "../assets";
import SectionWrapper from "../hoc/";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

import dynamic from 'next/dynamic';
const Tilt = dynamic(() => import("react-parallax-tilt"), {
  ssr: false,
});

const AnimatedDiv = dynamic(() => import("./AnimatedDiv"), {
  ssr: false,
});

const AnimatedP = dynamic(() => import("./AnimatedP"), {
  ssr: false,
});

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <AnimatedDiv variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:scale-103 duration-300'
      >
        <div className='relative w-full h-[230px]'>
          <Tilt tiltReverse={true}>
            <div className="relative w-[320px] h-[227px]">
              <Image
                src={image}
                alt="project_image"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

          </Tilt>

          <div className='absolute top-2 right-2 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <Image
                fill
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </AnimatedDiv>
  );
};

const Works = () => {
  return (
    <>
      <AnimatedDiv variants={textVariant()}>
        <p className={`${style.sectionSubText} `}>My work</p>
        <h2 className={`${style.sectionHeadText}`}>Projects.</h2>
      </AnimatedDiv>

      <div className='w-full flex'>
        <AnimatedP
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </AnimatedP>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");