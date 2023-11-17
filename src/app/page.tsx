"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Intro } from '@/components/Intro';
import { TechStack } from '@/components/TechStack';
import { JobsDone } from '@/components/JobsDone';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 0, x: -200 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
};

type ScrollSectionProps = {
  children: ReactNode;
};

const ScrollSection: React.FC<ScrollSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="flex h-full flex-row flex-wrap">
      <ScrollSection>
        <Intro />
      </ScrollSection>

      <ScrollSection>
        <div className="w-12/12 mb-36" id="whatido">
          <h2 className="text-7xl font-black mb-3">What I Do</h2>
          <p className="text-4xl mb-12">
            A senior agency developer with 6 years of full-scale production
            experience, I create pixel-perfect websites and custom components at pace and scale.
          </p>
          <JobsDone />
        </div>
      </ScrollSection>

      <ScrollSection>
        <div className="w-12/12" id="tools">
          <h2 className="text-7xl font-black mb-3">The Tools I Use</h2>
          <p className="text-4xl mb-12">
            A cook is only as good as their ingredients. I use the best tools for the job, from tried and true, to cutting edge.
          </p>
          <TechStack />
        </div>
      </ScrollSection>
    </main>
  );
}