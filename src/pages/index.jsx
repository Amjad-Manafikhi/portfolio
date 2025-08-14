import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});
const Hero = dynamic(() => import("../components/Hero"), {
  ssr: false,
});
const About = dynamic(() => import("../components/About"), {
  ssr: false,
});
const Experience = dynamic(() => import("../components/Experience"), {
  ssr: false,
});
const Tech = dynamic(() => import("../components/Tech"), {
  ssr: false,
});
const Works = dynamic(() => import("../components/Works"), {
  ssr: false,
});
const Feedbacks = dynamic(() => import("../components/Feedbacks"), {
  ssr: false,
});
const Contact = dynamic(() => import("../components/Contact"), {
  ssr: false,
});
const StarsCanvas = dynamic(() => import("../components/canvas/Stars"), {
  ssr: false,
});

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
