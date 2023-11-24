"use client";
// Import useEffect Hook from React
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Hand } from "lucide-react";
import Image from "next/image";
import TypeWriter from "typewriter-effect";
declare module 'typewriter-effect' {
  export interface Options {
    // Add the missing option here
    pauseFor?: number;
  }
}

export function Intro() {
  const [waving, setWaving] = useState(false);

  // Change the useSpring hook to play the animation when 'waving' state is true
  const wavingSpring = useSpring({
    to: { transform: waving ? "rotate(30deg)" : "rotate(0deg)" },
    config: { tension: 300, friction: 10 },
  });

  // Event handlers for mouse enter/leave
  const handleMouseEnter = () => setWaving(true);
  const handleMouseLeave = () => setWaving(false);

  // Component return with the event listeners added to the main element
  return (
    <div
      className="flex flex-col text-left "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-9xl font-black mb-6">
        <span className="flex w-min">
          Hello!{" "}
          <animated.span style={wavingSpring}>
            <Hand className="w-24 h-24 mt-3 dark:text-white" />
          </animated.span>
        </span>
        Im{" "}
        <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-fuchsia-600 dark:from-amber-300 dark:to-amber-700">
          Sean Stobo.
        </span>
      </h1>
      <h2 className="text-6xl font-medium mb-6">
      Tech Operations Leader 
      </h2>
      <h3 className="text-3xl font-thin underline  underline-offset-4 dark:no-underline decoration-dashed  dark:text-slate-300">
      Driving Team Excellence & Business Outcomes in Web Development and Unlocking Value through Streamlined Solutions
      </h3>


      

      <div className="pt-12 pl-9">

      <div className="flex w-30 mb-3">
          <Image
            src="/line-chart.gif"
            alt="An image of a chart"
            width={54}
            height={54}
            className="rounded shadow-sm"
          />
          <div className="dark:text-cyan-300 pl-3 pt-4">
            <TypeWriter
              options={{
                strings: [
                  `{ I drive the metrics that matter. I cut costs and increase revenue. } `,
                ],
                autoStart: true,
                loop: true,
                pauseFor: 15000,
              }}
            />
          </div>
        </div>
        <div className="flex w-30 mb-3">
          <Image
            src="/teacher.gif"
            alt="An image of a tree"
            width={54}
            height={54}
            className="rounded shadow-sm"
          />
          <div className="dark:text-cyan-300 pl-3 pt-4">
            <TypeWriter
              options={{
                strings: [`{ I lead teams and train technical skills. } `],
                autoStart: true,
                loop: true,
                pauseFor: 15000,
              }}
            />
          </div>
        </div>


        <div className="flex w-30 mb-3">
          <Image
            src="/crane.gif"
            alt="An image of a crane"
            width={54}
            height={54}
            className="rounded shadow-sm"
          />
          <div className="dark:text-cyan-300 pl-3 pt-4">
            <TypeWriter
              options={{
                strings: [
                  `{ I custom code websites and applications from the ground up, to your exact specifications. } `,
                ],
                autoStart: true,
                loop: true,
                pauseFor: 15000,
              }}
            />
          </div>
        </div>

        <div className="flex w-30 mb-3">
          <Image
            src="/therapy.gif"
            alt="An image of a tree"
            width={54}
            height={54}
            className="rounded shadow-sm"
          />
          <div className="dark:text-cyan-300 pl-3 pt-4">
            <TypeWriter
              options={{
                strings: [`{ I provide crystal clear communication between laypeople and technical experts. } `],
                autoStart: true,
                loop: true,
                pauseFor: 15000,
              }}
            />
          </div>
        </div>

        <div className="flex w-30 mb-3">
          <Image
            src="/ai.gif"
            alt="An image of a tree"
            width={54}
            height={54}
            className="rounded shadow-sm"
          />
          <div className="dark:text-cyan-300 pl-3 pt-4">
            <TypeWriter
              options={{
                strings: [`{ I build deep AI integrations into software. } `],
                autoStart: true,
                loop: true,
                pauseFor: 15000,
              }}
            />
          </div>
        </div>

 


        <div className="flex w-30">
          <Image
            src="/basketball-player.gif"
            alt="An image of a basketball player"
            width={54}
            height={54}
            className="rounded shadow-sm"
          />
          <div className="dark:text-cyan-300 pl-3 pt-4">
            <TypeWriter
              options={{
                strings: [
                  `{ I create accessible and inclusive environments, to help you share your message with the world. } `,
                ],
                autoStart: true,
                loop: true,
                pauseFor: 15000,
              }}
            />
          </div>
        </div>
      </div>

   
    </div>
  );
}
