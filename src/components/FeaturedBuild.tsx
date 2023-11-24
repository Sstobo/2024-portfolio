import Image from 'next/image'
import { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'

type FeaturedBuildProps = {
    subHeading: string;
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
    fontStyle: string;
    link: string;
}

export const FeaturedBuild = (props: FeaturedBuildProps) => {
    const { subHeading, heading, description, image, imageAlt, fontStyle, link } = props;

    return (
        <div className="flex flex-row flex-wrap p-6 pl-12 relative justify-center items-center mb-20 dark:bg-slate-900  transition-all duration-150 rounded">
        <div className="w-6/12 pr-16">

          <h6 className="text-xl font-medium dark:text-slate-300">{subHeading}</h6>
          <h3 className={`text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br ${fontStyle}`}>
           {heading}</h3>
          <p className="text-xl mb-6 font-light">
          {description}
          </p>
          <a href={link} target="_blank" className="w-fit pr-10 bg-teal-200 hover:bg-teal-300 flex text-sm dark:bg-slate-700 hover:cursor-pointer transition-colors duration-75 rounded p-3 relative dark:hover:bg-slate-600">
            View Site <ExternalLink className="absolute h-4 w-4 right-4 top-3"/></a>
          </div>
          <div className="w-6/12">
            <Image 
              src={image}
              alt={imageAlt}
              width={600}
              height={800}
              className='rounded object-cover h-full'
            />
            </div>

          </div>
    )
}