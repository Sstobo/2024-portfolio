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
  Home
} from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";

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

  return (
    <div
      id="left-bar"
      className="flex flex-col w-20 transition-all duration-150 border-r-4 dark:border-slate-50 border-slate-800 fixed mt-16 h-full"
    >
     <TooltipProvider delayDuration={100}>
  <div className="w-12 h-12 mx-auto mt-24 transition-all duration-150 hover:cursor-pointer">
    <Link href="/">
      <Tooltip>
        <TooltipTrigger>
          <AnimatedIconContent>
            <div className="w-12 h-12 bg-white rounded-sm text-slate-700 hover:text-red-500 dark:text-slate-100 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
              <Home className="w-6 h-6 "/>
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
            <div className="w-12 h-12 bg-white rounded-sm text-slate-700 hover:text-blue-400 dark:text-slate-100 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
              <PersonStanding className="w-6 h-6"/>
            </div>
          </AnimatedIconContent>
        </TooltipTrigger>
        <AnimatedTooltipContent>
          <p>About me!</p>
        </AnimatedTooltipContent>
      </Tooltip>
    </Link>
  </div>

  <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
    <Link href="/contact">
      <Tooltip>
        <TooltipTrigger>
          <AnimatedIconContent>
            <div className="w-12 h-12 bg-white rounded-sm text-slate-700 hover:text-emerald-400 dark:text-slate-100 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
              <Mailbox className="w-6 h-6"/>
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
            <div className="w-12 h-12 bg-white rounded-sm text-slate-700 hover:text-fuchsia-400 dark:text-slate-100 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
              <HardDriveDownload className="w-6 h-6"/>
            </div>
          </AnimatedIconContent>
        </TooltipTrigger>
        <AnimatedTooltipContent>
          <p>Download my resume</p>
        </AnimatedTooltipContent>
      </Tooltip>
    </Link>
  </div>

  <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
    <Link href="/custom-code">
      <Tooltip>
        <TooltipTrigger>
          <AnimatedIconContent>
            <div className="w-12 h-12 bg-white rounded-sm text-slate-700 hover:text-teal-400 dark:text-slate-100 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
              <Binary className="w-6 h-6"/>
            </div>
          </AnimatedIconContent>
        </TooltipTrigger>
        <AnimatedTooltipContent>
          <p>Custom code</p>
        </AnimatedTooltipContent>
      </Tooltip>
    </Link>
  </div>

  <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
    <Link href="/accessibility">
      <Tooltip>
        <TooltipTrigger>
          <AnimatedIconContent>
            <div className="w-12 h-12 bg-white rounded-sm text-slate-700 hover:text-amber-800 dark:text-slate-100 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
              <Accessibility className="w-6 h-6"/>
            </div>
          </AnimatedIconContent>
        </TooltipTrigger>
        <AnimatedTooltipContent>
          <p>Accessibility to all</p>
        </AnimatedTooltipContent>
      </Tooltip>
    </Link>
  </div>

  <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
    <Link href="/ai-integrations">
      <Tooltip>
        <TooltipTrigger>
          <AnimatedIconContent>
            <div className="w-12 h-12 bg-white rounded-sm text-slate-700 hover:text-lime-400 dark:text-slate-100 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
              <CircuitBoard className="w-6 h-6"/>
            </div>
          </AnimatedIconContent>
        </TooltipTrigger>
        <AnimatedTooltipContent>
          <p>AI integrations</p>
        </AnimatedTooltipContent>
      </Tooltip>
    </Link>
  </div>

  <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
    <Link href="/gutenberg-blocks">
      <Tooltip>
        <TooltipTrigger>
        <AnimatedIconContent>
            <div className="w-12 h-12 bg-white rounded-sm text-slate-700 hover:text-orange-600 dark:text-slate-100 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
              <Blocks className="w-6 h-6 "/>
            </div>
          </AnimatedIconContent>
        </TooltipTrigger>
        <AnimatedTooltipContent>
          <p>Gutenberg blocks</p>
        </AnimatedTooltipContent>
      </Tooltip>
    </Link>
  </div>

  {/* Interactive design icon with new structure */}
  <div className="w-12 h-12 mx-auto mt-4 transition-all duration-150 hover:cursor-pointer">
    <Link href="/interactive-design">
      <Tooltip>
        <TooltipTrigger>
          <AnimatedIconContent>
            <div className="w-12 h-12 bg-white rounded-sm text-slate-700 hover:text-cyan-400 dark:text-slate-100 dark:bg-slate-950 dark:hover:text-amber-500 flex items-center justify-center">
              <Layout className="w-6 h-6 "/>
            </div>
          </AnimatedIconContent>
        </TooltipTrigger>
        <AnimatedTooltipContent>
          <p>Interactive design</p>
        </AnimatedTooltipContent>
      </Tooltip>
    </Link>
  </div>
</TooltipProvider>

    </div>
  );
};
