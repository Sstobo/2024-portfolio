"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { Intro } from "@/components/Intro";
import { TechStack } from "@/components/TechStack";
import { JobsDone } from "@/components/JobsDone";
import { FeaturedBuild } from "@/components/FeaturedBuild";
import { ScrollSection } from "@/components/animations/ScrollSection";
import { PageBanner } from "@/components/PageBanner";

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
          <h2 className="md:mt-56 mt-0 md:ml-9 mb-12 text-4xl md:text-5xl underline  underline-offset-4 dark:no-underline decoration-dashed w-fit">
            Wordpress Websites With Custom Gutenberg Blocks
          </h2>
          <FeaturedBuild
            subHeading="Recent Build"
            heading="Work On Climate"
            description="A custom WordPress theme built for the Work On Climate campaign. This site features custom Gutenberg Blocks, custom post types, custom taxonomies, and a custom theme."
            image="/woc.png"
            tech={[
              "React",
              "Gutenberg",
              "PHP",
              "SCSS",
              "Wordpress",
              "JavaScript",
            ]}
            imageAlt="Work On Climate"
            fontStyle={`from-emerald-400 to-emerald-800 dark:to-emerald-100`}
            link={`https://workonclimate.org/`}
          />

          <FeaturedBuild
            subHeading="Recent Work (With the agency Forge And Smith)"
            heading="SoftLanding"
            description="I developed a revamped website for Softlanding, aimed at enhancing the user experience through streamlined navigation and a improving page load times. By optimizing the site architecture, I achieved a 32% increase in organic search traffic and a remarkable 565% boost in conversion rates, while also improving page load speeds by 50% using WordPress CMS for a fully responsive design."
            tech={[
              "WordPress",
              "Gutenberg",
              "PHP",
              "SCSS",
              "HTML",
              "JavaScript",
            ]}
            image="/softlanding.png"
            imageAlt="Softlanding "
            fontStyle={`from-orange-400 to-orange-800 dark:to-orange-100`}
            link={`https://www.softlanding.ca/`}
          />

          <FeaturedBuild
            subHeading="Recent Work (With the agency Forge And Smith)"
            heading="Lindome Structures"
            description="A robust site for Lindome Structures that enhanced SEO and user engagement, leading to a 25% rise in organic search traffic and a 43% increase in page views, and implemented a responsive design utilizing WordPress CMS to enable smooth content management and navigation."
            image="/lindome.png"
            tech={[
              "Gutenberg",
              "PHP",
              "SCSS",
              "HTML",
              "Wordpress",
              "JavaScript",
            ]}
            imageAlt="Lindome Structures"
            fontStyle={`from-cyan-400 to-blue-800 dark:to-blue-100`}
            link={`https://lindomestructures.com/`}
          />

          <h2 className="md:ml-9 mb-12 text-4xl md:text-5xl underline  underline-offset-4 dark:no-underline decoration-dashed w-fit">
            GPT Powered AI Applications
          </h2>
          <FeaturedBuild
            subHeading="LLM Storyteller App"
            heading="Visit Storyland"
            description="A beautiful and engaging web app that uses GPT-4 Turbo to generate stories based on user input. Leveraging the new JSON enforcement, Whisper voice simulation, and Dalle-3."
            image="/story.png"
            tech={["Next.js", "GPT-4", "Dalle-3", "Typescript", "Tailwind"]}
            imageAlt="Work On Climate"
            fontStyle={`from-red-400 to-red-800 dark:to-rose-500`}
            link={`https://storyland-two.vercel.app/`}
          />

          <h2 className="md:ml-9 mb-12 text-4xl md:text-5xl underline  underline-offset-4 dark:no-underline decoration-dashed w-fit">
            Bespoke Dashboard Applications
          </h2>
          <FeaturedBuild
            subHeading="API Interface and Material UI"
            heading="Stock Market Dashboardd"
            description="A comprehensive and powerful fully featured investment information dashboard. Using Material UI and the Alpha Vantage API, this dashboard provides a wealth of information for investors."
            image="/stocks.png"
            tech={["React", "Material UI", "Alpha Vantage API", "Typescript"]}
            imageAlt="Stocks"
            fontStyle={`from-green-400 to-green-800 dark:to-green-500`}
            link={`https://storyland-two.vercel.app/`}
          />
        </div>
      </ScrollSection>

      <div className="pb-24">
        <h3 className="text-3xl md:text-6xl font-medium mt-32 mb-6 underline  underline-offset-4 dark:no-underline decoration-dashed">
          More completed projects.
        </h3>
        <p className="md:text-3xl text-xl font-thin  dark:text-slate-300 mb-9 w-fit">
          Some of the many websites I have built. Designs, UI and content provided by
          the talented team at forgeandsmith.com.
        </p>
        <JobsDone />
      </div>
    </main>
  );
}
