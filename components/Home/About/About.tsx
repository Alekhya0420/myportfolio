import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  return (
    

    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>About me</SectionHeading>

      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mt-20'>
      {/*text content*/}
      <div>
      <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
      {aboutInfo.title}
      </h1>
      <p className='text-sm md:text-base  mt-5 text-gray-300 text-opacity-60'>{aboutInfo.description}</p>
      </div>

      
      {/*stateistics*/}
      <div className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>

      <div><Image src="/images/training.png" alt="image" width={80} height={80}/>
      <p className='text-white text-cyan-300 text-1xl'>7 months training</p> 
      </div> 

      <div><Image src="/images/completed.png" alt="image" width={80} height={80}/>
      <p className='text-cyan-300 text-1xl'>4+ projects</p> 
      </div> 

      </div> 

      </div>
    </div>
  )
}

export default About