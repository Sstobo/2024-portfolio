"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Intro } from '@/components/Intro';
import { TechStack } from '@/components/TechStack';
import { JobsDone } from '@/components/JobsDone';
import { FeaturedBuild } from '@/components/FeaturedBuild';
import { ScrollSection } from '@/components/animations/ScrollSection';
import { PageBanner } from '@/components/PageBanner';


export default function Home() {
  return (
    <main className="flex h-full flex-row flex-wrap">

      <ScrollSection>

          <PageBanner
            heading="What I Do"
            description="I am a senior agency developer with 6 years of full-scale production experience, and the leadership and training skills developed in 10 years working as an executive chef. I create pixel-perfect websites and custom components at pace and scale, and I teach others to do the same."
            fontStyle={`from-pink-400 to-fuchsia-600 dark:from-fuchsia-500 dark:to-purple-700`}
          />
          
        <div>
          <h2 className="ml-9 mb-12 text-5xl border-b-2 border-black border-dashed dark:border-white w-fit">Wordpress Websites With Custom Gutenberg Blocks</h2>
          <FeaturedBuild
            subHeading="Latest Build"
            heading="Work On Climate"
            description="A custom WordPress theme built for the Work On Climate campaign. The site features a custom-built interactive map, a custom-built interactive quiz, and a custom-built interactive calculator."
            image="/woc.png"
            imageAlt="Work On Climate"
            fontStyle={`from-emerald-400 to-emerald-800 dark:to-emerald-100`}
            link={`https://workonclimate.org/`}
          />

          <FeaturedBuild
            subHeading="Recent Work"
            heading="Lindome Structures"
            description="A custom WordPress theme built for the Work On Climate campaign. The site features a custom-built interactive map, a custom-built interactive quiz, and a custom-built interactive calculator."
            image="/lindome.png"
            imageAlt="Lindome Structures"
            fontStyle={`from-cyan-400 to-blue-800 dark:to-blue-100`}
            link={`https://lindomestructures.com/`}
          />


<h2 className="ml-9 mb-12 text-5xl border-b-2 border-black border-dashed dark:border-white w-fit">GPT Powered AI Applications</h2>
          <FeaturedBuild
            subHeading="LLM Storyteller App"
            heading="Visit Storyland"
            description="A beautiful and engaging web app that uses GPT-4 Turbo to generate stories based on user input. Leveraging the new JSON enforcement, Whisper voice simulation, and Dalle-3."
            image="/story.png"
            imageAlt="Work On Climate"
            fontStyle={`from-red-400 to-red-800 dark:to-rose-500`}
            link={`https://storyland-two.vercel.app/`}
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