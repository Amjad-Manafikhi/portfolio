import { Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas } from "../components"



export default function Home() {
   return (
      <div className='relative z-0 bg-primary w-full'>
        <div style={{ backgroundImage: "var(--background-hero-pattern)" }} className="w-full bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>

  );
}
