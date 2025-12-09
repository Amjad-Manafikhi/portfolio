import React from "react";
import { projects } from "../../constants";
import Image from "next/image";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { SiGithub } from "react-icons/si";

export default function Card1(){

    const index = 2;
    const {name, description, tags, image, source_code_link, demo_link} = projects[index];
  return (
    
      <div
        
        className='bg-primary shadow-md p-5 rounded-2xl  sm:w-[360px] w-[300px] '
      >
        <div className='relative w-full'>
          
            <div className="relative w-[260px] h-[170px] sm:w-[320px] sm:h-[200px]">
              <Image
                src={image}
                alt="project_image"
                fill
                className="object-cover rounded-2xl shadow-2xl border-1 border-secondary"
              />
              
            </div>


          
          <div
            className={'  w-fit h-fit absolute top-30 sm:top-38 right-2 shadow-card '}  
          >
            
          </div>
        
        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <div className=" p-2  my-3">
            <p className='mt-2 text-black text-[16px] '>{description}</p>
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
  );
};