
import { cn } from '@/lib/utils'
import { style } from '@/styles/style'
import { mixVisibility, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Computers = dynamic(() => import("./canvas/Computers"), {
  ssr: false,
});
const AnimatedDiv = dynamic(() => import("./AnimatedDiv"), {
  ssr: false,
});

const Hero = () => {
  const [loading, setLoading] = useState(false);
  function download(){
    setLoading(true)
    setTimeout(() => {
    console.log("3 seconds passed!");
    // ✅ Do your action here (download logic, navigate, etc.)
    setLoading(false);
  }, 1000);

  }
  const loadingVariants = {
    // The initial state of the div
    initial: {
      rotate: 0,
      visibility:"hidden",
    },
    // The animated state when loading is true
    loading: {
      right:0, // Move to the right, adjusting for div width
      top:0, // Move to the top, adjusting for div height
      rotate: 360,
      transition: {
        duration: 1,
         // Keep spinning indefinitely
        ease: "easeInOut",
      },
    },
  };


  return (
    <div id="hero" className={cn(style.paddingX,'w-full h-screen relative flex flex-col')}>
      
      <div className='flex w-full pt-20 h-full gap-5'>
        <div className=' w-fit flex flex-col items-center justify-start'>
          <div className='w-4 h-4 bg-[#915eff] rounded-full '/>
          <div className='w-1 sm:h-80 h-40 bg-[#915eff] violet-gradient '/>
        </div>
        <div className='flex flex-col h-full w-full'>

          <div>
            <h1 className={style.heroHeadText}>Hi, I'm <span className='text-[#915eff]'>Amjad</span></h1>
            <div className='flex justify-between gap-4 items-center'>

              <p className={cn(style.heroSubText,'mt-2 text-white-100')}>I’m a Full-Stack Developer with a strong focus on <span className='font-extrabold '>Frontend</span> development</p>
              <div className='flex gap-2 justify-center items-center'>
                <button
                  onClick={download} 
                  className={` bg-[#00CDA7] rounded-md flex items-center justify-center w-36 h-10 cursor-pointer duration-700 ${loading ? "scale-105":""}`}>
                  <div
                    className={`hidden sm:inline w-8 h-10 bg-gray-500 absolute rounded-lg ${loading ? 'animate-spin translate-x-[250px] -translate-y-[300px] transition-all duration-700' : '-z-2 bg-transparent'}`}
                  />
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-black  border-r-black rounded-full animate-spin"></div>
                    ) : ("Download CV")
                  }
                </button>
                <Link href="/#projects" className='bg-[#915eff] rounded-md flex items-center justify-center w-36 h-10 cursor-pointer'>See Projects</Link>
              </div>
            </div>
          </div>
          <div className='w-full h-full m-0 p-0'>
            <Computers className="" />
            <div className='m-auto absolute sm:bottom-4 bottom-20 left-0 right-0 w-full flex justify-center items-center'>
              <a href='#about'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#915eff] flex justify-center items-start p-2'>
                  <AnimatedDiv
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className='w-3 h-3 rounded-full bg-[#915eff] mb-1'
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Hero