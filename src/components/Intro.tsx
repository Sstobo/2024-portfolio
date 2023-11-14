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
      className="flex min-h-screen flex-col text-left  p-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="text-9xl">
        <span className="flex w-min">
          Hello! <animated.span style={wavingSpring}><Hand className="w-24 h-24 mt-3"/></animated.span>
        </span>
        My name is <span className="font-bold dark:text-amber-400">Sean Stobo.</span>
      </h1>
      <h1 className="text-9xl">
        I would like to be your <span className="font-bold">Web Developer.</span>
      </h1>
    </div>
  );
} 