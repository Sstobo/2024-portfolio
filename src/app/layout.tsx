import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { LeftBar } from "@/components/LeftBar";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sean Stobo - Portfolio",
  description: "Welcome to my portfolio site!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
        <link rel="shortcut icon" href="/public/atom.png" />
        </head>
        <body className={GeistSans.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div
              id="body-wrapper"
              className="-z-40 flex text-left flex-row flex-wrap w-full h-fit min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] background-animate
                from-white
                via-slate-100
                to-white
                dark:from-slate-950
                dark:via-cyan-950
                dark:to-black
              "
              >
              <Header />

              <div id="content" className="flex flex-row w-full">
                <LeftBar />

                <div id="main" className="w-full xl:w-11/12 xl:pl-52 xl:pt-40 pl-3 md:pl-32 pt-64 pr-3 md:pr-10  flex flex-col  ">
                  <Suspense fallback={<div>Loading...</div>}> 
                    {children}
                  </Suspense>
                </div>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
