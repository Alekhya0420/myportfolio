"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import {navLinks} from '@/constant/constant';
import { HiBars3BottomLeft } from 'react-icons/hi2';

type props ={
  openNav:()=>void
}


const Nav = ({openNav}:props) => {

  const[navBg,setNavBg]=useState(false);
  useEffect(()=>{
  const handler =()=>{
  if(window.scrollY>90)
  {
    setNavBg(true);
  }
  if(window.scrollY<90)
  {
    setNavBg(false);
  }
  };
  window.addEventListener("scroll",handler);

  return ()=>{
    window.removeEventListener("scroll",handler);
  }
  
  },[])

  return (
    <div 
    className={`fixed h-[12vh] ${navBg?"bg-[#240b39]":"fixed"} transform transition-all duration-500 z-[10] w-full`}>
    <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>

    {/*Logo*/}
    <Image src="/images/logo.png" alt='logo' width={170} height={10} 
    className='ml-[-1.5rem] sm:ml-0'/>

    {/*Navlinks*/}
    <div className='flex items-center space-x-10'>
    <div className='hidden lg:flex items-center space-x-8'>
    {
      navLinks.map((navlink)=>{
        return <Link key={navlink.id} href={navlink.url}><p className='nav_link'>{navlink.label}</p></Link>
      })
    }
    </div>
    {/*button*/}

    <div>
    <button className='md:px-10 md:py-3  px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm
    bg-white hover:bg-gray-200 transition-all rounded-lg duration-200'>Hire me</button>
    </div>

    {/*Burger menu*/}
    <HiBars3BottomLeft 
    onClick={openNav} 
    className='w-8 h-8  cursor-pointer text-white lg:hidden'/>
    </div>

    </div>
    </div>
  )
}

export default Nav