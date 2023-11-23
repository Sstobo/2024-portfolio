"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { ScrollSection } from "@/components/animations/ScrollSection";
import { PageBanner } from "@/components/PageBanner";
import Image from "next/image";

const ImageItem = ({
  title,
  src,
  alt,
  additionalClasses,
}: {
  title: string;
  src: string;
  alt: string;
  additionalClasses: string;
}) => {
  // Rest of the code...
  return (
    <div className={`relative mb-3 ${additionalClasses}`}>
      <h3 className="text-3xl font-bold bottom-1/4 absolute mx-auto  text-white p-4 drop-shadow-md">
        {title}
      </h3>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className="object-cover h-96"
      />
    </div>
  );
};

export default function Page() {
  return (
    <main className="flex h-full flex-row flex-wrap">
      <ScrollSection>
        <PageBanner
          heading="Who am I?"
          description="I am a Vancouver based, professional Web Developer and Project Manager, with a passion for beautiful, sustianable, and accessible web experiences."
          subheading="Prior to leading Development Projects, many years ago, I was a corporate restaurant Chef. Recruiting, training and leading highly effective teams of up to 80 cooks, has seasoned my ability to immediatly impact teams and outcomes. I combine technical expertise with a strong sense of empathy and a passion for teaching and mentoring, as well as a deep understanding of the importance of communication and collaboration."
          fontStyle={`from-teal-300 via-fuchsia-500 to-blue-600 dark:from-emerald-500 dark:via-cyan-400 dark:to-purple-100`}
        />
      </ScrollSection>

      <h3 className="text-7xl font-bold mb-16">
        Here are some of the things that make me happy.💗
      </h3>

      <div className="flex flex-wrap w-full justify-between items-stretch mb-32">
        <div className="flex-1 p-1.5">
          <ImageItem
            title="My little fluffball Sol."
            src="/sol.jpg"
            alt="Fluffball Sol"
            additionalClasses="mb-3"
          />
          <ImageItem
            title="Making pizza!"
            src="/cooking.jpeg"
            alt="Making pizza"
            additionalClasses=""
          />
        </div>

        <div className="flex-1 p-1.5">
          <ImageItem
            title="Spending time with loved ones!"
            src="/mensue.jpg"
            alt="Spending time with loved ones"
            additionalClasses="mb-3" // Adjust the height for this last image
          />
          <ImageItem
            title="Exploring gardens."
            src="/sol2.jpeg"
            alt="Exploring gardens"
            additionalClasses=""
          />
        </div>

        <div className="flex-1 p-1.5">
          <ImageItem
            title="Riding majestic Icelandic warhorses."
            src="/horsy.png"
            alt="Riding Icelandic warhorses"
            additionalClasses=""
          />
          <ImageItem
            title="Skiing in the mountains."
            src="/skiview2.png"
            alt="Skiing in the mountains"
            additionalClasses=""
          />
        </div>

        <div className="flex-1 p-1.5">
          <ImageItem
            title="Travelling and training Brazilian Jiu Jitsu."
            src="/bjj.png"
            alt="Training Brazilian Jiu Jitsu"
            additionalClasses=""
          />
          <ImageItem
            title="Enjoying the moment."
            src="/skiview.png"
            alt="Enjoying the moment"
            additionalClasses=""
          />
        </div>
      </div>
    </main>
  );
}
