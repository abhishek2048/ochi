import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
     <div className="text border-t-2 border-b-2 border-zinc-300  flex overflow-hidden whitespace-nowrap mt-[1vw] mb-[1vw]">
        <motion.h1 
    initial={{x:"0"}} 
    animate={{x:"-100%"}} 
    transition={{ease:"linear", repeat:Infinity, duration: 5}}
    className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"]  tracking-wider uppercase font-semibold pr-20'
>
    We are Ochi 
</motion.h1>
<motion.h1 
    initial={{x:"0"}} 
    animate={{x:"-100%"}} 
    transition={{ease:"linear", repeat:Infinity, duration: 5}}
    className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] tracking-wider uppercase font-semibold pr-20'
>
    We are Ochi
</motion.h1>
     </div>
    </div>
  )
}

export default Marquee