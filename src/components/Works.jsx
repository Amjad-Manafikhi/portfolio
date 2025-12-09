import React from "react";
import { style } from "../styles/style";
import { github } from "../assets";
import SectionWrapper from "../hoc/";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { SiGithub } from "react-icons/si";
import { motion } from 'framer-motion'
import  Tilt  from  "react-parallax-tilt"



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
    <motion.div 
      variants={fadeIn( index % 2 === 1 ? 'up' : 'down', "spring", 0, 0)}
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
            variants={fadeIn( 'right', "spring", 0, 0)}
            className={'  w-fit h-fit absolute top-30 sm:top-38 right-2 shadow-card '}  
          >
            <div className="flex gap-3">


              <div className='flex card-img_hover'>
                <div
                  onClick={() => window.open(demo_link, "_blank")}
                  className='bg-black w-10 h-10 rounded-full flex border-4 border-[#915eff]  justify-center items-center cursor-pointer'
                >
                  <SiGithub
                    
                    className='w-10 h-10 text-white'
                    />
                </div>
                
              </div>
              <div className='flex card-img_hover'>
                <div
                  onClick={() => window.open(demo_link, "_blank")}
                  className='bg-white w-10 h-10 rounded-full flex border-4 border-[#915eff]  justify-center items-center cursor-pointer'
                >
                  <GiEarthAfricaEurope
                    
                    className='w-10 h-10 text-black'
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
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div >
        <p className={`${style.sectionSubText} `}>My work</p>
        <h2 className={`${style.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0, 0)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
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