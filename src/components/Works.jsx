import React from "react";
import { style } from "../styles/style";
import { github } from "../assets";
import SectionWrapper from "../hoc/";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import { GiEarthAfricaEurope } from "react-icons/gi";
import {motion} from 'framer-motion'

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
  demo_link,
}) => {
  return (
    <AnimatedDiv 
      variants={fadeIn( index % 2 === 1 ? 'up' : 'down', "spring", index * 0.5, 1)}
      className={' green-pink-gradient p-[2px] h-fit rounded-[20px] shadow-2xl duration-200 '}  
    >
      <div
        
        className='bg-primary shadow-md  p-5 rounded-2xl  sm:w-[360px] w-[300px] '
      >
        <div className='relative w-full'>
          <Tilt tiltReverse={true}>
            <div className="relative w-[260px] h-[170px] sm:w-[320px] sm:h-[200px]">
              <Image
                src={image}
                alt="project_image"
                fill
                className="object-cover rounded-2xl shadow-2xl border-1 border-secondary"
              />
              
            </div>


          
          <motion.div
            variants={fadeIn( 'right', "spring", 1.5, 0.5)}
            className={'  w-fit h-fit absolute top-30 sm:top-38 right-2 shadow-card '}  
          >
            <div className="flex gap-3">


              <div className=' flex card-img_hover items-center justify-center'>
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='bg-black border-4 border-[#915eff] w-10 h-10 rounded-full relative cursor-pointer'
                >
                  <Image
                    fill
                    src={github}
                    alt='source code'
                    className='object-contain flex'
                  />
                </div>
                
              </div>
              <div className='flex card-img_hover'>
                <div
                  onClick={() => window.open(demo_link, "_blank")}
                  className='bg-white w-10 h-10 rounded-full flex border-4 border-[#915eff]  justify-center items-center cursor-pointer'
                >
                  <GiEarthAfricaEurope
                    className='w-full h-full object-contain'
                    />
                </div>
                
              </div>
            </div>
          </motion.div>
        </Tilt>
        </div>

        <div className='mt-5'>
          <h3 className='text-secondary font-bold text-[24px]'>{name}</h3>
          <div className=" p-2  my-3">
            <p className='mt-2 text-secondary text-[16px] line-clamp-5 hover:line-clamp-none hover:whitespace-normal hover:overflow-visible hover:text-clip'>{description}</p>
          </div>
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

export default SectionWrapper(Works, "projects");