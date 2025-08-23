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

const BallCanvas = dynamic(() => import("./canvas/Ball"), {
  ssr: false,
});

const Tech = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name}>
            <Tooltip>
              <TooltipTrigger asChild >
                <div className="w-28 h-28">
                  <BallCanvas icon={technology.icon.src} />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary text-white " sideOffset={3}>
                <p>{technology.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SectionWrapper(Tech, "");
