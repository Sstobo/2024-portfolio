"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import { ClipboardCopy } from "lucide-react";

export function MainMenu() {
  return (
    <div className="ml-7 hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Lets Talk!</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-full md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end  p-6 no-underline outline-none focus:shadow-md "
                      href="/"
                    >
                      <div className="border border-dashed border-black dark:border-0 p2 rounded-t-3xl bg-slate-200 dark:bg-slate-700">
                      <Image
                        src="/tinyme.png"
                        alt="Picture of Sean Stobo"
                        width={300}
                        height={300}
                        className=""
                      />
                      </div>

                      <div className="mb-2 mt-4 text-lg font-medium">
                        Sean Stobo
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Im an experienced web developer with a passion for
                        mentoring, teaching, and building beautiful sustainable
                        websites.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                <a
                  href="https://www.linkedin.com/in/sean-stobo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItem title="Linked In">
                    <div className="flex flex-row">
                      <Image
                        src="/linkedin.png"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                        className="object-contain mr-3"
                      />
                      <div className="w-2/3">You can find me on Linkedin</div>
                    </div>
                  </ListItem>
                </a>

                <a
                  href="https://github.com/Sstobo"
                  target="_blank"
                  rel="noopener noreferrer"
            
                >
                  <ListItem title="Check out my Github">
                    <div className="flex flex-row">
                      <Image
                        src="/github.png"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                        className="object-contain mr-3"
                      />
                      <div className="w-2/3">
                        Ive got tons of code to see on Github
                      </div>
                    </div>
                  </ListItem>
                </a>

                <CopyToClipboard
                  text="seanstobo@gmail.com"
                  onCopy={() => alert("Copied to clipboard")}
                >
                  <ListItem
                    title="Send me an email, id love to hear from you!"
                    className="hover:cursor-pointer"
                  >
                    <div className="flex flex-row gap-3 pt-3">
                    <ClipboardCopy />
                    <p>seanstobo@gmail.com</p>
                    </div>

                  </ListItem>
                </CopyToClipboard>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "border dark:border-0 border-dashed border-black first-letter:  block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-200 dark:hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
