import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import {projectData} from '@/Data/data'
import Link from 'next/link'
import Image from 'next/image'
import { IoLogoGithub } from "react-icons/io";

const Project = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
    <SectionHeading>My  Projects</SectionHeading>
    <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
    {
        projectData.map((project)=>{
            return <div key={project.id} className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300'>

            <Link href={project.url} target="_blank"> 
            <Image src={project.image} width={2000} height={300} alt="project"/>
            </Link>
            
            <Link href={project.gitrep}>
            <button type="button" 
className="flex items-center justify-center gap-2 mx-auto px-9 py-2 border border-red-600 bg-transparent text-red-600 rounded-lg hover:bg-red-600 transition-all duration-300 mt-4">
            <span className='text-white'>Git</span><IoLogoGithub className='text-white'/>
            </button>
            </Link>

            </div>
        })
    }
    </div>
    </div>
  )
}

export default Project