import Image from 'next/image'
import { ReactNode } from 'react'

type FeaturedBuildProps = {
    subHeading: string;
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
    fontStyle: string;
}

export const FeaturedBuild = (props: FeaturedBuildProps) => {
    const { subHeading, heading, description, image, imageAlt, fontStyle } = props;

    return (
        <div className="flex flex-row flex-wrap pl-12 relative justify-center items-center mb-20">
        <div className="w-6/12">

          <h6>{subHeading}</h6>
          <h3 className={`text-6xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br ${fontStyle}`}>
           {heading}</h3>
          <p className="text-xl mb-12">
          {description}
          </p>
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