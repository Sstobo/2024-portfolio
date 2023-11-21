"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Intro } from '@/components/Intro';
import { TechStack } from '@/components/TechStack';
import { JobsDone } from '@/components/JobsDone';
import { FeaturedBuild } from '@/components/FeaturedBuild';
import Image from 'next/image'
import { ScrollSection } from '@/components/animations/ScrollSection';


export default function Home() {
  return (
    <main className="flex h-full flex-row flex-wrap">

      <ScrollSection>
        <div className="w-12/12" id="tools">
          <h2 className="text-9xl font-black mb-3">The Tools I Use</h2>
          <p className="text-4xl font-black mb-12">
            A cook is only as good as their ingredients. I use the best tools for the job, from tried and true, to cutting edge.
          </p>
          <TechStack />
        </div>
      </ScrollSection>
    </main>
  );
}