"use client"

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Knowledge from './Knowledge/Knowledge'
import Project from './Project/Project'
import Details from './Details/Details'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Home = () => {

  useEffect(()=>{
    const initA0S =()=>{
      // await import("aos");
      AOS.init({
        duration:2000,
        easing:'ease',
        once:true,
        anchorPlacement:'top-bottom'
      })
    }
    initA0S();
  },[])


  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Knowledge/>
      <Project/>
      <Details/>
    </div>
  )
}

export default Home