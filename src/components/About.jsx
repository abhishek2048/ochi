import React from 'react'

function About() {
  return (
    <div className='w-full pl-20 pr-40 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
     <h1 className='font-["Neue_Montreal"] text-[3.5vw] leading-[3.5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
     <div className='w-full flex gap-5 pt-12 mt-12 border-t-[1px] border-[#a1b526]'>
        <div className='w-1/2'>
            <h1 className='text-5xl'>Our Approach</h1>
            <button className='flex gap-8 items-center px-10  mt-10 h-[4vw] bg-zinc-900 rounded-full text-white text-center'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'></div>
     </div>
    </div>
  )
}

export default About