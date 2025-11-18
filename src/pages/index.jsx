import Highlight from "@/components/Highlight";
import { Navbar, Hero, About, Experience, Tech, Works, Contact, StarsCanvas } from "../components"

export default function Home() {
   return (
      <div className='relative z-0 bg-primary w-full'>
        <div className="w-full ">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience />
        <Highlight/>
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>

  );
}
