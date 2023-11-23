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
            subheading="I love to learn. Its probably my favorite thing to do. Exploring new technologies, and honing the depth of my knowledge in the tools I use is a driving passion of mine."
            fontStyle={`from-pink-400 to-fuchsia-600 dark:from-green-200 dark:via-emerald-400 dark:to-green-100`}
          />

   
       
      </ScrollSection>

      <h3 className="text-5xl font-bold  mb-3">My Proficiencies</h3>
      <p className="text-xl dark:text-slate-400 mb-9 w-full">As I mentioned, I love to learn, and build new things. This is my prefered toolkit, but the list keeps on growing!</p>
      <TechStack />

      
    </main>
  );
}