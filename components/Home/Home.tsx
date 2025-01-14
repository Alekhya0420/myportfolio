import React, {useEffect} from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Knowledge from './Knowledge/Knowledge'
import Project from './Project/Project'
import Details from './Details/Details'




const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Knowledge/>
      <Project/>
      <Details/>
    </div>
  )
}

export default Home