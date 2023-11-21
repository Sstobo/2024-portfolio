"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Intro } from '@/components/Intro';
import { TechStack } from '@/components/TechStack';
import { JobsDone } from '@/components/JobsDone';
import { FeaturedBuild } from '@/components/FeaturedBuild';
import { ScrollSection } from '@/components/animations/ScrollSection';



export default function Home() {
  return (
    <main className="flex h-full flex-row flex-wrap">

      <ScrollSection>
        <div className="w-12/12 mb-36" id="whatido">
          <h2 className="text-9xl font-black mb-3">What I Do</h2>
          <p className="text-7xl mb-28">
            A senior agency developer with 6 years of full-scale production
            experience, I create pixel-perfect websites and custom components at pace and scale.
          </p>
       
          <FeaturedBuild
            subHeading="Latest Build"
            heading="Work On Climate"
            description="A custom WordPress theme built for the Work On Climate campaign. The site features a custom-built interactive map, a custom-built interactive quiz, and a custom-built interactive calculator."
            image="/woc.png"
            imageAlt="Work On Climate"
            fontStyle={`from-emerald-400 to-emerald-800 dark:to-emerald-100`}
          />

          <FeaturedBuild
            subHeading="Recent Work"
            heading="Lindome Structures"
            description="A custom WordPress theme built for the Work On Climate campaign. The site features a custom-built interactive map, a custom-built interactive quiz, and a custom-built interactive calculator."
            image="/lindome.png"
            imageAlt="Lindome Structures"
            fontStyle={`from-cyan-400 to-blue-800 dark:to-blue-100`}
          />
          </div>
     </ScrollSection>

     <div>

        <h3 className="text-5xl font-bold mt-32 mb-3">More completed projects.</h3>
        <p className="text-xl dark:text-slate-400 mb-9 w-2/4">Some of the many many website I have created. I was the primary developer on all of these. Design and content provided by the talented team at forgeandsmith.com.</p>
          <JobsDone />
        </div>
 

    </main>
  );
}