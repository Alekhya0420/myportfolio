"use client"
import {BaseInfo} from '@/Data/data'
import React from 'react'
import {FaDownload} from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0F0715] overflow-hidden relative'>
    <div className='flex justify-center  flex-col  w-4/5  text-white h-full mx-auto'>

    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap:12'>
        {/*text content of page*/}

        <div>
        <h1 data-aos="fade-left"
        className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300'>I am {BaseInfo.name}</h1>

        <h1 data-aos="fade-right" data-aos-delay="100"
        className='text-bg sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl md:leading-[3rem]
        xl:leading-[3.2rem] text-white xl:leading-[3.5rem]'>{BaseInfo.position}</h1>

        <p data-aos="fade-left" data-aos-delay="200"    
        className='text-sm md:text-base  mt-5 text-white text-opacity-60'>{BaseInfo.description}</p>

        <button data-aos="zoom-in" data-aos-delay="300"    
        className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg
        transform transition-all duration-200 mt-6 rounded-lg bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'>
            <span>Download Cv</span>
            <FaDownload/>
        </button>
        </div>


        {/*image*/}
        <div data-aos="zoom-in" data-aos-delay="400" 
        className='mx-auto hidden lg:block rounded-[3rem] border-blue-950 overflow-x-hidden'>
         <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={300} height={200}></Image>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Hero