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
  Layout,
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
        <TooltipContent side="right">{children}</TooltipContent>
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
      className="flex flex-col w-20 transition-all  duration-150 border-r-2 dark:border-slate-50 border-slate-800 fixed mt-16 h-full"
    >
      <TooltipProvider delayDuration={100}>
        <div className="w-12 h-12 mx-auto mt-24 transition-all duration-150 hover:cursor-pointer">
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
                <p>Back home</p>
              </AnimatedTooltipContent>
            </Tooltip>
          </Link>
        </div>

        <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
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
        </div>

        <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
          <Link href="/what-i-do">
            <Tooltip>
              <TooltipTrigger>
                <AnimatedIconContent>
                  <div className="w-12 h-12 bg-white  dark:text-white rounded-sm text-slate-700 hover:text-white hover:bg-teal-300 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
                    <Blocks className="w-6 h-6" />
                  </div>
                </AnimatedIconContent>
              </TooltipTrigger>
              <AnimatedTooltipContent>
                <p>What I Do</p>
              </AnimatedTooltipContent>
            </Tooltip>
          </Link>
        </div>

        <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
          <Link href="/my-tools">
            <Tooltip>
              <TooltipTrigger>
                <AnimatedIconContent>
                  <div className="w-12 h-12 bg-white dark:text-white rounded-sm text-slate-700 hover:text-white hover:bg-teal-300 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
                    <CircuitBoard className="w-6 h-6" />
                  </div>
                </AnimatedIconContent>
              </TooltipTrigger>
              <AnimatedTooltipContent>
                <p>My Tools</p>
              </AnimatedTooltipContent>
            </Tooltip>
          </Link>
        </div>

        <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
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
                <p>Contact information</p>
              </AnimatedTooltipContent>
            </Tooltip>
          </Link>
        </div>

        <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
          <Link href="/resume-download">
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
          </Link>
        </div>

        <div className="w-12 h-12 mx-auto mt-64 transition-all duration-150 hover:cursor-pointer" onClick={(shakeAll)}>
          <Tooltip>
            <TooltipTrigger>
              <Image
                src="/arrow.gif"
                alt="An image of an arrow"
                width={54}
                height={54}
                className="-rotate-90 mx-auto rounded"
              />
              <h6 className="text-xs pt-3">Navigate</h6>
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
