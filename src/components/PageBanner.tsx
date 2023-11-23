import Page from '../app/about/page';
import { ArrowBigDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

type PageBannerProps = {
    heading: string;
    description: string;
    fontStyle: string;
    subheading?: string;
}


export const PageBanner = (props: PageBannerProps) => {
    const { heading, description, fontStyle, subheading } = props;

    return (

        <div className="w-12/12 mb-24 flex flex-row flex-wrap justify-between">
            <h2 className={`w-full mb-24 text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br ${fontStyle} `}>{heading}</h2>
            <p className="text-5xl mb-32  font-medium w-7/12">{description}</p>
            
            <div className="relative w-4/12">
                    <p className=" font-medium text-xl">{subheading}</p>
                    <div className={`absolute -top-12 -left-12 h-32 w-32 opacity-25 bg-gradient-to-br ${fontStyle}`}></div>
            </div>
            
            <div className="w-full mb-72">
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                    type: "bounce",
                    stiffness: 160,
                    damping: 20,
                    duration: 3, repeat: Infinity
                  }}
            >
            <div className={`dark:hover:bg-slate-950 dark:bg-slate-800 hover:bg-teal-300 bg-teal-200 hover:cursor-pointer rounded w-24 h-24 flex justify-center items-center duration-150 tranistion-all `} onClick={() => window.scrollTo({ top: 1100, behavior: 'smooth' })}>
            <ChevronsDown className="text-black dark:text-white h-20 w-20"/>
            </div>
            </motion.div>
            </div>
        </div>
    )
}