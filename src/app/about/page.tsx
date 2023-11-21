
"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import { ScrollSection } from '@/components/animations/ScrollSection';

export default function Page() {
  return (
    <main className="flex h-full flex-row flex-wrap">

      <ScrollSection>
      <h1 className="text-9xl font-black">What about me?</h1>
        <h1 className="text-8xl">
          <span className="flex w-full">
            I am a Vancouver based, professional web developer with a passion for beautiful, sustianable, and accessible web experiences.
          </span>
        </h1>
      </ScrollSection>
    </main>
  );
}