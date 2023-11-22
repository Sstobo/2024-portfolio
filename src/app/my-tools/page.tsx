"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Intro } from '@/components/Intro';
import { TechStack } from '@/components/TechStack';
import { JobsDone } from '@/components/JobsDone';
import { FeaturedBuild } from '@/components/FeaturedBuild';
import Image from 'next/image'
import { ScrollSection } from '@/components/animations/ScrollSection';
import { PageBanner } from '@/components/PageBanner';


export default function Home() {
  return (
    <main className="flex flex-row flex-wrap">

      <ScrollSection>
    
          <PageBanner
            heading="The Tools I Use"
            description="A cook is only as good as their ingredients. I use the best tools for the job, from tried and true, to cutting edge."
            fontStyle={`from-pink-400 to-fuchsia-600 dark:from-fuchsia-500 dark:to-purple-700`}
          />

   
       
      </ScrollSection>

      <h3 className="text-5xl font-bold  mb-3">Full-Stack Developer: Crafting Eco-Efficient, Future-Proof Digital Experiences</h3>
      <p className="text-xl dark:text-slate-400 mb-9 w-2/4">With a devotion to the art of code, I engineer seamless, scalable web applications harnessing the power of server-side rendering, utility-first styling, and robust type-safe languages, all underpinned by a philosophy of sustainability in the digital realm.</p>
      <TechStack />

      
    </main>
  );
}