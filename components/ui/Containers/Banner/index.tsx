'use client'
import React, { FC } from 'react';
import Image from 'next/image';

type BannerProps = {
    location: string
    headerText: string
    bodyText: string
    subtitleText: string
}
const Banner: FC<BannerProps> = ({ location, headerText, bodyText, subtitleText }: BannerProps) => {
    return (
        <div className="h-1/3 w-screen relative text-center text-white font-bannerFont">
            <h1 className="pt-16 pb-4 text-5xl drop-shadow-md font-extrabold leading-tight" dangerouslySetInnerHTML={{ __html: headerText }}></h1>
            <h2 className="pb text-md ml-[12%] mr-[12%] 2xl:ml-[32%] 2xl:mr-[32%] tracking-wider leading-tight">{bodyText}</h2>
            <p className="pb-10 text-xl font-extrabold ">{subtitleText}</p>
            <Image src={location} alt="Banner Image" fill={true} sizes="100vw"
                objectFit="cover" className='-z-50' />
        </div >
    )
}
export default Banner;