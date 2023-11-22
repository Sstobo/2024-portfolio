"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { ScrollSection } from "@/components/animations/ScrollSection";
import { PageBanner } from "@/components/PageBanner";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex h-full flex-row flex-wrap">
      <ScrollSection>
        <PageBanner
          heading="Who am I?"
          description="I am a Vancouver based, professional web developer with a passion for beautiful, sustianable, and accessible web experiences. I have lived an interesting and varied life, which uniquely positions me in the IT marketplace."
          fontStyle={`from-purple-900 via-red-800 to-yellow-600 dark:from-emerald-500 dark:via-cyan-400 dark:to-purple-100`}
        />
      </ScrollSection>

      <h3 className="text-7xl font-bold mt-32 mb-36">Here are some of the things that make me happy.💗</h3>
    
      <div className="flex w-full gap-2">
        <div className="w-1/3 relative">
          <h3 className="text-5xl font-bold top-1/4 mb-3 absolute text-center text-white p-4 drop-shadow-md">
            My little fluffball Sol.
          </h3>
          <Image
            src="/sol.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover  h-2/4 mb-3 rounded hover:scale-125 duration-150"
          />
          <div className="relative mb-3 h-2/4">
            <h3 className="text-5xl font-bold top-3/4 absolute text-center text-white p-4 left-10 drop-shadow-md">
              Making pizza!
            </h3>
            <Image
              src="/cooking.jpeg"
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover  h-full"
            />
          </div>

          <div className="relative  mb-3">
            <h3 className="text-5xl font-bold top-3/4 absolute text-center text-white p-4 drop-shadow-md">
              Exploring gardens.
            </h3>
            <Image
              src="/sol2.jpeg"
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover  h-full"
            />
          </div>
        </div>

        <div className="w-1/3 relative -top-20">
          <h3 className="text-5xl font-bold top-3/4 mb-3 absolute text-center text-white p-4 drop-shadow-md">
            Skiing in the mountains.
          </h3>
          <Image
            src="/skiview2.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover h-full mb-3"
          />
          <div className="relative  mb-3 h-2/4">
            <h3 className="text-5xl font-bold top-3/4 mb-3 absolute text-center text-white p-4 drop-shadow-md">
              Enjoying the moment.
            </h3>
            <Image
              src="/skiview.png"
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover h-full"
            />
          </div>
        </div>

        <div className="w-1/3 relative">
          <h3 className="text-5xl font-bold top-1/4 mb-3 absolute text-center text-white p-4 drop-shadow-md">
            Travelling and training Brazillian Jiu Jitsu.
          </h3>
          <Image
            src="/bjj.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-cover h-2/4 mb-3"
          />
          <div className="relative h-1/4  mb-3">
            <h3 className="text-5xl font-bold top-1/4 mb-3 absolute text-center text-white p-4 drop-shadow-md">
              Riding magestic Icelandic warhorses.
            </h3>
            <Image
              src="/horsy.png"
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover h-full"
            />
          </div>

          <div className="relative h-2/4  mb-3">
            <h3 className="text-5xl font-bold top-1/4 mb-3 absolute text-center text-white p-4 drop-shadow-md">
              Spending time with loved ones!
            </h3>
            <Image
              src="/mensue.jpg"
              alt="Picture of the author"
              width={500}
              height={400}
              className="object-cover object-left   h-full mb-3"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
