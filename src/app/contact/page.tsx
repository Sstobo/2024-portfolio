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
            <h2 className="mb-5 xl:mb-24 text-5xl md:text-7xl xl:text-9xl  w-full  font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-900 via-teal-500 to-purple-900 dark:from-amber-200 dark:via-amber-600 dark:to-amber-100">Lets get in touch!</h2>
            <p className="w-full xl:w-7/12 md:text-3xl text-xl xl:text-5xl xl:mb-32 md:mb-24 mb-10 font-medium"> My mission is to harness the power of your web platforms to drive revenue, streamline costs, and equip businesses for the future. I'm committed to demystifying technology and aligning it with your business goals, ensuring your team thrives and your bottom line reflects our combined success.</p>
   
            <CopyToClipboard
                  text="seanstobo@gmail.com"
                  onCopy={() => alert("Copied to clipboard")}>
            
            <div className="flex flex-row gap-3 pt-3 w-fit p-3 rounded dark:bg-slate-600 hover:dark:bg-slate-700 bg-teal-200 hover:cursor-pointer hover:bg-teal-300 transition-colors duration-150 ease-in-out">
                    <ClipboardCopy />
                    <p className="">seanstobo@gmail.com</p>
                    </div>
          </CopyToClipboard>
          <p className="text-xs text-grey-500 relative -top-2px">Click to copy</p>
  
      </div>
      </ScrollSection>
    </main>
  );
}
