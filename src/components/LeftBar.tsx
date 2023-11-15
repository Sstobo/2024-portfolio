"use client"

import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {
  PersonStanding,
  Mailbox,
  HardDriveDownload,
  Binary,
  Accessibility,
  CircuitBoard,
  Blocks,
  Layout
} from 'lucide-react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from '@/components/ui/tooltip';

export const LeftBar = () => {
  const useJiggleAnimation = () => {
    const [isHovered, setHovered] = useState(false);

    const style = useSpring({
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      config: { tension: 300, friction: 10 }
    });

    return {
      style,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false)
    };
  };

type AnimatedTooltipContentProps = {
    children: React.ReactNode;
};

const AnimatedTooltipContent = ({ children }: AnimatedTooltipContentProps) => {
    const animationProps = useJiggleAnimation();
    return (
        <animated.div {...animationProps}>
            <TooltipContent side="right">{children}</TooltipContent>
        </animated.div>
    );
};
  return (
    <div id="left-bar" className="flex flex-col w-20 transition-all duration-150 hover:w-1/12 border-r-4 dark:border-slate-50 border-slate-800 ">
      <TooltipProvider delayDuration={100}>
        <div className="w-14 h-14 mx-auto mt-24 blur-sm hover:blur-none transition-all duration-150 hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <PersonStanding className="w-14 h-14" />
            </TooltipTrigger>
            <AnimatedTooltipContent>
              <p>About me!</p>
            </AnimatedTooltipContent>
          </Tooltip>
        </div>
        
        <div className="w-14 h-14 mx-auto mt-4 blur-sm hover:blur-none transition-all duration-150 hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <Mailbox className="w-14 h-14" />
            </TooltipTrigger>
            <AnimatedTooltipContent>
              <p>Contact information</p>
            </AnimatedTooltipContent>
          </Tooltip>
        </div>
        
        <div className="w-14 h-14 mx-auto mt-4 blur-sm hover:blur-none transition-all duration-150 hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <HardDriveDownload className="w-14 h-14" />
            </TooltipTrigger>
            <AnimatedTooltipContent>
              <p>Download my resume</p>
            </AnimatedTooltipContent>
          </Tooltip>
        </div>
        
        <div className="w-14 h-14 mx-auto mt-4 blur-sm hover:blur-none transition-all duration-150 hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <Binary className="w-14 h-14" />
            </TooltipTrigger>
            <AnimatedTooltipContent>
              <p>Custom code</p>
            </AnimatedTooltipContent>
          </Tooltip>
        </div>
        
        <div className="w-14 h-14 mx-auto mt-4 blur-sm hover:blur-none transition-all duration-150 hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <Accessibility className="w-14 h-14" />
            </TooltipTrigger>
            <AnimatedTooltipContent>
              <p>Accessibility to all</p>
            </AnimatedTooltipContent>
          </Tooltip>
        </div>
        
        <div className="w-14 h-14 mx-auto mt-4 blur-sm hover:blur-none transition-all duration-150 hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <CircuitBoard className="w-14 h-14" />
            </TooltipTrigger>
            <AnimatedTooltipContent>
              <p>AI integrations</p>
            </AnimatedTooltipContent>
          </Tooltip>
        </div>
        
        <div className="w-14 h-14 mx-auto mt-4 blur-sm hover:blur-none transition-all duration-150 hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <Blocks className="w-14 h-14" />
            </TooltipTrigger>
            <AnimatedTooltipContent>
              <p>Gutenberg blocks</p>
            </AnimatedTooltipContent>
          </Tooltip>
        </div>
        
        <div className="w-14 h-14 mx-auto mt-4 blur-sm hover:blur-none transition-all duration-150 hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <Layout className="w-14 h-14" />
            </TooltipTrigger>
            <AnimatedTooltipContent>
              <p>Interactive design</p>
            </AnimatedTooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};