"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Intro } from '@/components/Intro';
import { TechStack } from '@/components/TechStack';
import { JobsDone } from '@/components/JobsDone';
import { FeaturedBuild } from '@/components/FeaturedBuild';
import Image from 'next/image'
import { ScrollSection } from '@/components/animations/ScrollSection';


export default function Page() {
  return (
    <main className="flex h-full flex-row flex-wrap">
      <ScrollSection>
        <Intro />
      </ScrollSection>
    </main>
  );
}