// 

// import { motion, useAnimation } from 'framer-motion';
// import { Power4 } from 'gsap';
// import React, { useState } from 'react';

// function Featured() {
//     const cards = [useAnimation(), useAnimation()];

//     const handleHover = (index) => {
//         cards[index].start({y:"0"})
//     };

//     const handleHoverEnd = (index) => {
//         cards[index].start({y:"100%"})
//     };


//     return (
//         <div className='w-full py-20'>
//             <div className='w-full border-b-[1px] border-zinc-500 pb-16 px-14'>
//                 <h1 className='font-["Neue_Montreal"] text-6xl'>Featured projects</h1>
//             </div>
//             <div className='px-10'>
//                 <div className="cards w-full flex gap-10 mt-10">
//                     <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[70vh] rounded-xl bg-red-500">
//                         <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl z-[9] leading-none tracking-tight font-semibold font-["Founders_Grotesk_X-Condensed"] flex overflow-hidden'>
//                             {"FYDE".split('').map((item, index) => (
//                                 <motion.span key={index} initial={{ y: "100%" }} animate={cards[0]} transition={{ease:[0.83, 0, 0.17, 1], delay: index*0.54}}>
//                                     {item}
//                                 </motion.span>
//                             ))}
//                         </h1>
//                         <div className="card w-full h-full rounded-xl  overflow-hidden">
//                             <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
//                         </div>
//                     </motion.div>
//                     <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[70vh] rounded-xl bg-red-500">
//                         <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl z-[9] leading-none tracking-tight font-semibold font-["Founders_Grotesk_X-Condensed"]'>
//                             {"VISE".split('').map((item, index) => (
//                                 <span key={index} initial={{ y: "100%" }} animate={cards[1]} transition={{ease:[0.83, 0, 0.17, 1], delay: index*0.54}}>{item}</span>
//                             ))}
//                         </h1>
//                         <div className="card w-full h-full rounded-xl  overflow-hidden">
//                             <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Featured;

import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div className='w-full py-20'>
            <div className='w-full border-b-[1px] border-zinc-500 pb-16 px-14'>
                <h1 className='font-["Neue_Montreal"] text-6xl'>Featured projects</h1>
            </div>
            <div className='px-10'>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div 
                        onHoverStart={() => handleHover(0)} 
                        onHoverEnd={() => handleHoverEnd(0)} 
                        className="cardcontainer relative w-1/2 h-[70vh] rounded-xl bg-red-500"
                    >
                        <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl z-[9] leading-none tracking-tight font-semibold font-["Founders_Grotesk_X-Condensed"] flex overflow-hidden'>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span 
                                    key={index} 
                                    initial={{ y: "100%" }} 
                                    animate={cards[0]} 
                                    transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.1 }}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl  overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div 
                        onHoverStart={() => handleHover(1)} 
                        onHoverEnd={() => handleHoverEnd(1)} 
                        className="cardcontainer relative w-1/2 h-[70vh] rounded-xl bg-red-500"
                    >
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-7xl z-[9] leading-none tracking-tight font-semibold font-["Founders_Grotesk_X-Condensed"]'>
                            {"VISE".split('').map((item, index) => (
                                <motion.span 
                                    key={index} 
                                    initial={{ y: "100%" }} 
                                    animate={cards[1]} 
                                    transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.1 }}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl  overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Featured;

