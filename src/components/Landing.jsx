import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen pt-2">
        <div className='textstructure mt-[120px] px-20'>
            {["We Create", "Eye Opening", "Presentations"] .map((item,index) => {
                return(
                  <div className="masker">
                    <div className="w-fit flex items-end overflow-hidden">
                        {index === 1 && (
                          <motion.div initial={{width:0}} animate={{width:"10vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className='mr-[1vw] w-[10vw] rounded-md h-[6.2vw] -top-[1.2vw]  bg-green-500'></motion.div>
                        )}
                        <h1 className='pt-[2vw] -mb-[1vw]  uppercase text-[9vw] leading-[.90] font-["Founders_Grotesk_X-Condensed"]'>
                            {item}
                        </h1>
                    </div>
                  </div>
                );
            })}
        </div>
        <div className='border-t-[1px] border-zinc-900 mt-[5rem] flex justify-between items-center py-3 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item,index) =>
        <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        )}
        <div className="start flex items-center gap-3">
            <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm uppercase'>Start the Project</div>
            <div className='w-9 h-9 flex items-center justify-center border-[1px] border-zinc-700 rounded-full'>
            <span className='rotate-[45deg]'>
            <FaArrowUpLong />
            </span>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default LandingPage