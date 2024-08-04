import React from 'react'
import topBar from '../../../public/assets/img/topbarCoverImg.png'


const Topbar = ({title,desc,from,to}) => {
    return (
        <div className="relative">
            <img src={topBar} alt="Image" className="w-full h-80 lg:h-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4">
                <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-serif">{title}</span>
                <span className="text-white max-w-screen-md text-sm sm:text-sm md:text-base lg:text-lg font-bold font-serif text-center">
                    {desc}
                </span>
                <span className="text-white text-xs font-serif">{from } &gt; {to}</span>
            </div>
        </div>
    )
}

export default Topbar