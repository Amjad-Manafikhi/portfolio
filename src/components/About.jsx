import React from "react";
import { style } from "../styles/style";
import { services } from "../constants";
import SectionWrapper from "../hoc";
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
const ServiceCard = ({ index, title, icon }) => (
  <Tilt tiltReverse={true} className='xs:w-[250px] w-full'>
    <AnimatedDiv
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-2xl'
    >
      <div
        className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          width={64}
          height={64}
          alt='web-development'
          className='object-contain'
        />

        <h3 className='text-secondary  text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </AnimatedDiv>
  </Tilt>
);

const About = () => {
  return (
    <>
      <AnimatedDiv variants={textVariant()}>
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>Overview.</h2>
      </AnimatedDiv>

      <AnimatedP
        variants={fadeIn("", "", 0.1, 1)}
        className='text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with strong expertise in TypeScript, JavaScript, 
        and C++ (competitive programming). I specialize in modern frameworks like Next.js, 
        React, and Three.js at building scalable, efficient, and user-friendly 
        solutions. A fast learner and effective collaborator, I'm passionate about turning 
        complex ideas into real-world products that deliver impact. Let's work together to bring your vision to life!
      </AnimatedP>

      <div className='mt-20  flex flex-wrap justify-around gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");