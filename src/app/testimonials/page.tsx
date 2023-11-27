"use client";
import React from "react";
import { ScrollSection } from "@/components/animations/ScrollSection";
import { PageBanner } from "@/components/PageBanner";
import { Quote, Linkedin } from "lucide-react";

// The Testimonial interface
interface Testimonial {
  name: string;
  title: string;
  link: string;
  quote: string;
}

// Adding an index signature to the Testimonials interface
interface Testimonials {
  [key: string]: Testimonial;
}

const testimonials: Testimonials = {
  testimonial1: {
    name: "Inbal Nachman",
    title: "Director, Work on Climate",
    link: "https://www.linkedin.com/in/inbalnachman/",
    quote:
      "I’m really glad to write this recommendation for Sean Stobo, who was our Lead Web Developer for Work on Climate’s website refresh. Sean helped in every stage of the process, he even helped us find other talented web designers and developers that contributed their time to this project. Sean’s dedication made our website not just strong and easy for users, but also top-notch in quality. Throughout the project, Sean was incredibly helpful—always there when we needed him, ready to tackle any issue, and super quick in responding. His knack for solving problems fast kept our project moving smoothly without cutting corners on quality.  Working with Sean was an absolute breeze. He was professional, but also really got what we were trying to do, which helped turn our ideas into a website that really makes an impact. I’d recommend Sean in a heartbeat for any web development project. He was amazing to work with and made a huge difference in our project.",
  },
  testimonial2: {
    name: "Gabriel Dias",
    title: "Former Web Developer, Forge and Smith",
    link: "https://www.linkedin.com/in/gsd-init/",
    quote:
      "I am forever grateful for the opportunity to get to know Sean on a deeper level beyond just coding. During my time as a web developer at Forge & Smith, I had the privilege of working closely with Sean, who also was my mentor. He has played a pivotal role in my growth as a coder, particularly in WordPress development, where he helped me refine my PHP, JavaScript, and SCSS skills. What sets Sean apart is not just his exceptional coding prowess but also his unwavering passion for technology and his boundless creativity. He constantly pushed me to strive for excellence in my work, challenging me to reach new heights in my development projects. Working alongside Sean was an incredibly enriching experience, and I wholeheartedly look forward to the possibility of collaborating with him again in the future. He is not only a brilliant coder but also a true technology enthusiast, making him a valuable asset to any team fortunate enough to have him.",
  },
  testimonial3: {
    name: "Chloe Bosquin",
    title: "Director of Growth Marketing, FISPAN",
    link: "https://www.linkedin.com/in/chloe-bosquin-366ba9110/",
    quote:
      "I am thrilled to recommend my former manager and lead web developer, Sean. His profound knowledge and relentless commitment to solving problems were crucial to the success of our web projects. What inspired me the most is his never-give-up attitude and readiness to tackle any bugs. Sean is indeed not only a technical expert but also a fantastic manager who fosters collaboration and open communication. I couldn’t recommend him enough for any team or project, and I am confident he will continue to exceed expectations wherever he goes.",
  },
  testimonial4: {
    name: "Troy Kelly",
    title: "Operations Manager, Forge and Smith",
    link: "https://www.linkedin.com/in/troy-kelly-241671b1/",
    quote:
      "Sean joined our team as a Jr Web Developer and quickly demonstrated an impressive proficiency in a wide range of programming languages. His ability to grasp complex concepts and find innovative solutions to challenging problems was a significant asset to our development projects. He consistently delivered high-quality code within tight deadlines, showcasing a strong work ethic and a commitment to excellence. Sean is a quick learner and has shown a remarkable ability to adapt to new technologies and methodologies. He actively seeks out opportunities for professional development and stays on top of industry trends. I have no doubt that Sean would be a tremendous asset to any team. He possesses the technical expertise and dedication that are essential for success. If you have any further questions or would like additional information, please feel free to contact me.",
  },
};

export default function Page() {
  return (
    <main className="flex md:h-full flex-row flex-wrap">
      <ScrollSection>
        <PageBanner
          heading="Testimonials"
          description="I have worked with some wonderful people, heres what they have to say."
          subheading="At the core of any project are the people. Relationships must be built and trust must be earned. I am proud to have collaborated with some amazing people and I am grateful for the opportunity to have learned from them. "
          fontStyle={`from-teal-300 via-fuchsia-500 to-blue-600 dark:from-emerald-500 dark:via-cyan-400 dark:to-purple-100`}
        />
      </ScrollSection>

      {/* testimonials */}
      <div className="flex flex-col w-full justify-between items-stretch mb-32">
        <div className="dark:border-0 dark:bg-slate-950 rounded p-12 border-2 border-black border-dashed mb-12">
          <p className="text-xl md:text-2xl  italic relative">
            <Quote className="absolute -left-9 "/>
            {testimonials.testimonial1.quote}
            <Quote className="absolute -right-7 bottom-0 "/>
          </p>
          <p className="font-bold mt-5">{testimonials.testimonial1.name}</p>
          <p className="mb-3 text-teal-500">
            {testimonials.testimonial1.title}
          </p>
          <a
            href={testimonials.testimonial1.link}
            target="_blank"
            className="underline"
          >
            <Linkedin />
          </a>
        </div>

        <div className="dark:border-0 dark:bg-slate-950 rounded p-12 border-2 border-black border-dashed  mb-12">
        <p className="text-xl md:text-2xl  italic relative">
            <Quote className="absolute -left-9 "/>
            {testimonials.testimonial2.quote}
            <Quote className="absolute -right-7 bottom-0 "/>
          </p>
          <p className="font-bold mt-5">{testimonials.testimonial2.name}</p>
          <p className="mb-3 text-teal-500">
            {testimonials.testimonial2.title}
          </p>
          <a
            href={testimonials.testimonial2.link}
            target="_blank"
            className="underline"
          >
            <Linkedin />
          </a>
        </div>

        <div className="dark:border-0 dark:bg-slate-950 rounded p-12 border-2 border-black border-dashed  mb-12">
        <p className="text-xl md:text-2xl  italic relative">
            <Quote className="absolute -left-9 "/>
            {testimonials.testimonial3.quote}
            <Quote className="absolute -right-7 bottom-0 "/>
          </p>
          <p className="font-bold mt-5">{testimonials.testimonial3.name}</p>
          <p className="mb-3 text-teal-500">
            {testimonials.testimonial3.title}
          </p>
          <a
            href={testimonials.testimonial3.link}
            target="_blank"
            className="underline"
          >
            <Linkedin />
          </a>
        </div>

        <div className="dark:border-0 dark:bg-slate-950 rounded p-12 border-2 border-black border-dashed  mb-12">
        <p className="text-xl md:text-2xl  italic relative">
            <Quote className="absolute -left-9 "/>
            {testimonials.testimonial4.quote}
            <Quote className="absolute -right-7 bottom-0 "/>
          </p>
          <p className="font-bold mt-5">{testimonials.testimonial4.name}</p>
          <p className="mb-3  text-teal-500">
            {testimonials.testimonial4.title}
          </p>
          <a
            href={testimonials.testimonial4.link}
            target="_blank"
            className="underline"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </main>
  );
}
