import { style } from '@/styles/style'
import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import Video from './Video'
import SectionWrapper from '@/hoc'
import { Flashlight } from './canvas'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { SiGithub } from 'react-icons/si'


export function Highlight(){
    
    
    return(
        <>
            <motion.div variants={textVariant()}>
                <p className={`${style.sectionSubText} `}>My Work</p>
                <h2 className={`${style.sectionHeadText}`}>Highlight.</h2>
            </motion.div>
            {/* <div className="h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('/wall2.jpg')",
                }}
            >
            <Flashlight/>
            </div> */}
            <div className='w-full flex pt-10 gap-3 flex-col lg:flex-row'>
                <div className='bg-secondary text-white rounded-xl w-full mx-auto  lg:w-80 p-4'>
                    <h1 className='font-bold text-[24px] mb-5'>Real Time Kanban Table</h1>
                    <p className='text-[16px]'>A real-time Kanban task system that updates instantly, synchronizes changes across users, supports live task movement, and delivers fast, continuous state updates</p>
                    <div className='flex gap-x-2 flex-wrap pt-8'>

                        <p
                            className={`text-[14px] orange-text-gradient`}
                            >
                            #nextjs
                        </p>
                        <p
                            className={`text-[14px] blue-text-gradient`}
                        >
                            #socket.io
                        </p>
                        <p
                            className={`text-[14px] pink-text-gradient`}
                            >
                            #dnd-kit
                        </p>
                        <p
                            className={`text-[14px] green-text-gradient`}
                            >
                            #typescript
                        </p>
                    </div>

                    <div className="flex gap-3 pt-8 ">
                        <div className='flex card-img_hover'>
                        <div
                            onClick={() => window.open("https://github.com/Amjad-Manafikhi/kanban-table", "_blank")}
                            className='bg-black w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <SiGithub
                            
                            className='w-8 h-8 text-white'
                            />
                        </div>
                        
                        </div>
                        <div className='flex card-img_hover'>
                        <div
                            onClick={() => window.open("https://kanban-table.vercel.app/", "_blank")}
                            className='bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <GiEarthAfricaEurope
                            
                            className='w-8 h-8 text-black'
                            />
                        </div>
                        
                        </div>
                    </div>
                </div>
                <Video/>
            </div>
        </>
    )
}

export default SectionWrapper(Highlight, "highlight");