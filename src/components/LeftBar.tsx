"use client";

import { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  PersonStanding,
  Mailbox,
  HardDriveDownload,
  Binary,
  Accessibility,
  CircuitBoard,
  Blocks,
  DatabaseZap,
  Boxes,
  Home,
} from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";



export const LeftBar = () => {

  

  const useJiggleAnimation = () => {
    const [isHovered, setHovered] = useState(false);

    const style = useSpring({
      transform: isHovered ? "scale(1.05)" : "scale(1)",
      config: { tension: 300, friction: 10 },
    });

    return {
      style,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    };
  };

  const useWiggleAnimation = () => {
    const [isHovered, setHovered] = useState(false);

    const style = useSpring({
      transform: isHovered ? "rotate(10deg)" : "rotate(0deg)",
      config: { tension: 300, friction: 10 },
    });

    return {
      style,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    };
  };

  type AnimatedTooltipContentProps = {
    children: React.ReactNode;
  };

  const AnimatedTooltipContent = ({
    children,
  }: AnimatedTooltipContentProps) => {
    const animationProps = useJiggleAnimation();
    return (
      <animated.div {...animationProps}>
        <div className="hidden md:block">
          <TooltipContent side="right">{children}</TooltipContent>
        </div>
      </animated.div>
    );
  };

  type AnimatedIconProps = {
    children: React.ReactNode;
  };
  const AnimatedIconContent = ({ children }: AnimatedIconProps) => {
    const animationProps = useWiggleAnimation();
    return <animated.div {...animationProps}>{children}</animated.div>;
  };

  const shakeAll = () => {
  
  }



  return (
    <div
      id="left-bar"
      className="z-50 flex flex-row md:flex-col md:h-full w-full h-24 md:w-20 transition-all  duration-150 border-b-2 md:border-r-2 dark:border-slate-50 border-slate-800 fixed mt-16 backdrop-blur-lg"
    >
      <TooltipProvider delayDuration={100}>
        <div className="w-12 h-12 mx-2 md:mx-auto mt-4 md:mt-24 transition-all duration-150 hover:cursor-pointer">
          <Link href="/">
            <Tooltip>
              <TooltipTrigger>
                <AnimatedIconContent>
                  <div className="w-12 h-12 bg-white dark:text-white rounded-sm text-slate-700 hover:text-white hover:bg-teal-300  dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
                    <Home className="w-6 h-6 " />
                  </div>
                </AnimatedIconContent>
              </TooltipTrigger>
              <AnimatedTooltipContent>
                <p>Back Home</p>
              </AnimatedTooltipContent>
            </Tooltip>
          </Link>
          <h6 className="text-xs text-center block md:hidden mt-1 ">Home</h6>
        </div>

        <div className="w-12 h-12 mx-2 md:mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
          <Link href="/what-i-do">
            <Tooltip>
              <TooltipTrigger>
                <AnimatedIconContent>
                  <div className="w-12 h-12 bg-white  dark:text-white rounded-sm text-slate-700 hover:text-white hover:bg-teal-300 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
                    <Boxes className="w-6 h-6" />
                  </div>
                </AnimatedIconContent>
              </TooltipTrigger>
              <AnimatedTooltipContent>
                <p>My Work</p>
              </AnimatedTooltipContent>
            </Tooltip>
          </Link>
          <h6 className="text-xs text-center block md:hidden mt-1 ">Work</h6>
        </div>




        <div className="w-12 h-12 mx-2 md:mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
          <Link href="/my-tools">
            <Tooltip>
              <TooltipTrigger>
                <AnimatedIconContent>
                  <div className="w-12 h-12 bg-white dark:text-white rounded-sm text-slate-700 hover:text-white hover:bg-teal-300 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
                    <DatabaseZap  className="w-6 h-6" />
                  </div>
                </AnimatedIconContent>
              </TooltipTrigger>
              <AnimatedTooltipContent>
                <p>My Tools</p>
              </AnimatedTooltipContent>
            </Tooltip>
          </Link>
          <h6 className="text-xs text-center block md:hidden mt-1  ">Expertise</h6>
        </div>


        <div className="w-12 h-12 mx-2 md:mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
          <Link href="/about">
            <Tooltip>
              <TooltipTrigger>
                <AnimatedIconContent>
                  <div className="w-12 h-12 bg-white dark:text-white rounded-sm text-slate-700 hover:text-white hover:bg-teal-300  dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
                    <PersonStanding className="w-6 h-6" />
                  </div>
                </AnimatedIconContent>
              </TooltipTrigger>
              <AnimatedTooltipContent>
                <p>About Me</p>
              </AnimatedTooltipContent>
            </Tooltip>
          </Link>
          <h6 className="text-xs text-center block md:hidden mt-1 ">About</h6>
        </div>

        <div className="w-12 h-12 mx-2 md:mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
          <Link href="/contact">
            <Tooltip>
              <TooltipTrigger>
                <AnimatedIconContent>
                  <div className="w-12 h-12 bg-white dark:text-white rounded-sm text-slate-700 hover:text-white hover:bg-teal-300 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
                    <Mailbox className="w-6 h-6" />
                  </div>
                </AnimatedIconContent>
              </TooltipTrigger>
              <AnimatedTooltipContent>
                <p>Contact Information</p>
              </AnimatedTooltipContent>
            </Tooltip>
          </Link>
          <h6 className="text-xs text-center block md:hidden mt-1 ">Contact</h6>
        </div>

        <div className="w-12 h-12  mx-2 md:mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
          <a download href="/Sean Stobo - Resume 2023.pdf">
            <Tooltip>
              <TooltipTrigger>
                <AnimatedIconContent>
                  <div className="w-12 h-12 bg-white dark:text-white rounded-sm text-slate-700 hover:text-white hover:bg-teal-300 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
                    <HardDriveDownload className="w-6 h-6" />
                 
                  </div>
                </AnimatedIconContent>
              </TooltipTrigger>
              <AnimatedTooltipContent>
                <p>Download my resume</p>
              </AnimatedTooltipContent>
            </Tooltip>
            <h6 className="text-xs text-center block md:hidden mt-1 ">Resume</h6>
          </a>
        </div>

        <div className="w-12 h-12 mx-2 md:mx-auto mt-64 transition-all duration-150 hover:cursor-pointer hidden md:block" onClick={(shakeAll)}>
          <Tooltip>
            <TooltipTrigger>
              <Image
                src="/arrow.gif"
                alt="An image of an arrow"
                width={54}
                height={54}
                className="-rotate-90 mx-auto rounded"
              />
              <h6 className="text-xs text-center block md:hidden mt-1  ">Navigate</h6>
            </TooltipTrigger>
            <AnimatedTooltipContent>
              <p>Click on the icons above to learn more.</p>
            </AnimatedTooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};
