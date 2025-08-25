import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { style } from "../styles/style";
import { navLinks } from "../constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router=useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navLinksElements = navLinks.map((nav) => (
            <li
              key={nav.id}
              className={` text-secondary hover:opacity-80 text-[14px] sm:text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))

          
  return (
    <nav
    
      className={cn(style.paddingX,` shadow-md py-1 w-full min-h-10 flex items-center justify-center box-border fixed top-0 z-10 bg-primary
      }`)}
    >
      <div className='w-full flex justify-between items-center max-w-7xl m-auto'>
        <button
          className='flex items-center gap-2'
          onClick={() => {
            const el = document.getElementById("hero");
            if (el)  el.scrollIntoView({ behavior: "smooth" })
            
          }}
        >
          {/* <Image src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <p className='text-secondary text-[18px] font-bold cursor-pointer flex '>
            Amjad Manafikhi
          </p>
        </button>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinksElements}
        </ul>

        <div 
          className={`sm:hidden z-15 flex items-center p-2 hover:bg-purple-200 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110`}
        >
         
         {toggle ? (
            <IoMdClose 
              onClick={() => setToggle(prev => !prev)} 
              className="w-[28px] h-[28px] text-secondary z-10" 
            />
          ) : (
            <RxHamburgerMenu 
              onClick={() => setToggle(prev => !prev)} 
              className="w-[28px] h-[28px] text-secondary z-10" 
            />
          )}
          <div

            className={`absolute  -ml-8  ${
              toggle ? 'h-30 mt-34 z-0' : 'h-0 p-0 -z-18 -mt-14'
            } bg-white shadow-lg overflow-hidden py-1 px-3 duration-200 ease-in-out  rounded-md`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinksElements}
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;