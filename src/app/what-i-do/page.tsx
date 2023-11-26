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
            description="I optimize systems to reduce costs, and I create beautiful products to increase revenue."
            subheading="I lead software initiatives with precision, transforming project specifications into high-value technical solutions. From engineered API integrations that harness the potential of LLMs to feature-rich WordPress platforms, my aim is steady—delivering consistent, impactful results. I mentor teams to craft flawless digital experiences rapidly, always with a keen eye on escalating business growth and operational efficiency."
            fontStyle={`from-blue-400 to-cyan-600 dark:from-fuchsia-500 dark:to-purple-700`}
          />
          
        <div>
          <h2 className="mt-24 md:mt-0 md:ml-9 mb-12 text-4xl md:text-5xl underline  underline-offset-4 dark:no-underline decoration-dashed w-fit">Wordpress Websites With Custom Gutenberg Blocks</h2>
          <FeaturedBuild
            subHeading="Recent Build"
            heading="Work On Climate"
            description="A custom WordPress theme built for the Work On Climate campaign. This site features custom Gutenberg Blocks, custom post types, custom taxonomies, and a custom theme."
            image="/woc.png"
            imageAlt="Work On Climate"
            fontStyle={`from-emerald-400 to-emerald-800 dark:to-emerald-100`}
            link={`https://workonclimate.org/`}
          />

          <FeaturedBuild
            subHeading="Recent Work"
            heading="SoftLanding"
            description="A custom WordPress theme built for the Work On Climate campaign. The site features a custom-built interactive map, a custom-built interactive quiz, and a custom-built interactive calculator."
            image="/softlanding.png"
            imageAlt="Softlanding "
            fontStyle={`from-orange-400 to-orange-800 dark:to-orange-100`}
            link={`https://www.softlanding.ca/`}
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


          <h2 className="md:ml-9 mb-12 text-4xl md:text-5xl underline  underline-offset-4 dark:no-underline decoration-dashed w-fit">GPT Powered AI Applications</h2>
          <FeaturedBuild
            subHeading="LLM Storyteller App"
            heading="Visit Storyland"
            description="A beautiful and engaging web app that uses GPT-4 Turbo to generate stories based on user input. Leveraging the new JSON enforcement, Whisper voice simulation, and Dalle-3."
            image="/story.png"
            imageAlt="Work On Climate"
            fontStyle={`from-red-400 to-red-800 dark:to-rose-500`}
            link={`https://storyland-two.vercel.app/`}
          />

          <h2 className="md:ml-9 mb-12 text-4xl md:text-5xl underline  underline-offset-4 dark:no-underline decoration-dashed w-fit">Bespoke Dashboard Applications</h2>
          <FeaturedBuild
            subHeading="API Interface and Material UI"
            heading="Stock Market Dashboardd"
            description="A comprehensive and powerful fully featured investment information dashboard."
            image="/stocks.png"
            imageAlt="Stocks"
            fontStyle={`from-green-400 to-green-800 dark:to-green-500`}
            link={`https://storyland-two.vercel.app/`}
          />


          </div>
     </ScrollSection>

     <div>

        <h3 className="text-3xl md:text-6xl font-medium mt-32 mb-6 underline  underline-offset-4 dark:no-underline decoration-dashed">More completed projects.</h3>
        <p className="md:text-3xl text-xl font-thin  dark:text-slate-300 mb-9 w-fit">Some of the many websites I have built. Design and content provided by the talented team at forgeandsmith.com.</p>
          <JobsDone />
        </div>
 

    </main>
  );
}