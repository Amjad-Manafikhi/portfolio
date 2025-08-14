import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { style } from "../styles/style";
import { navLinks } from "../constants";
//import { logo, menu, close } from "../assets";
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
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
              className={` hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))

          
  return (
    <nav
    
      className={cn(style.paddingX,`w-full flex items-center justify-center box-border fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`)}
    >
      <div className='w-full flex justify-between items-center max-w-5xl m-auto'>
        <button
          className='flex items-center gap-2'
          onClick={() => {
            const el = document.getElementById("hero");
            if (el)  el.scrollIntoView({ behavior: "smooth" })
            
          }}
        >
          <Image src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Adrian &nbsp;
            <span className='sm:block hidden'> | JavaScript Mastery</span>
          </p>
        </button>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinksElements}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
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