import Page from '../app/about/page';
import { ArrowBigDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

type PageBannerProps = {
    heading: string;
    description: string;
    fontStyle: string;
}


export const PageBanner = (props: PageBannerProps) => {
    const { heading, description, fontStyle } = props;

    return (

        <div className="w-12/12 h-screen">
            <h2 className={`text-9xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br ${fontStyle} `}>{heading}</h2>
            <p className="text-5xl mb-48  font-medium">{description}</p>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                    type: "bounce",
                    stiffness: 160,
                    damping: 20,
                    duration: 3, repeat: Infinity
                  }}
            >
            <div className={`dark:hover:bg-slate-950 hover:bg-slate-200 hover:cursor-pointer rounded w-24 h-24 flex justify-center items-center duration-150 tranistion-all `} onClick={() => window.scrollTo({ top: 1100, behavior: 'smooth' })}>
            <ChevronsDown className="text-black dark:text-white h-20 w-20"/>
            </div>
            </motion.div>
        </div>
    )
}