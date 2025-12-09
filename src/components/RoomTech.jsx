import React from "react";
import SectionWrapper from "../hoc";
import { technologies } from "../constants";
import dynamic from "next/dynamic";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import Image from "next/image";

const BallCanvas = dynamic(() => import("./canvas/Ball"), {
  ssr: false,
});

const Tech = () => {
  return (
      <div className="flex bg-transparent flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name}>
                <div className="">
                  <Image 
                    src={technology.icon} 
                    width={128}
                    height={128}
                    alt='tech '
                    className='object-contain'
                  />
                </div>
          </div>
        ))}
      </div>
  );
};

export default SectionWrapper(Tech, "");
