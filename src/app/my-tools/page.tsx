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
            description="A cook is only as good as their ingredients. I use the best tools for the job, from tried and true, to cutting edge. "
            subheading="In my current role as a Tech Operations Leader, I blend my passion for programming with leadership, ensuring that technologies such as React, Next.js, PHP, Tailwind, CSS, HTML, and WordPress aren't just tools but catalysts for positive business transformation.  I translate non technical conversation to technical requirements, and provide clear and concise communication that goes both ways.  "
            fontStyle={`from-pink-400 to-fuchsia-600 dark:from-green-200 dark:via-emerald-400 dark:to-green-100`}
          />

   
       
      </ScrollSection>

      <h3 className="text-6xl font-medium mt-32 underline  underline-offset-4 dark:no-underline decoration-dashed  mb-6">My Proficiencies</h3>
      <p className="text-3xl font-thin   dark:text-slate-300 mb-9 w-full">As I mentioned, I love to learn, and build new things. This is my prefered toolkit, but the list keeps on growing!</p>
      <TechStack />

      
    </main>
  );
}