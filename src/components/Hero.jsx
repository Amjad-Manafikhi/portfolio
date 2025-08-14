
import { cn } from '@/lib/utils'
import { style } from '@/styles/style'
import dynamic from 'next/dynamic';
const Computers = dynamic(() => import("./canvas/Computers"), {
  ssr: false,
});
const AnimatedDiv = dynamic(() => import("./AnimatedDiv"), {
  ssr: false,
});

const Hero = () => {
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
            <p className={cn(style.heroSubText,'mt-2 text-white-100')}>I develop 3D visuals, user <br className='sm:hidden'/> interfaces and web applications</p>
          </div>
          <div className='w-full h-full m-0 p-0'>
            <Computers className="" />
            <div className='m-auto absolute sm:bottom-4 bottom-20 left-0 right-0 w-full flex justify-center items-center'>
              <a href='#about'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                  <AnimatedDiv
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className='w-3 h-3 rounded-full bg-secondary mb-1'
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