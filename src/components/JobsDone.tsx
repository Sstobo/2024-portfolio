import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

type JobItemProps = {
  link: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  skills: string;
  labelOne: string;
  statOne: string;
  labelTwo: string;
  statTwo: string;
  labelThree: string;
  statThree: string;
  color: string; // new prop to control the color
  tech: string[];
};

const JobItem = ({
  link,
  src,
  width,
  height,
  alt,
  title,
  skills,
  labelOne,
  statOne,
  labelTwo,
  statTwo,
  labelThree,
  statThree,
  color, // new prop to control the color
  tech
}: JobItemProps) => {
  const controls = useAnimation();
  const containerVariants = {
    hidden: {
      scale: 1,
      y: 0,
      zIndex: 1,
      transition: {
        scale: {
          duration: 0.2,
          type: "bounce",
          stiffness: 30,
          ease: "easeInOut",
          damping: 20,
        },
        y: {
          duration: 0.2,
          type: "bounce",
          ease: "easeInOut",
          stiffness: 100,
          damping: 20,
        },
      },
    },
    visible: {
      scale: 1,
      y: -20,
      zIndex: 10,

      transition: {
        scale: {
          type: "bounce",
          stiffness: 100,
          damping: 20,
          ease: "easeInOut",
          duration: 0.2,
        },
        y: {
          type: "bounce",
          stiffness: 100,
          ease: "easeInOut",
          damping: 20,
          duration: 0.2,
        },
      },
    },
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      transition: {
        opacity: {
          duration: 0.2,
          ease: "easeInOut",
        },
        scaleY: {
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      },
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        opacity: {
          duration: 0.2,
          ease: "easeInOut",
        },
        scaleY: {
          type: "spring",
          duration: 0.2,
          stiffness: 200,
          damping: 20,
        },
      },
    },
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      className={`w-full md:w-1/3 lg:w-3/12 xl:w-1/6 p-3 border-2 border-dashed border-black dark:hover:border-slate-900 hover:border-0 opacity-50 hover:opacity-100 relative  dark:bg-slate-900  hover:dark:bg-slate-950   hover:shadow-lg bg-white rounded transition-all duration-300`}
      onHoverStart={() => controls.start("visible")}
      onHoverEnd={() => controls.start("hidden")}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <Image
        src={src}
        width={width}
        height={300}
        alt={alt}
        className="w-full mb-3 object-cover rounded h-36"
      />
      <h4
        className={`text-xl font-bold mb-1 dark:text-cyan-400`}
      >
        {title}
      </h4>

      {tech.length > 0 && (
          <div className="flex flex-wrap mb-6">
            {tech.map((techItem, index) => (
              <span
                key={index}
                className="text-sm mr-2 mb-2 bg-teal-200 dark:bg-slate-700 dark:text-amber-300 rounded px-3 py-1"
              >
                {techItem}
              </span>
            ))}
          </div>
        )}

      <p className="dark:text-slate-400  mb-3 font-light text-sm">{skills}</p>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={statsVariants}
        className="stats  p-3 dark:bg-slate-600 bg-teal-100 w-full rounded-b mb-3 absolute shadow-md -left-0"
      >
        <div className="flex">
          <p className="text-xs mb-1 font-bold">
            {labelOne}
            <span className="text-emerald-500 font-bold ml-3"> {statOne}</span>
          </p>
        </div>
        <div className="flex">
          <p className="text-xs  mb-1  font-bold">
            {labelTwo}
            <span className="text-emerald-500 font-bold ml-3 ">{statTwo}</span>
          </p>
        </div>
        <div className="flex">
          <p className="text-xs mb-1  font-bold">
            {labelThree}
            <span className="text-emerald-500 font-bold ml-3">
              {" "}
              {statThree}
            </span>
          </p>
        </div>
      </motion.div>
    </motion.a>
  );
};

export const JobsDone = () => {
  const jobItems = [
    {
      link: "https://miracon.ca/",
      src: "/miracon.png",
      width: 300,
      height: 300,
      alt: "Image of Miracon's website",
      title: "Miracon",
      skills:
        "We delivered a visually engaging, scalable WordPress multisite with improved UX, SEO, and load times, significantly enhancing Miracon's digital presence and lead conversion metrics.",
      labelOne: "Organic search traffic:",
      statOne: "+281%",
      labelTwo: "Year over year conversion rate:",
      statTwo: "+59%",
      labelThree: "Year over year pageviews:",
      statThree: "+255%",
      color: "green",
      tech: ['PHP', 'SCSS', 'Gutenberg Blocks', 'Post Filtering', 'Custom Taxonomies']
    },
    {
      link: "https://www.mrslumber.com/",
      src: "/mrs.png",
      width: 300,
      height: 300,
      alt: "Image of Mrs Lumber's website",
      title: "Mrs Lumber",
      skills: "Revamped MRS Lumber's web presence with a user-centric, SEO-optimized WordPress site, enhancing navigation and product visibility for boosted engagement and customer conversion.",
      labelOne: "Website visits:",
      statOne: "+88%",
      labelTwo: "Year over year pageviews:",
      statTwo: "+86%",
      labelThree: "Year over year page speed:",
      statThree: "+60%",
      color: "cyan",
      tech: ['PHP', 'SCSS', 'Gutenberg Blocks', 'Post Filtering', 'Wordpress']
    },
    {
      link: "https://cpd.chbabc.org/",
      src: "/chba.png",
      width: 300,
      height: 300,
      alt: "Image of CHBA's website",
      title: "CHBA",
      skills: "Launched a dedicated, SEO-enhanced educational platform for CHBA BC with streamlined navigation and user-focused design, leading to significantly improved site metrics and user engagement.",
      labelOne: "Website visits:",
      statOne: "+60%",
      labelTwo: "Organic search traffic:",
      statTwo: "+66%",
      labelThree: "Pageviews:",
      statThree: "+79%",
      color: "red",
      tech: ['PHP', 'SCSS', 'Gutenberg Blocks', 'Post Filtering', 'API Integration']
    },
    {
      link: "https://www.summfoods.com/",
      src: "/summ.png",
      width: 300,
      height: 300,
      alt: "Image of Summ's website",
      title: "Summ Foods",
      skills: "Developed a visually rich, SEO-optimized WordPress site for SUMM! Foods, with a streamlined architecture and responsive design, leading to a marked increase in engagement and referral metrics.",
      labelOne: "Average session duration:",
      statOne: "+105%",
      labelTwo: "Year over year pages per session:",
      statTwo: "+64%",
      labelThree: "Year over year referral traffic:",
      statThree: "+970%",
      color: "amber",
      tech: ['PHP', 'SCSS', 'HTML', 'Jquery', 'Wordpress', 'ACF']
    },
    {
      link: "", // MISSING LINK
      src: "/kitimat.png",
      width: 300,
      height: 300,
      alt: "Image of Kitimat's website",
      title: "Kitimat Bound",
      skills: "Engineered a captivating, SEO-friendly WordPress site for Kitimat Bound, enhancing user experience with immersive visuals and intuitive navigation, resulting in impressive growth in organic search traffic and mobile engagement.",
      labelOne: "Organic search traffic:",
      statOne: "+101%",
      labelTwo: "Year over year pageviews:",
      statTwo: "+72%",
      labelThree: "Mobile traffic:",
      statThree: "+117%",
      color: "purple",
      tech: ['PHP', 'SCSS', 'Gutenberg Blocks', 'Jquery', 'Wordpress']
    },
    {
      link: "", // MISSING LINK
      src: "/delta.png",
      width: 300,
      height: 300,
      alt: "Image of Delta Q's website",
      title: "Delta Q Technologies",
      skills: "Delivered Delta-Q Technologies a powerful, dynamic WordPress site with refined aesthetics, leading to substantial increases in page speeds, onsite engagement, and session quality.",
      labelOne: "Faster page speeds:",
      statOne: "+86%",
      labelTwo: "Year over year more time on site:",
      statTwo: "+73%",
      labelThree: "Year over year pages per session:",
      statThree: "+53%",
      color: "green",
      tech: ['PHP', 'SCSS', 'Gutenberg Blocks', 'Wordpress', 'Filtering']
    },
    {
      // TODO ADD RCBC
      link: "https://rcbc.ca/",
      src: "/RCBC.png",
      width: 300,
      height: 300,
      alt: "Image of RCBCs' website",
      title: "Recycling Council of BC",
      skills: "Implemented a modern, responsive WordPress site for RCBC, focusing on user experience enhancements and integrating the Recyclepedia feature for streamlined information access.",
      labelOne: "Organic search traffic:",
      statOne: "+132%",
      labelTwo: "Year over year total pageviews:",
      statTwo: "+318%",
      labelThree: "Year over year pages per session:",
      statThree: "+116%",
      color: "yellow",
      tech: ['PHP', 'SCSS', 'ACF', 'API Integration', 'Wordpress']
    },
    {
      link: "", // MISSING LINK
      src: "/nexii.png",
      width: 300,
      height: 300,
      alt: "Image of Nexii's website",
      title: "Nexii",
      skills: "Engineered a sleek, content-rich WordPress site for Nexii, spotlighting their sustainable building solutions and aligning with their mission, resulting in a significant uptick in organic search traffic and user engagement.",
      labelOne: "Organic search traffic:",
      statOne: "+90%",
      labelTwo: "Year over year pageviews:",
      statTwo: "+113%",
      labelThree: "Year over year U.S. traffic:",
      statThree: "+314%",
      color: "pink",
      tech: ['PHP', 'SCSS', 'JS', 'Gutenberg Blocks', 'Wordpress']
    },
    {
      link: "https://pcrs.ca/",
      src: "/pcrs.png",
      width: 300,
      height: 300,
      alt: "Image of PCR's website",
      title: "PCRS",
      skills: "Delivered a visually inviting, intuitive WordPress CMS for PCRS, focused on their mission and services, resulting in a reduced bounce rate, longer sessions, and increased search traffic.",
      labelOne: "Year over year bounce rate:",
      statOne: "-57%",
      labelTwo: "Year over year longer sessions:",
      statTwo: "+43%",
      labelThree: "First month post-launch more search traffic:",
      statThree: "+10%",
      color: "purple",
      tech: ['PHP', 'SCSS', 'Gutenberg Blocks', 'Wordpress']
    },
    {
      link: "https://www.lgm.ca/",
      src: "/lgm.png",
      width: 300,
      height: 300,
      alt: "Image of LGM Financial Services' website",
      title: "LGM Financial Services",
      skills: "Crafted a contemporary, SEO-optimized WordPress site for LGM, enhancing brand presence and user experience, leading to increased engagement, faster page loads, and more insightful performance tracking.",
      labelOne: "Website users:",
      statOne: "+70%",
      labelTwo: "Year over year pages per session:",
      statTwo: "+57%",
      labelThree: "Year over year page speed:",
      statThree: "+20%",
      color: "green",
      tech: ['PHP', 'SCSS', 'Gutenberg Blocks', 'Wordpress']
    },
    {
      link: "https://www.craftbeermarket.ca/",
      src: "/craft.png",
      width: 300,
      height: 300,
      alt: "Image of Craft Beer Market's website",
      title: "Craft Beer Market",
      skills: "Delivered for CRAFT Beer Market a robust, user-friendly WordPress site with a complex menu ordering system, complementing their brand refresh and streamlining the customer experience, leading to notable gains in organic traffic and page load speed.",
      labelOne: "Organic search traffic:",
      statOne: "+73%",
      labelTwo: "Year over year faster page loads:",
      statTwo: "+55%",
      labelThree: "Year over year organic impressions:",
      statThree: "+115%",
      color: "blue",
      tech: ['PHP', 'SCSS', 'GEO Location', 'Javascript', 'Wordpress']
    },
    {
      link: "https://visitprincerupert.com/",
      src: "/rupert.png",
      width: 300,
      height: 300,
      alt: "Image of Tourism Prince Rupert's website",
      title: "Tourism Prince Rupert",
      skills: "Deployed for Tourism Prince Rupert an inviting, easy-to-navigate WordPress site with enhanced content management, augmenting brand storytelling while significantly increasing organic search traffic and mobile accessibility.",
      labelOne: "Organic search traffic:",
      statOne: "+40%",
      labelTwo: "Year over year pageviews:",
      statTwo: "+46%",
      labelThree: "Year over year mobile traffic:",
      statThree: "+52%",
      color: "yellow",
      tech: ['PHP', 'SCSS', 'Gutenberg Blocks', 'Wordpress']
    },
  ];

  // TODO muddlerrs!!

  return (
    <div className="w-full flex flex-row gap-3 flex-wrap" id="jobsdone">
      {jobItems.map((item, index) => (
        <JobItem key={index} {...item} />
      ))}
    </div>
  );
};
