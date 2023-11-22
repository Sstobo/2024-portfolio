"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { ScrollSection } from "@/components/animations/ScrollSection";
import { PageBanner } from "@/components/PageBanner";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ClipboardCopy } from "lucide-react";

export default function Page() {
  return (
    <main className="flex h-full flex-row flex-wrap">
      <ScrollSection>
        <div className="w-12/12 h-screen">
            <h2 className="text-9xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br from-teal-900 via-teal-500 to-purple-900 dark:from-purple-200 dark:via-cyan-400 dark:to-purple-100">Lets get in touch!</h2>
            <p className="text-5xl mb-10  font-medium"> I am always looking for interesting and meaningful projects to work on. If you have an idea you would like to discuss, or just want to say hi, please feel free to reach out to me.</p>
   
            <CopyToClipboard
                  text="seanstobo@gmail.com"
                  onCopy={() => alert("Copied to clipboard")}>
            
            <div className="flex flex-row gap-3 pt-3 w-fit p-3 rounded dark:bg-slate-600 hover:dark:bg-slate-700 bg-teal-200 hover:cursor-pointer hover:bg-teal-300 transition-colors duration-150 ease-in-out">
                    <ClipboardCopy />
                    <p className="">seanstobo@gmail.com</p>
                    </div>
          </CopyToClipboard>
  
      </div>
      </ScrollSection>
    </main>
  );
}
