"use client"
// Import useEffect Hook from React
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Hand } from "lucide-react";

export function Intro() {
  const [waving, setWaving] = useState(false);

  // Change the useSpring hook to play the animation when 'waving' state is true
  const wavingSpring = useSpring({
    to: { transform: waving ? 'rotate(30deg)' : 'rotate(0deg)' },
    config: { tension: 300, friction: 10 },
  });

  // Event handlers for mouse enter/leave
  const handleMouseEnter = () => setWaving(true);
  const handleMouseLeave = () => setWaving(false);

  // Component return with the event listeners added to the main element
  return (
    <div
      className="flex min-h-screen flex-col text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-9xl">
        <span className="flex w-min">
          Hello! <animated.span style={wavingSpring}><Hand className="w-24 h-24 mt-3"/></animated.span>
        </span>
        Im <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-fuchsia-600 dark:from-amber-300 dark:to-amber-700">Sean Stobo.</span>
      </h1>
      <h1 className="text-9xl">
        I Crafting Digital Art with a Sustainable Edge.
      </h1>
    </div>
  );
}  