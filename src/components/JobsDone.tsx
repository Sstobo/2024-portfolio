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
}: JobItemProps) => {
  const controls = useAnimation();
  const containerVariants = {
    hidden: {
      scale: 1,
      opacity: 0.8,
      y: 0,
      zIndex: 0,
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
      scale: 1.2,
      opacity: 1,
      y: -20,
      zIndex: 1,

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
      className={`w-3/12 z-25 relative dark:border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950 hover:border-white hover:bg-white hover:shadow-lg bg-white rounded transition-all duration-300`}
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
        className="w-full mb-3 object-contain h-36"
      />
      <h4
        className={`text-xl px-2 font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-br from-slate-950 to-slate-800 dark:from-amber-300 dark:to-amber-700`}
      >
        {title}
      </h4>
      <p className="dark:text-slate-400  mb-3 px-2 font-light text-sm">{skills}</p>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={statsVariants}
        className="stats  p-2 dark:bg-slate-900 bg-slate-100"
      >
        <div className="flex">
          <p className="text-xs mb-1">
            {labelOne}
            <span className="text-emerald-500 font-bold ml-3"> {statOne}</span>
          </p>
        </div>
        <div className="flex">
          <p className="text-xs  mb-1">
            {labelTwo}
            <span className="text-emerald-500 font-bold ml-3">{statTwo}</span>
          </p>
        </div>
        <div className="flex">
          <p className="text-xs mb-1">
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
        "Organic Search Traffic, Conversion Rate, Pageviews, Faster Page Loads",
      labelOne: "Organic search traffic:",
      statOne: "+281%",
      labelTwo: "Year over year conversion rate:",
      statTwo: "+59%",
      labelThree: "Year over year pageviews:",
      statThree: "+255%",
      color: "green",
    },
    {
      link: "https://www.mrslumber.com/",
      src: "/mrs.png",
      width: 300,
      height: 300,
      alt: "Image of Mrs Lumber's website",
      title: "Mrs Lumber",
      skills: "Website Visits, Pageviews, Faster Page Speeds",
      labelOne: "Website visits:",
      statOne: "+88%",
      labelTwo: "Year over year pageviews:",
      statTwo: "+86%",
      labelThree: "Year over year page speed:",
      statThree: "+60%",
      color: "cyan",
    },
    {
      link: "https://cpd.chbabc.org/",
      src: "/chba.png",
      width: 300,
      height: 300,
      alt: "Image of CHBA's website",
      title: "CHBA",
      skills: "Website Visits, Organic Search Traffic, Pageviews",
      labelOne: "Website visits:",
      statOne: "+60%",
      labelTwo: "Organic search traffic:",
      statTwo: "+66%",
      labelThree: "Pageviews:",
      statThree: "+79%",
      color: "red",
    },
    {
      link: "https://www.summfoods.com/",
      src: "/summ.png",
      width: 300,
      height: 300,
      alt: "Image of Summ's website",
      title: "Summ Foods",
      skills: "Average Session Duration, Pages Per Session, Referral Traffic",
      labelOne: "Average session duration:",
      statOne: "+105%",
      labelTwo: "Year over year pages per session:",
      statTwo: "+64%",
      labelThree: "Year over year referral traffic:",
      statThree: "+970%",
      color: "amber",
    },
    {
      link: "", // MISSING LINK
      src: "/kitimat.png",
      width: 300,
      height: 300,
      alt: "Image of Kitimat's website",
      title: "Kitimat Bound",
      skills: "Organic Search Traffic, Pageviews, Mobile Traffic",
      labelOne: "Organic search traffic:",
      statOne: "+101%",
      labelTwo: "Year over year pageviews:",
      statTwo: "+72%",
      labelThree: "Mobile traffic:",
      statThree: "+117%",
      color: "purple",
    },
    {
      link: "", // MISSING LINK
      src: "/delta.png",
      width: 300,
      height: 300,
      alt: "Image of Delta Q's website",
      title: "Delta Q Technologies",
      skills: "Faster Page Speeds, More Time on Site, Pages Per Session",
      labelOne: "Faster page speeds:",
      statOne: "+86%",
      labelTwo: "Year over year more time on site:",
      statTwo: "+73%",
      labelThree: "Year over year pages per session:",
      statThree: "+53%",
      color: "green",
    },
    {
      link: "https://lindomestructures.com/",
      src: "/lindome.png",
      width: 300,
      height: 300,
      alt: "Image of Lindome's website",
      title: "Lindome",
      skills: "Organic Search Traffic, Pageviews, AVG. Pages Per Session",
      labelOne: "Organic search traffic:",
      statOne: "+25%",
      labelTwo: "Year over year pageviews:",
      statTwo: "+43%",
      labelThree: "Average pages per session:",
      statThree: "+31%",
      color: "blue",
    },
    {
      // TODO ADD RCBC
      link: "https://www.circularmaterials.ca/about/",
      src: "/RCBC.png",
      width: 300,
      height: 300,
      alt: "Image of Circular Materials' website",
      title: "Circular Materials",
      skills: "Organic Search Traffic, Total Pageviews, Pages Per Session",
      labelOne: "Organic search traffic:",
      statOne: "+132%",
      labelTwo: "Year over year total pageviews:",
      statTwo: "+318%",
      labelThree: "Year over year pages per session:",
      statThree: "+116%",
      color: "yellow",
    },
    {
      link: "", // MISSING LINK
      src: "/nexii.png",
      width: 300,
      height: 300,
      alt: "Image of Nexii's website",
      title: "Nexii",
      skills: "Organic Search Traffic, Pageviews, U.S. Traffic",
      labelOne: "Organic search traffic:",
      statOne: "+90%",
      labelTwo: "Year over year pageviews:",
      statTwo: "+113%",
      labelThree: "Year over year U.S. traffic:",
      statThree: "+314%",
      color: "pink",
    },
    {
      link: "https://pcrs.ca/",
      src: "/pcrs.png",
      width: 300,
      height: 300,
      alt: "Image of PCR's website",
      title: "PCRS",
      skills: "Bounce Rate, Longer Sessions, More Search Traffic",
      labelOne: "Year over year bounce rate:",
      statOne: "-57%",
      labelTwo: "Year over year longer sessions:",
      statTwo: "+43%",
      labelThree: "First month post-launch more search traffic:",
      statThree: "+10%",
      color: "purple",
    },
    {
      link: "https://www.lgm.ca/",
      src: "/lgm.png",
      width: 300,
      height: 300,
      alt: "Image of LGM Financial Services' website",
      title: "LGM Financial Services",
      skills: "Website Users, Pages Per Session, Faster Page Loads",
      labelOne: "Website users:",
      statOne: "+70%",
      labelTwo: "Year over year pages per session:",
      statTwo: "+57%",
      labelThree: "Year over year page speed:",
      statThree: "+20%",
      color: "green",
    },
    {
      link: "https://www.craftbeermarket.ca/",
      src: "/craft.png",
      width: 300,
      height: 300,
      alt: "Image of Craft Beer Market's website",
      title: "Craft Beer Market",
      skills: "Organic Search Traffic, Faster Page Loads, Organic Impressions",
      labelOne: "Organic search traffic:",
      statOne: "+73%",
      labelTwo: "Year over year faster page loads:",
      statTwo: "+55%",
      labelThree: "Year over year organic impressions:",
      statThree: "+115%",
      color: "blue",
    },
    {
      link: "https://visitprincerupert.com/",
      src: "/rupert.png",
      width: 300,
      height: 300,
      alt: "Image of Tourism Prince Rupert's website",
      title: "Tourism Prince Rupert",
      skills: "Organic Search Traffic, Pageviews, Mobile Traffic",
      labelOne: "Organic search traffic:",
      statOne: "+40%",
      labelTwo: "Year over year pageviews:",
      statTwo: "+46%",
      labelThree: "Year over year mobile traffic:",
      statThree: "+52%",
      color: "yellow",
    },
  ];

  return (
    <div className="w-full flex flex-row gap-3 flex-wrap" id="jobsdone">
      {jobItems.map((item, index) => (
        <JobItem key={index} {...item} />
      ))}
    </div>
  );
};
